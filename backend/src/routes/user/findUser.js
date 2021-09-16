const { User } = require('../../sequelize')
const auth = require ('../../middleware/auth')
  
module.exports = (app) => {
  app.get('/api/users/:id', auth, (req, res) => {
    User.findAll(({where: {pseudo: req.params.id}}))
    .then(user => {
      res.json(user)
      })
    .catch(error => {
    const message = "Utilisateur non trouvé, réessayez plus tard"
    res.status(500).json({message, data:error})
      })
  })
}