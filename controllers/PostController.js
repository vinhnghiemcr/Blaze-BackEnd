const { Post, Trail } = require('../models')

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
    const trail = await Trail.findOne({ where: { name: req.body.trailName } })
    if (trail) {
      const userId = parseInt(req.params.userId)
      let postBody = {
        trailId: trail.id,
        userId,
        title: req.body.title,
        content: req.body.content,
        img: req.body.img
      }
      let post = await Post.create(postBody)
      return res.status(201).json(post)
    } else{
      return res.status(404).send({msg: "Trail can not be found!"})
    }    
  } catch (error) {
    throw error
  }
}

const UpdatePost = async (req, res) => {
  const postId = parseInt(req.params.postId)
  const post = await Post.findByPk(postId)
  const userId = parseInt(req.params.userId)
  if (post.userId === userId) {
    try {
      let updatedPost = await Post.update(req.body, {
        where: { id: postId },
        returning: true
      })
      return res.json(updatedPost)
    } catch (error) {
      throw error
    }
  }
}

const DeletePost = async (req, res) => {
  try {
    const postId = parseInt(req.params.postId)
    const post = await Post.findByPk(postId)
    const userId = parseInt(req.params.userId)
    if (post.userId === userId) {
      await Post.destroy({ where: { id: postId } })
      return res.send({
        message: `Deleted post with an id of ${postId}`
      })
    } else {
      return res.status(401).send({ message: 'Unauthorized' })
    }
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
