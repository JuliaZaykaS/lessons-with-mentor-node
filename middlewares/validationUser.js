const Joi = require('joi');

const validationUser = (req, res, next) => {
    const schema = Joi.object({
    firstName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    lastName: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),

    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    })
    const validationResult = schema.validate(req.body)
    if (validationResult.error) {
        console.log(validationResult.error);
        // next(validationResult.error.details[0].message)
        // throw new Error(validationResult.error.details[0].message)
    }
    next()
}

module.exports = validationUser