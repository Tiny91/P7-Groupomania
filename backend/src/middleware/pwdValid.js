const passwordValid = require('password-validator');

const passwordSchema = new passwordValid();

passwordSchema
.is().min(8)        // min 8 caractères
.is().uppercase()   // au moins une majuscule
.is().lowercase()   // au moins une minuscule
.is().digits()      // au moins un chiffre
.is(). symbols()    // au moins un caractère spécial

module.exports = (req, res, next) => {
    if(!passwordSchema.validate(req.body.password)){       
        return res.status(400).json({error: 'le mot de passe doit contenir majuscule, minuscule, chiffre et caractère spécial' });
    }
};