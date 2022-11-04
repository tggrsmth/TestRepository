const express = require ('express');
const fetch = require("node-fetch-commonjs");
const PORT = parseInt(process.env.PORT,10) || 5001;
const app = express();

app.use(express.json());

app.post('/api/robots/closest', function (req, res){
    var closest=[];
    var distance;
    let keyx1 = req.query.x
    console.log('querystring x', keyx1);
    let keyy1 = req.query.y
    console.log('querystring y', keyy1);
    fetch('https://60c8ed887dafc90017ffbd56.mockapi.io/robots')
    .then (res => res.json())
    .then (json => {
    for (var i=0; i<json.length; i++) {	
     const keyx2 = json[i].x;
     const keyy2 = json[i].y;
     distance =(Math.sqrt((keyx1 - keyx2)**2 + (keyy1 -keyy2 )
**2))
     console.log('distance is', distance)
     json[i].distanceToGoal = distance
     closest.push(json[i]);
  }
 closest.sort(function(a, b) {
  var keyA = new Date(a.distanceToGoal),
    keyB = new Date(b.distanceToGoal);
  // Compare the 2 dates
  if (keyA < keyB) return -1;
  if (keyA > keyB) return 1;
  return 0;
});
 delete closest[0].x;
 delete closest[0].y;	
 return res.status(200).send(closest[0]);    
 });
 });
  
app.listen(PORT, ()=> console.log("Server running on 5001"));