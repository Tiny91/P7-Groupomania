const { Comment } = require('../../sequelize')
const auth = require ('../../middleware/auth')
  
 module.exports = (app) => {
    app.get('/api/comments/all/:id', (req, res) => {
    Comment.findAll({where: {UserId: req.params.id}})
        .then(userComments => {
        res.json(userComments)
        })
        .catch(error => {
        const message = "la liste n'a pas pu être récupérée, rééssayez plus tard"
        res.status(500).json({message, data:error})
        })
    })
}