//fichier de config et de synchro sequelize/BDD

const {Sequelize,DataTypes} = require('sequelize');
const PostModel = require('./models/post');
const UserModel = require('./models/user');
const CommentModel = require ('./models/comments');
const comments = require('./models/comments');

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