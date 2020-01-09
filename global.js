// require from root
global.appRoot = require("app-root-path");
global.reqlib = appRoot.require;

// responder
global.Responder = reqlib("app/services/ResponderService");

// global validate function
// sauce: https://express-validator.github.io/docs/running-imperatively.html#example-standardized-validation-error-response
const { validationResult } = require("express-validator");
global.validate = validations => {
    return async (req, res, next) => {
        await Promise.all(validations.map(validation => validation.run(req)));

        const errors = validationResult(req).formatWith(({ msg }) => msg);
        if (errors.isEmpty()) {
            return next();
        }

        return Responder.validationError(res, errors.mapped());
    };
};