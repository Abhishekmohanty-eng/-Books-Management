const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const app = express();
const multer= require("multer")
const { AppConfig } = require('aws-sdk')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use( multer().any())

mongoose.connect("mongodb+srv://ABHI:1rgLK1SKF60O1lEF@cluster0.skx8q.mongodb.net/test", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected successfully......."))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});