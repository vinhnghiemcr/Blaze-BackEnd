const { Comment, User } = require('../models')

const GetCommentsByPostId = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId)
    const comments = await Comment.findAll({
      include: [{ model: User }],
      where: { postId: postId },
      raw: true
    })
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

module.exports = {
  GetCommentsByPostId,
  CreateComment
}
