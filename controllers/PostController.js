const { Post } = require('../models')
const middleware = require('../middleware')

const GetPostsByTrailId = async (req, res) => {
  try {
    const trailId = parseInt(req.params.trailId)
    const posts = await Post.findAll({ where: { trailId: trailId } })
    return res.status(200).json(posts)
  } catch (error) {
    throw error
  }
}

const GetPostsByUserId = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId)
    const posts = await Post.findAll({ where: { userId: userId } })
    return res.status(200).json(posts)
  } catch (error) {
    throw error
  }
}

const CreatePost = async (req, res) => {
  try {
    const trailId = parseInt(req.params.trailId)
    const userId = parseInt(req.params.userId)
    let postBody = {
      trailId,
      userId,
      ...req.body
    }
    let post = await Post.create(postBody)
    return res.status(201).json(post)
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId)
    let updatedPost = await Post.update(req.body, {
      where: { id: postId },
      returning: true
    })
    return res.json(updatedPost)
  } catch (error) {
    throw error
  }
}

const DeletePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId)
    await Post.destroy({ where: { id: postId } })
    res.send({
      message: `Deleted post with an id of ${postId}`
    })
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetPostsByTrailId,
  GetPostsByUserId,
  CreatePost,
  UpdatePost,
  DeletePost
}
