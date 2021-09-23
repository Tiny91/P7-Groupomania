const { Post } = require('../../sequelize')
const { Comment} = require ('../../sequelize')
const auth = require ('../../middleware/auth')
  
module.exports = (app) => {
    app.delete('/api/posts/user/:id', auth, (req, res) => {
    Comment.destroy({where: {pseudo: req.params.id}})
    .then(() => 
    Post.destroy ({where: {pseudo: req.params.id}})
    .then(() => res.status(200).json({ message: "Posts supprimés" }))
    .catch(error => res.status(500).json({ error }))
    )
    })
}