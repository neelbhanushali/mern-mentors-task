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
 * @apiUse ValidationErrorResponse
 *
 * @apiParam {String} first_name
 * @apiParam {String} [middle_name]
 * @apiParam {String} last_name
 * @apiParam {Date} dob
 * @apiParam {Email} email
 */

/**
 * @api {DELETE} api/v1/admin/users/:id Delete user
 * @apiName Delete user
 * @apiGroup Admin
 * @apiVersion 1.0.0
 *
 * @apiUse AuthHeader
 * @apiUse ValidationErrorResponse
 *
 * @apiParam {String} id
 *
 * @apiUse SuccessResponse
 * @apiSuccess {Object} data
 */

/**
 * @api {POST} api/v1/admin/users/:id/tasks Create task for user
 * @apiName Create task for user
 * @apiGroup Admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} task
 * @apiParam {String} [description]
 * @apiParam {String} user user id
 *
 * @apiUse AuthHeader
 * @apiUse ValidationErrorResponse
 * @apiUse SuccessResponse
 * @apiSuccess {String} data=null
 */

/**
 * @api {GET} api/v1/admin/users/:id/tasks Get tasks for user
 * @apiName Get tasks for user
 * @apiGroup Admin
 * @apiVersion 1.0.0
 *
 * @apiParam {String} user user id
 *
 * @apiUse AuthHeader
 * @apiUse ValidationErrorResponse
 * @apiUse SuccessResponse
 */