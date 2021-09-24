// récupere le userId dans le token

const jwt = require('jsonwebtoken');

exports.getUserIdByToken = (req) => {
    const token = req.headers.authorization.split(' ')[1];
    const decodedToken = jwt.verify(token, `${process.env.PRIVATEKEY}`);
    const userId = decodedToken.userId
    
    return (userId)
}

