const { Post }  = require ('../../sequelize')
const auth = require ('../../middleware/auth')

module.exports = (app) => {
  app.delete('/api/posts/:id', auth, (req, res) => {             
    Post.destroy({
      where: { id: req.params.id }})
        .then(() => res.status(200).json({ message: "Post supprimé" }))
        .catch(error => res.status(500).json({ error }))
    })
  }
        