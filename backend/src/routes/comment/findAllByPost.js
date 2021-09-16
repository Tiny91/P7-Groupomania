const { Comment } = require('../../sequelize')
const auth = require ('../../middleware/auth')
  
 module.exports = (app) => {
    app.get('/api/comments/post/:id', auth, (req, res) => {
    Comment.findAll({where: {PostId: req.params.id}})
        .then(postComments => {
        res.json(postComments)
        })
        .catch(error => {
        const message = "les commentaires n'ont pu être récupérés, rééssayez plus tard"
        res.status(500).json({message, data:error})
        })
    })
}