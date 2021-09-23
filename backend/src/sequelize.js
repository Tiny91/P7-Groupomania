//fichier de config et de synchro sequelize/BDD
require("dotenv").config();
const {Sequelize,DataTypes} = require('sequelize');
const PostModel = require('./models/post');
const UserModel = require('./models/user');
const CommentModel = require ('./models/comment');

//connexion avec BDD via . (verif connexion bdd ok)
//---------------------------
    const sequelize = new Sequelize(`${process.env.DB_NAME}`, `${process.env.DB_USER}`, `${process.env.DB_PASS}`,{
        host : 'localhost',
        dialect: 'mysql',
        logging: false
    });
    sequelize.authenticate()
        .then(_ => console.log('connexion avec BDD Groupomania établie'))
        .catch(error => console.log(`la connexion a échoué ${error}`));
//------------------------------

// instancier les tables
const Post = PostModel(sequelize, DataTypes);
const User = UserModel (sequelize, DataTypes)
const Comment = CommentModel (sequelize, DataTypes)

const initDb = ( ) => {
    return sequelize.sync({alter:true})
    .then (_ => 
        console.log('bases synchro'))
}
//association posts/user
User.hasMany(Post);
Post.belongsTo(User);

// association comments/post
Post.hasMany(Comment);
Comment.belongsTo(Post);

// association comments/user
User.hasMany(Comment);
Comment.belongsTo(User);

module.exports = { initDb, Post, User, Comment }