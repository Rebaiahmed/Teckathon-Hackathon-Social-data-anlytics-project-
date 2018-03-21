from pyspark import SparkContext,SparkConf
from datetime import datetime
import re
from pyspark.sql.functions import explode, desc
from pyspark.sql.functions import udf
from pyspark.sql.types import *
import csv


punctuation = re.compile(r'[-.?!,":;()|0-9]')










def extract_tokens(sentence):
    """Tokenization of a given sentence.
       Drop stopwords, punctuations, numbers.
       Change the sentence to lowercase."""

    if(sentence) :
        tokens = punctuation.sub(' ', sentence.replace("'", " ")).lower().split()
        tokens_filtered = [word for word in tokens if (word not in stopwords) and (len(word) > 2)]
        return tokens_filtered
    else :
        return []





if __name__ == "__main__":

    conf = SparkConf().setAppName("Words count").setMaster("local")
    sc = SparkContext(conf=conf)
    text_file = sc.textFile("./posts.txt")
    stopwords = sc.textFile("./stopwords_frensh.txt").collect()
    llist = text_file.collect()
    for lin in llist:
        print(type(extract_tokens(lin)))
        file = open('./test.txt','a')
        file.write(str(extract_tokens(lin)))



    text_file = sc.textFile("./posts_words.txt")
    counts = text_file.flatMap(lambda line: line.replace(';',' ').replace(',',' ').split(" ")) \
             .map(lambda word: (word, 1)) \
             .reduceByKey(lambda a, b: a + b)


    counts.saveAsTextFile("./results_frameworks")
