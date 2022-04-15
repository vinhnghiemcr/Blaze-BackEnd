const { Comment } = require('../models')
const middleware = require('../middleware')

const GetCommentsByPostId = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId)
    const comments = await Comment.findAll({ where: { postId: postId } })
    return res.status(200).json(comments)
  } catch (error) {
    throw error
  }
}
