const express = require('express');
const sequelize = require('./src/sequelize');
const app = express();
const cors = require('cors');
const path = require ('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

sequelize.initDb()

require ('./src/routes/post/create')(app) 
require ('./src/routes/post/findAll')(app) 
require ('./src/routes/post/findOne')(app)
require ('./src/routes/post/delete')(app)
require ('./src/routes/user/signUp')(app)
require ('./src/routes/user/login')(app)
module.exports = app