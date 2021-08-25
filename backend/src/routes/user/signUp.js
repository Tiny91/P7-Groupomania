const bcrypt = require ('bcrypt')
const { User } = require ('../../sequelize')

module.exports = (app) => {
    app.post ('api/users', (req,res) => {
        bcrypt.hash(req.body.password, 10)
        .then(hash => {
          
          User.create({pseudo: req.body.pseudo, email: req.body.email,password: hash})
            .then(()=> res.status(201).json ({message: "utilisateur créé"}))
            .catch(error => res.status(400).json({error}));
        })
        .catch(error => {
          const message = 'le compte ne peut etre créé, réessayez plus tard' 
          res.status(500).json({message, data:error })  
    })
})
}