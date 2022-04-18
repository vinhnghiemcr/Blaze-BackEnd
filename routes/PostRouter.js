const router = require('express').Router()
const controller = require('../controllers/PostController')
const middleware = require('../middleware')

router.get('/trail/:trailId', controller.GetPostsByTrailId)
router.get(
  '/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.GetPostsByUserId
)
router.post(
  '/user/:userId',
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

router.get(
  '/following/:userId',
  controller.GetFolloweingPosts
)
module.exports = router
