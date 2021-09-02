const { Post }  = require ('../../sequelize')
const auth = require ('../../middleware/auth')

module.exports = (app) => {
    app.post('/api/posts', auth, (req, res) => {
      Post.create(req.body)
        .then(post => {
          const message = `Le post ${req.body.title} a bien été créé.`
          res.json({ message, data: post })
        })
        .catch(error =>{
          const message =' post non ajouté, réessayez plus tard'
          res.status(500).json({message, data:error})
        })
    })
  }

