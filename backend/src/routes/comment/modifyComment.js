const { Comment }  = require ('../../sequelize')
const auth = require ('../../middleware/auth')

module.exports = (app) => {
  app.put('/api/comments/:id', auth, (req, res, next) => {
    Comment.update({content: req.body.content }, {where: { id: req.params.id }
    })
    .then(comment => {
      const message = 'Le commentaire a bien été modifié.'
      res.json({ message})
    })
    .catch(error => {
      const message =' commentaire non modifé, réessayez plus tard'
      res.status(500).json({message, data:error})
    })
  })  
}