const bcrypt = require ('bcrypt')
const { User } = require ('../../sequelize')
const jwt = require('jsonwebtoken')

//connexion avec verif du nom et du mdp
module.exports = (app) => {
  app.post ('/api/login', (req,res) => {    
    User.findOne({ where: { pseudo: req.body.pseudo } })
    .then(user => {
      if(!user) {
        return res.status(404).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
      .then(valid => {
        if(!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
        }
        res.status(200).json({
          pseudo: user.pseudo,
          userId: user.id,          
          admin: user.isAdmin,
          token: jwt.sign(
            {userId : user.id, admin: user.isAdmin},`${process.env.PRIVATEKEY}`,{expiresIn: "6h"}
            )
        });
      })
      .catch(error => res.status(500).json({ error }));
    })
  })
}