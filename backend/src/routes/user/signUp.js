const bcrypt = require ('bcrypt')
const { User } = require ('../../sequelize')

module.exports = (app) => {
  app.post('/api/signup', (req,res) => {
    bcrypt.hash(req.body.password,10)
    .then(hash => {
      User.create({
        pseudo : req.body.pseudo,
        email: req.body.email,
        password: hash})
    })
    .then(user => {
      const msg = `${req.body.pseudo} créé`
      res.json({msg, data:user})
    })
    .catch(error => {
      const msg = 'réeesayez plus tard'
      res.status(500).json ({msg, data:error})
    })
  })
}
        