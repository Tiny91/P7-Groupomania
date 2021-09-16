const { Comments} = require('../../sequelize')
const auth = require ('../../middleware/auth')
const comment = require('../../models/comment')
  
module.exports = (app) => {
  app.get('/api/comments/:id', auth, (req, res) => {
    CommentsfindByPk(req.params.id)
    .then(comment => {
      res.json(comment)
      })
    .catch(error => {
    const message = "commentaire inexistant"
    res.status(500).json({message, data:error})
      })
  })
}