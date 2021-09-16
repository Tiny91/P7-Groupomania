const { User } = require('../../sequelize')
const auth = require ('../../middleware/auth')
  
 module.exports = (app) => {
    app.get('/api/users', auth,  (req, res) => {
    User.findAll()
        .then(users => {
        res.json(users)
        })
        .catch(error => {
        const message = "la liste n'a pas pu etre récupérée, reessayez plus tard"
        res.status(500).json({message, data:error})
        })
    })
}