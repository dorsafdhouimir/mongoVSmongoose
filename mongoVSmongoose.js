const express = require('express');
const bodyParser = require('body-parser');
const router = require('./routermongooseVSmongo/routerVS')
const app = express();
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
const mongoose = require('mongoose');


mongoose.Promise = global.Promise;
mongoose.connect("mongodb://127.0.0.1/mongoVSmongoose").then(() => {
    console.log("Databse Connected Successfully!!");
}).catch(err => {
    console.log('Could not connect to the database', err);
    process.exit();
});
//---------------------------------------

