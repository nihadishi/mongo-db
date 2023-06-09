const { validationResult } = require("express-validator");



const validation = (req, res, next) => {

    const errors = validationResult(req);

    if (errors.isEmpty()) {
        next();
    }
    else {
        return res.status(422).json({
            errors: errors.array(),
        });
    }
}

module.exports = {
    validation
}