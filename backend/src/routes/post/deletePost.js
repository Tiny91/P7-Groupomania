const { Post }  = require ('../../sequelize')
const { Comment } = require ('../../sequelize')
const { User } = require ('../../sequelize')
const auth = require ('../../middleware/auth')
const token = require ('../../middleware/getIdbyToken')

module.exports = (app) => {
  app.delete('/api/posts/:id', auth,  (req, res) => {    
    let id = token.getUserIdByToken(req)
    User.findOne({attributes: ['id', 'email', 'pseudo', 'isAdmin'], where: { id: id }})
    .then (user => {
      if (user.isAdmin == true ){
        Comment.destroy({where: {PostId: req.params.id}})
        .then(() => 
          Post.destroy({
            where: { id: req.params.id }})
            .then(() => res.status(200).json({ message: "Post supprimé" }))
            .catch(error => res.status(500).json({ error }))
        )
      } else {
        Post.findOne({where: { id: req.params.id }})
        .then(post =>{
          if( post.UserId === id) {
            Comment.destroy({where: {PostId: req.params.id}})
            .then(() => 
            Post.destroy({
              where: { id: req.params.id }})
              .then(() => res.status(200).json({ message: "Post supprimé" }))
              .catch(error => res.status(500).json({ error }))
            )
          }else { console.log("user different de l'auteur")}
        })
      }
    })
    .catch(error => res.status(500).json({ error }))
  })
}


  
  
        