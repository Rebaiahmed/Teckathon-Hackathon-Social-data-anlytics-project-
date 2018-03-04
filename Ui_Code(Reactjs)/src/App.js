import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button,Navbar ,Grid,Row,Col,ProgressBar,Well, Label,ListGroupItem} from 'react-bootstrap';
import '../node_modules/react-vis/dist/style.css';
import {XYPlot, LineSeries,VerticalBarSeries,
  VerticalGridLines,
  HorizontalGridLines,
  XAxis,
    YAxis,
  VerticalBarSeriesCanvas,
  DiscreteColorLegend,
MarkSeries} from 'react-vis';
import {Doughnut} from 'react-chartjs-2';
var Papa = require('papaparse')
var LineChart = require("react-chartjs").Line;
var BarChart = require("react-chartjs").Bar
var PieChart = require("react-chartjs").Pie;
var RadarChart = require("react-chartjs").Radar;
var PolarAreaChart =require("react-chartjs").PolarArea;
var DoughnutChart = require("react-chartjs").Doughnut;
var axios = require('axios');
var topojson = require('topojson');
var _ = require('lodash');



class App extends Component {



  constructor()
  {
  super()
  this.state = {
     posts_most_liked :[],
     posts_most_shared :[],
     posts_most_commented :[],
     reactions :[],
     words_posts :[],

   }
  }



  componentDidMount() {


    //**********get the posts most liked *********
      axios.get(`http://localhost:9000/posts_likes`)
        .then(res => {
          this.setState({ posts_most_liked:res.data.slice(0,6) });
        });


        //**********get the posts most shared *********
          axios.get(`http://localhost:9000/posts_shares`)
            .then(res => {
              this.setState({posts_most_shared:res.data.slice(0,6) });
            });

            //**********get the posts most shared *********
              axios.get(`http://localhost:9000/posts_comments`)
                .then(res => {
                  this.setState({posts_most_commented:res.data.slice(0,6) });
                });


                axios.get(`http://localhost:9000/reactions`)
                  .then(res => {

                    this.setState({reactions:res.data });
                  });


                  axios.get(`http://localhost:9000/posts_words`)
                    .then(res => {

                      this.setState({words_posts:res.data });
                    });


}











  render() {


const { posts_most_liked} = this.state ;
const { posts_most_commented} = this.state ;
const { posts_most_shared} = this.state ;
const {reactions} = this.state ;
var words_posts = [
  '2218	mytek',
'999	ariana',
'998	tunis',
'981	charguia',
'834	magasins',
'747	nabeul',
'731	centre',
'487	asus',
'440	ttc',
'434	portable',
'374	lieu',
'374	prix',
'328	core',
'327	offres',
'277	tablette',
'243	samsung',
'243	tn/pc',
'209	led',
'201	disponible',
'201	www',
'180	gamer',
'175	gen',
'175	photo',
'175	tn/recherche',
'167	dual',
'160	meilleures',
'151	lenovo',
'143	acer',
'141	processeur',
'135	smartphone',
'134	bell',
'134	ssd',
'133	portable/',
'130	dell',
'130	pack',
'123	ram',
]


//*************prepare the data to be displayed**************//

const list_posts_most_liked = posts_most_liked.map((dev) =>
<Well> <Label><b>{ dev.status_message}</b> </Label>
number of likes :<h3><b> { dev.num_likes} </b> </h3>
<br/>
------------------------------
  </Well>
);

const list_posts_most_shared = posts_most_shared.map((dev) =>
<Well> <Label><b>{ dev.status_message}</b> </Label>
number of likes :<h3><b> { dev.num_shares} </b> </h3>
<br/>
------------------------------
  </Well>
);


const list_posts_most_commented = posts_most_commented.map((dev) =>
<Well> <Label><b>{ dev.status_message}</b> </Label>
number of likes :<h3><b> { dev.num_comments} </b> </h3>
<br/>
------------------------------
  </Well>
);



const list_reactions = reactions.map((dev) =>
<Well> <Label><b>{ dev.reaction }</b> </Label>
Total NUmber :<h3><b> { dev.number} </b> </h3>
<br/>
------------------------------
  </Well>
);

const list_words_posts = words_posts.map((dev) =>
<div>

<ListGroupItem bsStyle="success">{dev }</ListGroupItem>
</div>
);









//****************prepare the daatset for the charts
var labels = [];
var labels_commented =[];
var labels_shared =[];
var data_liked =[];
var data_commented =[];
var data_shared =[];
var reactionsData =[];
var labels_reactions =[];
var data_reactions =[];
var limit = 10 ;


//************process for posts most liked
_.forEach(posts_most_liked, function(user,i){

labels.push(user.link_name)
data_liked.push(user.num_likes);
})

//********process ofr posts most shared

_.forEach(posts_most_commented, function(user,i){

labels_commented.push(user.link_name)
data_commented.push(user.num_comments);
})

//*********porcess ofr posts most
_.forEach(posts_most_shared, function(user,i){

labels_shared.push(user.link_name)
data_shared.push(user.num_shares);
})



//*********porcess ofr posts most
_.forEach(reactions, function(user,i){

labels_reactions.push(user.reaction)
data_reactions.push(user.number);
})

//***********************




//***********************




var posts_liked = {
      labels,
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: data_liked
        },

      ]
     };

