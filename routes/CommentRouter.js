const router = require('express').Router()
const controller = require('../controllers/CommentController')
const middleware = require('../middleware')

router.get('/post/:postId', controller.GetCommentsByPostId)
router.post(
  '/post/:postId/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateComment
)
