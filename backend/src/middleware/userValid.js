const Joi = require('joi');

module.exports = (req,res,next)=> {
    // schema utilisateur
    const user = Joi.object({
        pseudo: Joi.string()
            .alphanum()
            .min(3)
            .max(10)
            .required(),
    
        password: Joi.string()
            .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
            .required(),
    
        email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'fr'] } })
            .required()
    });
    // validation du schema 
    const { error, value } = user.validate(req.body);
    if (error) {
        next(`error: ${error.details.map(x => x.message).join(', ')}`);
    } else {
        req.body = value;
        next();
    }
}