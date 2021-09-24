const { Post }  = require ('../../sequelize')
const auth = require ('../../middleware/auth')
const token = require ('../../middleware/getIdbyToken')

module.exports = (app) => {
  app.put('/api/posts/:id', auth, (req, res) => {
    let userId = token.getUserIdByToken(req)       
    Post.findOne({where: { id: req.params.id }})
      .then(post => {
        if( post.UserId === userId) {
          Post.update({content: req.body.content }, {where: { id: req.params.id }})
          .then(post => {
          const message = `Le post ${req.body.title} a bien été modifié.`
          res.json({ message})
          })
          .catch(error => {
          const message =' post non modifié, réessayez plus tard'
          res.status(500).json({message, data:error})
          })
        }else{ console.log ('util non autorisé')}
      })
      .catch(error => res.status(500).json({ error }))  
  })
}
      
  
