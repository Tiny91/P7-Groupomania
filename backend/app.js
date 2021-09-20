const express = require('express');
const sequelize = require('./src/sequelize');
const app = express();
const cors = require('cors');
const helmet = require ('helmet');

app.use (helmet());
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());

sequelize.initDb()

require ('./src/routes/post/create')(app)
require ('./src/routes/post/findAll')(app) 
require ('./src/routes/post/findOne')(app)
require ('./src/routes/post/deletePost')(app)
require ('./src/routes/post/modifyPost')(app)
require ('./src/routes/post/findAllByUser')(app)
require ('./src/routes/post/deleteAllByUser')(app)
require ('./src/routes/user/signUp')(app)
require ('./src/routes/user/login')(app)
require ('./src/routes/user/deleteUser')(app)
require ('./src/routes/user/findUser')(app)
require ('./src/routes/user/findAllUsers')(app)
require ('./src/routes/comment/findAllByPost')(app)
require ('./src/routes/comment/findAllByUser')(app)
require ('./src/routes/comment/addComment')(app)
require ('./src/routes/comment/findComment')(app)
require ('./src/routes/comment/modifyComment')(app)
require ('./src/routes/comment/deleteComment')(app)
module.exports = app