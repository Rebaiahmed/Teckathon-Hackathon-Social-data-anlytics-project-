
'''spark-submit --packages org.mongodb.spark:mongo-spark-connector_2.11:2.2.0 spark.py
'''

#***** import the necessary packages*************


from pyspark.sql import SparkSession
from pyspark.sql.functions import desc
import pandas as pd
import pandas_profiling
import requests
requests.packages.urllib3.disable_warnings()
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns
from pyspark.mllib.feature import Word2Vec,HashingTF, IDF
#********* Create a session of spark to excute our actions***********
#********* and connect to our mongodb database*********************

spark = SparkSession \
    .builder \
    .appName("DatabaseProject") \
    .config("spark.mongodb.input.uri", "mongodb://127.0.0.1/Techathon") \
    .config("spark.mongodb.output.uri", "mongodb://127.0.0.1/Techathon") \
    .getOrCreate()

#****************Prepare the RDD**************************



df = spark.read.format("com.mongodb.spark.sql.DefaultSource")\
    .option("spark.mongodb.input.uri", "mongodb://localhost:27017/Techathon.Myteck").load()



comments =  spark.read.format("com.mongodb.spark.sql.DefaultSource")\
    .option("spark.mongodb.input.uri", "mongodb://localhost:27017/Techathon.comments").load()

print("************************************************************************************************")


#print(df.select('status_message').toPandas().to_csv('posts.txt'))





#print(df.select([c for c in df.columns if c in ["_id ","link_name" , "num_loves","num_wows","num_hahas","num_angrys","num_special","status_message" , "status_type"]]).sort(desc("num_loves")).toPandas().to_csv('reactions.csv'))



#df.select([c for c in df.columns if c in ["_id ","link_name" , "num_likes","status_message" , "status_type"]]).sort(desc("num_likes")).toPandas().to_csv('test.csv')





print("************************************************************************************************")




'''df.select([c for c in df.columns if c in ["_id ","link_name" , "num_loves","status_message" , "status_type"]]).sort(desc("num_loves")).toPandas().to_csv('num_loves.csv')


print("************************************************************************************************")




df.select([c for c in df.columns if c in ["_id ","link_name" , "num_comments","status_message" , "status_type"]]).sort(desc("num_comments")).toPandas().to_csv('num_comments.csv')



print("************************************************************************************************")




df.select([c for c in df.columns if c in ["_id ","link_name" , "num_shares","status_message" , "status_type"]]).sort(desc("num_shares")).toPandas().to_csv('num_shares.csv')





print("************************************************************************************************")







print("************************************************************************************************")'''




data1 =df.select([c for c in df.columns if c in ["_id ","link_name" , "num_angrys","status_message" , "status_type"]]).sort(desc("num_angrys")).toPandas().to_csv('num_angrys.csv')
data2 =df.select([c for c in df.columns if c in ["_id ","link_name" , "num_sads","status_message" , "status_type"]]).sort(desc("num_sads")).toPandas().to_csv('num_sads.csv')
data3 =df.select([c for c in df.columns if c in ["_id ","link_name" , "num_loves","status_message" , "status_type"]]).sort(desc("num_loves")).toPandas().to_csv('num_loves.csv')

print(data1)
print(data2)
print(data3)

fd = open('reations.csv','a')
fd.write(data1)
fd.write(data2)
fd.write(data3)
fd.close()



#***********************************Text mining *****************************************#



'''documents = spark.sparkContext.textFile("./messages.txt").map(lambda line: line.split(" "))

print("************************* documents*****************************")
print(documents)
hashingTF = HashingTF()
tf = hashingTF.transform(documents)

# While applying HashingTF only needs a single pass to the data, applying IDF needs two passes:
# First to compute the IDF vector and second to scale the term frequencies by IDF.
tf.cache()
idf = IDF().fit(tf)
tfidf = idf.transform(tf)

# spark.mllib's IDF implementation provides an option for ignoring terms
# which occur in less than a minimum number of documents.
# In such cases, the IDF for these terms is set to 0.
# This feature can be used by passing the minDocFreq value to the IDF constructor.
idfIgnore = IDF(minDocFreq=2).fit(tf)
tfidfIgnore = idfIgnore.transform(tf)


print(tfidfIgnore)'''



'''word2vec = Word2Vec()
model = word2vec.fit(documents)

synonyms = model.findSynonyms('1', 5)

for word, cosine_distance in synonyms:
    print("{}: {}".format(word, cosine_distance))'''