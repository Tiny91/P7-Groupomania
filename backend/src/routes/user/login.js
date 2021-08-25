const bcrypt = require ('bcrypt')
const { User } = require ('../../sequelize')
const jwt = require('jsonwebtoken')

//connexion avec verif du nom et du mdp
module.exports = (app) => {
  app.post ('api/users', (req,res) => {
    User.findOne({ where: {pseudo: req.body.pseudo }})
    .then(user => {
      if (!user) {
      return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
          return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign({userId : user._id},`${process.env.PRIVATEKEY}`,{expiresIn: "6h"})
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
  })
}
