const { Comment }  = require ('../../sequelize')
const auth = require ('../../middleware/auth')

module.exports = (app) => {
    app.post('/api/comments', auth, (req, res) => {
      Comment.create(req.body)
        .then(comment => {
          const message = 'votre commentaire est bien pris en compte'
          res.json({ message, data:comment })
        })
        .catch(error =>{
          const message =' commentaire non ajouté, réessayez plus tard'
          res.status(500).json({message, data:error})
        })
    })
  }
