const { Comment }  = require ('../../sequelize')
const auth = require ('../../middleware/auth')
const token = require ('../../middleware/getIdbyToken')

module.exports = (app) => {
  app.put('/api/comments/:id', auth, (req, res, next) => {
    let userId = token.getUserIdByToken(req)       
    Comment.findOne({where: { id: req.params.id }})
      .then(comment => {
        if( comment.UserId === userId) {
          Comment.update({content: req.body.content }, {where: { id: req.params.id }})
          .then(comment => {
          const message = 'Le commentaire a bien été modifié.'
          res.json({ message})
          })
          .catch(error => {
          const message =' commentaire non modifé, réessayez plus tard'
          res.status(500).json({message, data:error})
          })
        } else {console.log ('util non autorisé')}
      })
      .catch(error => res.status(500).json({ error }))
  }) 
}