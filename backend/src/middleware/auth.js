// protection des routes avec l'authentification par token
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // recup du token dans le header de la requete
    const token = req.headers.authorization.split(' ')[1];  
    const decodedToken = jwt.verify(token, `${process.env.PRIVATEKEY}`);
    // comparaison du userId de la demande avec celui extrait du token
    const userId = decodedToken.userId;  
      if (req.body.userId && req.body.userId !== userId) {
        throw "echec de l'authentification"  
      } else {
        console.log('authentification réussie')
        next()
      }
  } 
  catch (error) {
    const message = 'vous n êtes pas autorisé à accéder à cette page'
      res.status(401).json({message})
      };
};

  

