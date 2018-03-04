const express = require('express');
const morgan = require('morgan');
const path = require('path');
const  request = require('request');
const app = express();
const axios = require("axios");
const cors = require('cors');
const crypto = require('crypto');
const csv=require('csvtojson')
var bodyParser = require('body-parser')
const PORT = process.env.PORT || 9000;

//****************************************//
//***********************//
// Setup logger


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(morgan(':remote-addr - :remote-user [:date[clf]] ":method :url HTTP/:http-version" :status :res[content-length] :response-time ms'));
// Serve static assets
app.use(express.static(path.resolve(__dirname, '..', 'src')));
//********************************//
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
//***********************************************//
//********************************************//







//**************test csv files*******************//







/*************GET POSTS BY LIKES*************/

app.get('/posts_likes', function(req,res){


  var list =[];
  csv()
  .fromFile('data/queries_results/num_likes.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})





/*************GET POSTS BY Shares*************/

app.get('/posts_shares', function(req,res){


  var list =[];
  csv()
  .fromFile('data/queries_results/num_shares.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})













/*************GET POSTS BY COMMENTS *************/

app.get('/posts_comments', function(req,res){


  var list =[];
  csv()
  .fromFile('data/queries_results/num_comments.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      console.log("jsosn" + JSON.stringify(jsonObj));
      list.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list));
      res.json(list);
  })

})






/*************GET POSTS reactions (sad) *************/

app.get('/posts_sads', function(req,res){


  var list_reactions =[];
  csv()
  .fromFile('data/queries_results/num_sads.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list_reactions.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list_reactions))
      res.json(list_reactions);
  })

})






/*************GET POSTS reactions (loves) *************/

app.get('/posts_loves', function(req,res){


  var list_reactions =[];
  csv()
  .fromFile('data/queries_results/num_loves.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list_reactions.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list_reactions))
      res.json(list_reactions);
  })

})










/*************GET POSTS reactions (angrys) *************/

app.get('/num_angrys', function(req,res){


  var list_reactions =[];
  csv()
  .fromFile('data/queries_results/num_angrys.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list_reactions.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list_reactions))
      res.json(list_reactions);
  })

})
















/*************GET POSTS reactions (specials) *************/

app.get('/num_special', function(req,res){


  var list_reactions =[];
  csv()
  .fromFile('data/queries_results/num_special.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list_reactions.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list_reactions))
      res.json(list_reactions);
  })

})












/*************GET POSTS reactions (wawas) *************/

app.get('/wawas', function(req,res){


  var list_reactions =[];
  csv()
  .fromFile('data/queries_results/num_wawas.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list_reactions.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list_reactions))
      res.json(list_reactions);
  })

})







/*************GET POSTS reactions (hahahs) *************/

app.get('/hahahs', function(req,res){


  var list_reactions =[];
  csv()
  .fromFile('data/queries_results/num_hahas.csv')
  .on('json',(jsonObj)=>{
      // combine csv header row and csv line to a json object
      // jsonObj.a ==> 1 or 4
      //console.log("jsosn" + JSON.stringify(jsonObj));
      list_reactions.push(jsonObj)
  })
  .on('done',(error)=>{
      console.log('end')
      console.log("our list" + JSON.stringify(list_reactions))
      res.json(list_reactions);
  })

})


//*********************************************************
//*************get list of reactions************************

app.get('/reactions', function(req,res){

//**********collect all data ***********
var list_reactions =[

{'reaction':'total_likes','number':621254},
{'reaction':'total_comments','number':31221},
{'reaction':'total_loves','number':2080},
{'reaction':'total_sads','number':475},

]

res.json(list_reactions);


})













//**********send words posts******************

app.get('/posts_words', function(req,res){


  var fs  = require("fs");
var lines =[];
  require('fs').readFileSync('text_mining_files/posts_words_count.txt').toString().split(/\r/).forEach(function(line){
    console.log(line);
    lines.push(line)

  })
  res.json(lines)


  /*fs.readFile('words_data/posts_words_count.txt', function(err, f){

     //console.log(JSON.stringify(f));
      //var array = f.toString().split(' ');
      //console.log(array);
      res.json("ok")
  });*/

})







//**********send words posts******************

app.get('/comments_words', function(req,res){


  var fs  = require("fs");
  fs.readFile('words_data/posts_counts_words.txt', function(err, f){
      var array = f.toString().split('\n');
      res.json(array)
  });

})






//**********send words posts******************

app.get('/messages_words', function(req,res){


  var fs  = require("fs");
  fs.readFile('words_data/posts_counts_words.txt', function(err, f){
      var array = f.toString().split('\n');
      res.json(array)
  });

})







app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});
