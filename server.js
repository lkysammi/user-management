//import libraries
const express = require('express');
const app = express();
const mongoose = require('mongoose');
var routes = require('./routes/routes');

//start server
app.listen(4000, function check(error){
    if(error){
        console.log("Error");
    }else{
        console.log("Service Started");
    }
});

//connect to MongoDB
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/incident",{useNewUrlParser: true, useUnifiedTopology: true},
function checkMongoDBConnection(error){
    if(error){
        console.log("Error in MongoDB Connection");
    }else{
        console.log("Connected to MongoDB");
    }
});

app.use(express.json());
app.use(routes);