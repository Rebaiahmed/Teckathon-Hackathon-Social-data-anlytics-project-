
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
import csv
from pyspark.mllib.feature import Word2Vec,HashingTF, IDF
#********* Create a session of spark to excute our actions***********
#********* and connect to our mongodb database*********************

spark = SparkSession \
    .builder \
    .appName("DatabaseProject") \
    .getOrCreate()

#****************Prepare the RDD**************************



df = spark.read.format("com.mongodb.spark.sql.DefaultSource")\
    .option("spark.mongodb.input.uri", "mongodb://localhost:27017/Techathon.Myteck").load()

comments =  spark.read.format("com.mongodb.spark.sql.DefaultSource")\
    .option("spark.mongodb.input.uri", "mongodb://localhost:27017/Techathon.comments").load()






 # read input text file to RDD
lines = sc.textFile("./posts.txt")
 
  # collect the RDD to a list
llist = lines.collect()
print("*********************************************")
  # print the list
for line in llist:
    print(line)

