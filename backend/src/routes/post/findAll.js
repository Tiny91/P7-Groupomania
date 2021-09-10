const { Post } = require('../../sequelize')
const auth = require ('../../middleware/auth')
  
 module.exports = (app) => {
    app.get('/api/posts', auth,  (req, res) => {
    Post.findAll()
        .then(posts => {
        res.json(posts)
        })
        .catch(error => {
        const message = "la liste n'a pas pu etre récupérée, reessayez plus tard"
        res.status(500).json({message, data:error})
        })
    })
}