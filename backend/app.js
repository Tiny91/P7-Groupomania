const express = require('express');
const sequelize = require('./src/sequelize');
const app = express();


const path = require ('path');
// pour accéder de façon dynamique au differents "chemins" du serveur

    
     // Politique de sécurité pour le partage de ressources(cors)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

sequelize.initDb()

require ('./src/routes/article/create')(app) 
require ('./src/routes/article/findAll')(app) 
require ('./src/routes/article/findOne')(app)
require ('./src/routes/article/delete')(app)
require ('./src/routes/user/signUp')(app)
require ('./src/routes/user/login')(app)
module.exports = app