const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const token = bearerToken(req);
    jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
        if (!res.locals.decoded.is_admin) {
            return Responder.forbidden(res);
        }

        next();
    });
};