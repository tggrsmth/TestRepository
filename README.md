# TestRepository   

This is a rest api that has an JSON object passed into a url and generates an output JSON with the location of the closest robot

Your job is to write an API with an endpoint which accepts a payload with a load which needs to be moved including its identifier and current x,y coordinates and your endpoint should make an HTTP request to the robots endpoint and return which robot is the best to transport the load based on which one is closest the load's location. If there is more than 1 robot within 10 distance units of the load, return the one with the most battery remaining.

Call the api using:  https://localhost:5001/api/robots/closest?robotId=58?distanceToGoal=49.9?batteryLevel=30 //Indicates current battery level of the robot.

Curl Statement to hit my new api:
curl -X POST https://localhost:5001/api/robots/closest
   -H 'Content-Type: application/json'
   -d '{"robotId":58,"distanceToGoal":49,"batteryLevel":30}'
