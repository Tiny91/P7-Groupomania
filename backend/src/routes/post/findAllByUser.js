const { Post } = require('../../sequelize')
const auth = require ('../../middleware/auth')
  
 module.exports = (app) => {
    app.get('/api/all/:id',  (req, res) => {
    Post.findAll({where: {UserId: req.params.id}})
        .then(userPosts => {
        res.json(userPosts)
        })
        .catch(error => {
        const message = "la liste n'a pas pu être récupérée, rééssayez plus tard"
        res.status(500).json({message, data:error})
        })
    })
}