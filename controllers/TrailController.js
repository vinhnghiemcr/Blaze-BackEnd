const { Trail, Post, Comment } = require('../models')
const middleware = require('../middleware')

const GetTrailDetails = async (req, res) => {
  const { trailId } = req.params
  const trail = await Trail.findByPk(trailId)
  const posts = await Post.findAll({ where: { trailId: trailId } })

  for await (const post of posts) {
    const comments = await Comment.findAll({ where: { postId: post.id } })
    post.comments = [...comments]
  }
  trail.posts = [...posts]
  return res.status(200).json(trail)
}

module.exports = {
  GetTrailDetails
}