//*********************//
var posts_shared = {
      labels: labels_shared,
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: data_shared
        },

      ]
     };

     //*********************//
     var posts_commented = {
           labels: labels_commented,
           datasets: [
             {
               label: "My First dataset",
               fillColor: "rgba(220,220,220,0.5)",
               strokeColor: "rgba(220,220,220,0.8)",
               highlightFill: "rgba(220,220,220,0.75)",
               highlightStroke: "rgba(220,220,220,1)",
               data: data_commented
             },

           ]
          };

//*******************data for reactions*****************


var reactionsnsnssn= {
      labels :labels_reactions,
      datasets: [
        {
          label: "My First dataset",
          fillColor: "rgba(220,220,220,0.5)",
          strokeColor: "rgba(220,220,220,0.8)",
          highlightFill: "rgba(220,220,220,0.75)",
          highlightStroke: "rgba(220,220,220,1)",
          data: data_reactions
        },

      ]
     };



     //*************************************//
     var time_data = [
     {
     value: 11800,
     color:"#F7464A",
     highlight: "#FF5A5E",
     label: "19h-22h"
     },
     {
     value: 6610,
     color: "#46BFBD",
     highlight: "#5AD3D1",
     label: "22h-06h"
     },
     {
     value: 5270 ,
     color: "#FDB45C",
     highlight: "#FFC870",
     label: "06h-22h"
     }
     ]










    return (
      <div>

      <nav className="navbar navbar-inverse bg-primary">
     <a className="navbar-brand" href="#">ElMarketer</a>
       </nav>

<div className="container">

<Grid>

<br />
<br />
<br />
<br />
<br />
<br />

<br />
<br />
<br />
<br />
<br />
<br />


  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3>Les Meilleurs Produits aimées (liked) </h3>
  <div>

 { list_posts_most_liked }

</div>
    </Col>
    <Col xs={12} md={9}>


<BarChart data={posts_liked}  width="900" height="850"/>
    </Col>
  </Row>




  <br />
  <br />
  <br />
  <br />
  <br />
  <br />



  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3> Les Meilleurs Produits Commentées </h3>
  <div>
{ list_posts_most_commented }

</div>
    </Col>
    <Col xs={12} md={9}>


<BarChart data={posts_commented}  width="700" height="750"/>

    </Col>
  </Row>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />





    <Row className="show-grid">
      <Col xs={4} md={3}>
    <h3> Les Meilleurs Produits partagées </h3>
    <div>
  { list_posts_most_shared }

  </div>
      </Col>
      <Col xs={12} md={9}>


  <BarChart data={posts_shared}  width="700" height="750"/>

      </Col>
    </Row>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />




    <Row className="show-grid">
      <Col xs={4} md={3}>
    <h3> Le Nombre Totale d intearctions Avec votre Page  </h3>
    {  list_reactions }
    <div>

  </div>
      </Col>
      <Col xs={12} md={9}>
<BarChart data={reactionsnsnssn}  width="900" height="850"/>
      </Col>
    </Row>


  <br />
  <br />
  <br />
  <br />
  <br />
  <br />
















      <Row className="show-grid">
        <Col xs={4} md={3}>
      <h3> Temps utilisées  </h3>
      <div>

    </div>
        </Col>
        <Col xs={12} md={9}>
<PieChart data={time_data} width="400" height="350" />

        </Col>
      </Row>


    <br />
    <br />
    <br />
    <br />
    <br />
    <br />






  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3> Les Mots les plus utilisées Dans Vos Postes </h3>
  <div>

</div>
    </Col>
    <Col xs={12} md={9}>


 { list_words_posts }
    </Col>
  </Row>






  <br />
  <br />
  <br />
  <br />
  <br />
  <br />



  <Row className="show-grid">
    <Col xs={4} md={3}>
  <h3> Les Mots les plus utilisées Dans les Commentaires </h3>
  <div>
  <Well>Ici les mots </Well>

</div>
    </Col>
    <Col xs={12} md={9}>
    </Col>
  </Row>

  <br />
  <br />
  <br />
  <br />
  <br />
  <br />






    <Row className="show-grid">
      <Col xs={4} md={3}>
    <h3> Les Mots les plus utilisées Dans les Messages </h3>
    <div>
    <Well>Iic les mots </Well>

  </div>
      </Col>
      <Col xs={12} md={9}>
      </Col>
    </Row>

    <br />
    <br />
    <br />
    <br />
    <br />
    <br />












</Grid>

</div>












      </div>
    );
  }
}

export default App;
