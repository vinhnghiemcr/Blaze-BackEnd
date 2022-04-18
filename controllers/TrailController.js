const { Trail, Post, Comment, State } = require('../models')
const middleware = require('../middleware')

const GetTrailDetails = async (req, res) => {
  try {
    const trailId = parseInt(req.params.trailId)
    const trail = await Trail.findAll({
      include: { model: Post, as: 'posts' },
      where: { id: trailId }
    })
    return res.status(200).json(trail)
  } catch (error) {
    throw error
  }
}

const CreateTrail = async (req, res) => {
  try {
    const state = await State.findOne({ where: { name: req.body.stateName } })
    const userId = parseInt(req.params.userId)
    const stateId = parseInt(req.params.stateId)
    let body = req.body
    delete body.stateName
    let trailBody = {
      stateId: state.id,
      userId,
      ...body
      // name: req.body.name,
      // img: req.body.img,
      // location: req.body.location,
      // difficulty: req.body.difficulty,
      // length: parseFloat(req.body.length),
      // elevationChange: req.body.elevationChange,
      // routeType: req.body.routeType
    }
    let trail = await Trail.create(trailBody)
    return res.status(201).json(trail)
  } catch (error) {
    throw error
  }
}

const UpdateTrail = async (req, res) => {
  try {
    console.log('hello from Update trail')
    const trailId = parseInt(req.params.trailId)
    const trail = await Trail.findByPk(trailId)
    const userId = parseInt(req.params.userId)
    if (trail.userId === userId) {
      let updatedTrail = await Trail.update(
        { ...req.body },
        {
          where: { id: trailId },
          returning: true
        }
      )
      return res.json(updatedTrail)
    }
  } catch (error) {
    throw error
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
