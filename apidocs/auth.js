/**
 * @api {POST} api/v1/auth/register Register
 * @apiName Register
 * @apiGroup Auth
 * @apiVersion 1.0.0
 *
 * @apiParam {String} first_name
 * @apiParam {String} [middle_name]
 * @apiParam {String} last_name
 * @apiParam {Date} dob
 * @apiParam {Email} email
 * @apiParam {String} password
 * @apiParam {String} password_confirmation
 */

/**
 * @api {POST} api/v1/auth/login Login
 * @apiName Login
 * @apiGroup Auth
 * @apiVersion 1.0.0
 * @apiParam {Email} email
 * @apiParam {String} password
 * @apiUse UnauthorizedResponse
 * @apiUse ValidationErrorResponse
 * @apiUse SuccessResponse
 * @apiSuccess {Object} data
 * @apiSuccess {Object} data.token
 * @apiSuccess {Object} data.expires_at
 */