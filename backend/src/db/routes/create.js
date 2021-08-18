const { Article }  = require ('../sequelize')

module.exports = (app) => {
    app.post('/api/articles', (req, res) => {
      Article.create(req.body)
        .then(article => {
          const message = `L article ${req.body.title} a bien été crée.`
          res.json({ message, data: article })
        })
        .catch(error =>{
          const message =' article non ajouté, réessayez plus tard'
          res.status(500).json({message, data:error})
        })
    })
  }

