const express = require('express');
const app = express();
const {Sequelize, DataTypes } = require('sequelize');
const articleModel = require('./models/article');
const userModel = require('./models/user');

    //connexion avec BDD via SEQUELIZE
const sequelize = new Sequelize('groupomania', 'root', 'root',{
    host : 'localhost',
    dialect: 'mysql',
    logging: false
});
sequelize.authenticate()
    .then(_ => console.log('connexion avec BDD groupomania établie'))
    .catch(error => console.log(`la connexion a échoué ${error}`));
const Article = articleModel(sequelize,DataTypes)
const User = userModel(sequelize, DataTypes)
sequelize.sync()
    .then(_=> console.log('tables synchronisées'))

    //gestion des variables d'environnement
const dotenv = require('dotenv').config();

    //sécurisation des entêtes HTTP
const helmet = require ('helmet');
app.use (helmet());

    // gestion des chemins de fichiers
const path = require('path');   

    // Politique de sécurité pour le partage de ressources(cors)
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

app.use(express.urlencoded({extended:true}));
app.use(express.json());

module.exports = app