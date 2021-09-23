const { User }  = require ('../../sequelize')
const auth = require ('../../middleware/auth')

module.exports = (app) => {
  app.delete('/api/users/:id', auth, (req, res) => {             
    User.destroy({
      where: { pseudo: req.params.id }})
        .then(() => res.status(200).json({ message: "utilisateur supprimé" }))
        .catch(error => res.status(500).json({ error }))
    })
  }