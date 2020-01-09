module.exports = {
    respond(res, data, status = 200) {
        let response = {};
        switch (status) {
            case 200:
                response.data = data;
                response.message = "request completed";
                response.status = true;
                break;

            case 401:
                response.message = data;
                response.status = false;
                break;

            case 403:
                response.message = data;
                response.status = false;
                break;

            case 404:
                response.message = data;
                response.status = false;
                break;

            case 422:
                response.errors = data;
                response.message = "validation error";
                response.status = false;
                break;
        }
        return res.status(status).json(response);
    },

    success(res, data) {
        this.respond(res, data, 200);
    },

    validationError(res, errors) {
        this.respond(res, errors, 422);
    },

    notFound(res, message = "not found") {
        this.respond(res, message, 404);
    },

    unauthorized(res, message = "unauthorized") {
        this.respond(res, message, 401);
    },

    forbidden(res, message = "forbidden") {
        this.respond(res, message, 403);
    }
};