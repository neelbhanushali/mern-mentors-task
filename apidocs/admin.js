/**
 * @api {GET} api/v1/admin/users User List
 * @apiName User List
 * @apiGroup Admin
 * @apiVersion 1.0.0
 *
 * @apiUse AuthHeader
 *
 * @apiParam {String} search
 *
 * @apiUse SuccessResponse
 * @apiSuccess {Array} data
 */

/**
 * @api {GET} api/v1/admin/users/:id Show user
 * @apiName Show user
 * @apiGroup Admin
 * @apiVersion 1.0.0
 *
 * @apiUse AuthHeader
 *
 * @apiParam {String} id
 *
 * @apiUse SuccessResponse
 * @apiSuccess {Object} data
 */

/**
 * @api {POST} api/v1/admin/users Create User
 * @apiName Create User
 * @apiGroup Admin
 * @apiVersion 1.0.0
 *
 * @apiUse AuthHeader
 *
 * @apiParam {String} first_name
 * @apiParam {String} [middle_name]
 * @apiParam {String} last_name
 * @apiParam {Date} dob
 * @apiParam {Email} email
 */