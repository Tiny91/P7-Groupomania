const Joi = require('joi');

module.exports = (req,res,next)=> {
    // schema utilisateur
    const user = Joi.object({
        pseudo: Joi.string()
            .alphanum()
            .min(4)
            .max(10)
            .required()
            .error(new Error('Le pseudo doit avoir entre 4 et 10 caractères')),

        email: Joi.string()
            .pattern(new RegExp('^[a-zA-Z09.-_]+[@]{1}[a-zA-Z09.-_]+[.]{1}[a-zA-Z]+$'))
            .required()
            .error(new Error('Adresse mail non valide')),
    
        password: Joi.string()
            .pattern(new RegExp('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{6,}$'))
            .required()
            .error(new Error('Mot de passe non valide'))
    
        
    });
    // validation du schema 
    const { error, value } = user.validate(req.body);
    if (error) {
        return res.status(400).json(error.message);
    } else {
        req.body = value;
        next();
    }
}