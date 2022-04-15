const { Trail, Post, Comment } = require('../models')
const middleware = require('../middleware')

const GetTrailDetails = async (req, res) => {
  try {
    const trailId = parseInt(req.params.trailId)
    const trail = await Trail.findByPk(trailId)
    const posts = await Post.findAll({ where: { trailId: trailId } })

    for await (const post of posts) {
      const comments = await Comment.findAll({ where: { postId: post.id } })
      post.comments = [...comments]
    }
    trail.posts = [...posts]
    return res.status(200).json(trail)
  } catch (error) {
    throw error
  }
}

const CreateTrail = async (req, res) => {
  try {
    const userId = parseInt(req.params.userId)
    const stateId = parseInt(req.params.stateId)
    let trailBody = {
      userId,
      stateId,
      ...req.body
    }
    let trail = await Trail.create(trailBody)
    return res.status(201).json(trail)
  } catch (error) {
    throw error
  }
}

const UpdateTrail = async (req, res) => {
  const trailId = parseInt(req.params.trailId)
  const trail = await Trail.findByPk(trailId)
  const userId = parseInt(req.params.userId)
  if (trail.userId === userId) {
    try {
      let updatedTrail = await Trail.update(req.body, {
        where: { id: trailId },
        returning: true
      })
      return res.json(updatedTrail)
    } catch (error) {
      throw error
    }
  }
}

const DeleteTrail = async (req, res) => {
  const trailId = parseInt(req.params.trailId)
  const trail = await Trail.findByPk(trailId)
  const userId = parseInt(req.params.userId)
  if (trail.userId === userId) {
    try {
      await Trail.destroy({ where: { id: trailId } })
      res.send({
        message: `Deleted hiking trail with an id of ${trailId}`
      })
    } catch (error) {
      throw error
    }
  }
}

module.exports = {
  GetTrailDetails,
  CreateTrail,
  UpdateTrail,
  DeleteTrail
}
