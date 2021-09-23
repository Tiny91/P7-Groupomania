const {Comment} = require('../../sequelize')
const auth = require ('../../middleware/auth')
  
module.exports = (app) => {
  app.get('/api/comments/:id', auth, (req, res) => {
    Comment.findByPk(req.params.id)
    .then(comment => {
      res.json(comment)
      })
    .catch(error => {
    const message = "commentaire inexistant"
    res.status(500).json({message, data:error})
      })
  })
}