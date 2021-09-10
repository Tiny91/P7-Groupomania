const { Post }  = require ('../../sequelize')
const auth = require ('../../middleware/auth')

module.exports = (app) => {
  app.put('/api/posts/:id', auth, (req, res, next) => {
    Post.update({title:req.body.title ,content: req.body.content }, {where: { id: req.params.id }
    })
    .then(post => {
      const message = `Le post ${req.body.title} a bien été modifié.`
      res.json({ message})
    })
    .catch(error => {
      const message =' post non ajouté, réessayez plus tard'
      res.status(500).json({message, data:error})
    })
  })  
}
      
  
