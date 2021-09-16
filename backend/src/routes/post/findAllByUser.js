const { Post } = require('../../sequelize')
const auth = require ('../../middleware/auth')
  
 module.exports = (app) => {
    app.get('/api/posts/user/:id', auth, (req, res) => {
    Post.findAll({where: {pseudo: req.params.id}})
        .then(userPosts => {
        res.json(userPosts)
        })
        .catch(error => {
        const message = "la liste n'a pas pu être récupérée, rééssayez plus tard"
        res.status(500).json({message, data:error})
        })
    })
}