const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

router.get('/trail/:trailId', controller.GetPostsByTrailId)
router.get('/user/:userId', controller.GetPostsByUserId)
router.post(
  '/trail/:trailId/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreatePost
)
router.put(
  '/:postId/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdatePost
)
router.delete(
  '/:postId/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeletePost
)
