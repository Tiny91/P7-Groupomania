const express = require('express');
const sequelize = require('./src/db/sequelize');
const app = express();

    
     // Politique de sécurité pour le partage de ressources(cors)
// app.use((req, res, next) => {
//    res.setHeader('Access-Control-Allow-Origin', '*');
//    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
//    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
//  next();
// });

app.use(express.urlencoded({extended:true}));
app.use(express.json());

sequelize.initDb()

require ('./src/db/routes/create')(app) 
require ('./src/db/routes/findAll')(app) 
require ('./src/db/routes/findOne')(app)
require ('./src/db/routes/delete')(app)
module.exports = app