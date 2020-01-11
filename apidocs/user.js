/**
 * @api {GET} api/v1/user/profile Profile
 * @apiName Profile
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiUse AuthHeader
 *
 * @apiUse SuccessResponse
 * @apiSuccess {Object} data
 */

/**
 * @api {GET} api/v1/user/tasks Get your tasks
 * @apiName Get your tasks
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiUse AuthHeader
 *
 * @apiUse ValidationErrorResponse
 * @apiUse SuccessResponse
 */

/**
 * @api {POST} api/v1/user/tasks/:id Mark task complete
 * @apiName Mark task complete
 * @apiGroup User
 * @apiVersion 1.0.0
 *
 * @apiUse AuthHeader
 * 
 * @apiParam {String} id
 *
 * @apiUse ValidationErrorResponse
 * @apiUse SuccessResponse
 */
