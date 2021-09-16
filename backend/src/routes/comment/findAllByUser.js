const { Comment } = require('../../sequelize')
const auth = require ('../../middleware/auth')
  
 module.exports = (app) => {
    app.get('/api/comments/user/:id', auth, (req, res) => {
    Comment.findAll({where: {pseudo: req.params.id}})
        .then(userComments => {
        res.json(userComments)
        })
        .catch(error => {
        const message = "la liste n'a pas pu être récupérée, rééssayez plus tard"
        res.status(500).json({message, data:error})
        })
    })
}