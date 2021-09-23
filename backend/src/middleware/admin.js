// protection des routes Admin avec l'authentification par token

const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try {
    // recup du token dans le header de la requete
    const token = req.headers.authorization.split(' ')[1];  
    const decodedToken = jwt.verify(token, `${process.env.PRIVATEKEY}`);
    // verif si admin est vrai
    const admin = decodedToken.admin;  
      if (admin === false) {
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