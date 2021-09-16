const { Comment }  = require ('../../sequelize')
const auth = require ('../../middleware/auth')

module.exports = (app) => {
  app.delete('/api/comments/:id', auth, (req, res) => {             
    Comment.destroy({
      where: { id: req.params.id }})
        .then(() => res.status(200).json({ message: "commentaire supprimé" }))
        .catch(error => res.status(500).json({ error }))
    })
  }