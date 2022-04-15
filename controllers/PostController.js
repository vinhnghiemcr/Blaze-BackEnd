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

module.exports = {
  GetPostsByTrailId
}
