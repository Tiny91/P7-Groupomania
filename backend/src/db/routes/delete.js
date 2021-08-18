const { Article }  = require ('../sequelize')

module.exports = (app) => {
    app.delete('/api/articles/:id', (req, res) => {
      Article.findByPk(req.params.id)
      .then(article => {
        if(article === null) {
          const message = `Le article demandé n'existe pas. Réessayez avec un autre identifiant.`
          return res.status(404).json({ message })
        }
        const articleDeleted = article;
        Article.destroy({
          where: { id: article.id }
        })
        .then(_ => {
          const message = `Le article avec l'identifiant n°${articleDeleted.id} a bien été supprimé.`
          res.json({message, data: articleDeleted })
        })
        .catch (error => {
          const message = `Le article n'a pas pu être supprimé. Réessayez dans quelques instants.`
          res.status(500).json({ message, data: error })
        })
      .catch(error => {
        const message = `Le article n'a pas pu être supprimé. Réessayez dans quelques instants.`
        res.status(500).json({ message, data: error })
      })
      })
    })
  }