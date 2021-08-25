//fichier de config et de synchro sequelize/BDD

const {Sequelize,DataTypes} = require('sequelize');
const ArticleModel = require('./models/article');
const UserModel = require('./models/user');

//connexion avec BDD via . (verif connexion bdd ok)
//---------------------------
    const sequelize = new Sequelize('groupomania', 'root', 'root',{
        host : 'localhost',
        dialect: 'mysql',
        logging: false
    });
    sequelize.authenticate()
        .then(_ => console.log('connexion avec BDD Groupomania établie'))
        .catch(error => console.log(`la connexion a échoué ${error}`));
//------------------------------

// instancier les tables
const Article = ArticleModel(sequelize, DataTypes);
const User = UserModel (sequelize, DataTypes)

const initDb = ( ) => {
    return sequelize.sync({alter:true})
    .then (_ => 
        console.log('base synchro'))
}


module.exports = { initDb, Article }