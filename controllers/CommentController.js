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

const CreateComment = async (req, res) => {
  try {
    let postId = parseInt(req.params.postId)
    let userId = parseInt(req.params.userId)
    let commentBody = {
      postId,
      userId,
      ...req.body
    }
    let comment = await Comment.create(commentBody)
    return res.status(201).json(comment)
  } catch (error) {
    throw error
  }
}
