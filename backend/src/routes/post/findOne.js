const { Post } = require('../../sequelize')
const auth = require ('../../middleware/auth')
  
module.exports = (app) => {
  app.get('/api/posts/:id', auth, (req, res) => {
    Post.findByPk(req.params.id)
    .then(post => {
      res.json(post)
      })
    .catch(error => {
    const message = "le post ne peut pas être affiché, réessayez plus tard"
    res.status(500).json({message, data:error})
      })
  })
}