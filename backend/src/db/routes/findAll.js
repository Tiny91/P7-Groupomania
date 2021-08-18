const { Article } = require('../sequelize')
  
 module.exports = (app) => {
    app.get('/api/articles', (req, res) => {
    Article.findAll()
        .then(articles => {
        const message = 'La liste des articles a bien été récupérée.'
        res.json({ message, data: articles })
        })
        .catch(error => {
        const message = "la liste n'a pas pu etre récuperee, reessayez plus tard"
        res.status(500).json({message, data:error})
        })
    })
}