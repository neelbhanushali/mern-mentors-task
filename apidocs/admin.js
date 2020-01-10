/**
 * @api {GET} api/v1/admin/users User List
 * @apiName User List
 * @apiGroup Admin
 * @apiVersion 1.0.0
 *
 * @apiUse AuthHeader
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