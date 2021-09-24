import {emailValidate, passwordValidate} from './utils/utils.js';

const registerValidationChecks = (req, res, next) => {
    const {email, password, confirmPassword}  = req.body;
    if( typeof email === 'string' &&
        typeof password === 'string' &&
        typeof confirmPassword === 'string' &&
        emailValidate(email) &&
        passwordValidate(password) &&
        password === confirmPassword) {
            next();
    } else {
        res.status(401).send("Improper credintials");
    }
};

module.exports = {registerValidationChecks};