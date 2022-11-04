# TestRepository   

This is a post rest api that has an JSON object passed into a url and generates an output JSON with the location of the closest robot.

Original Assignement:  Your job is to write an API with an endpoint which accepts a payload with a load which needs to be moved including its identifier and current x,y coordinates and your endpoint should make an HTTP request to the robots endpoint and return which robot is the best to transport the load based on which one is closest the load's location. If there is more than 1 robot within 10 distance units of the load, return the one with the most battery remaining.

Curl Statement to hit my new api:
curl -X POST http://localhost:5001/api/robots/closest
   -H 'Content-Type:application/json'
   -d '{loadId:231,x:5,y:3}'

Passing those values as url parameters to the Curl statement:
curl -X POST "http://localhost:5001/api/robots/closest?loadId=231&x=5&y=3" -H 'Content-Type:application/json'

API returns for the curl statement above: {"robotId":"4","batteryLevel":37,"distanceToGoal":5}  //location of the closest robot

I did not code the final portion of this assignment due to time restrictions.  To find all robots within 10 units of the load, use the filter function in Javascript
to filter all robotIds within a value of 10 units or less for the distanceToGoal field.  Sort the resulting robotId array by batteryLevel and then return the last index element of that object array.

I decided to code the Post REST API in Node.js using the Express module.  I also use fetch to access mockapi.io/robots.  To run my API, install Node, Express, and the node-fetch-commonjs module, create a directory, and install the files above.  My api is located in server.js so run node server.js from the directory where you installed the files to start the node server and load the code.  Then run this curl statement from a separate terminal window, curl -X POST "http://localhost:5001/api/robots/closest?loadId=231&x=5&y=3" -H 'Content-Type:application/json'.  A response will appear in the curl window with the closest robot.
