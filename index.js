const express =require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const {mongoose} =require('./db')
var user=require('./userController')
var app =express()
app.use(bodyParser.json())
app.use(cors({origin:'*'}));

app.listen(8000,() => console.log('Server started at port 8000 - http://localhost:8000/'));
app.use('./user',user);
