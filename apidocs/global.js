/**
 * @apiDefine UnauthorizedResponse
 * @apiError (Error 401) {Boolean} status=false
 * @apiError (Error 401) {message} message
 */

/**
 * @apiDefine NotFoundResponse
 * @apiError (Error 404) {Boolean} status=false
 * @apiError (Error 404) {message} message
 */

/**
 * @apiDefine ValidationErrorResponse
 * @apiError (Error 422) {Boolean} status=false
 * @apiError (Error 422) {message} message="validation error"
 * @apiError (Error 422) {Object} errors error object
 * @apiError (Error 422) {String} errors.field error message
 */

/**
 * @apiDefine SuccessResponse
 * @apiSuccess {Boolean} status=true
 * @apiSuccess {String} message="request completed"
 */

/**
 * @apiDefine AuthHeader
 * @apiHeader {String} Authorization Bearer token
 * @apiError (Error 401) {Boolean} status=false
 * @apiError (Error 401) {message} message=unauthorized
 * @apiError (Error 403) {Boolean} status=false
 * @apiError (Error 403) {message} message=forbidden
 */