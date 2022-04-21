const { Trail, Post, User, Comment, State } = require('../models')
const user = require('../models/user')


const GetAllTrailNames = async (req, res) => {
  try {
    let trailNames = await Trail.findAll({attributes: ['name']})
    trailNames = trailNames.map((trail) => trail.name)
    res.json(trailNames)
  } catch (error) {
    throw error
  }
}

const GetTrailDetails = async (req, res) => {
  try {
    const trailId = parseInt(req.params.trailId)
    const trail = await Trail.findOne({
      include: [{ model: Post, as: 'posts' }, {model: User}],
      where: { id: trailId }
    })
    console.log(trail);
    
    return res.status(200).json(trail)
  } catch (error) {
    throw error
  }
}

const CreateTrail = async (req, res) => {
  try {
    const state = await State.findOne({ where: { name: req.body.stateName } })
    if (state) {
      const userId = parseInt(req.params.userId)
      const stateId = parseInt(req.params.stateId)
      let body = req.body
      delete body.stateName
      let trailBody = {
        stateId: state.id,
        userId,
        ...body
      }
      let trail = await Trail.create(trailBody)
      return res.status(201).json(trail)
    } else {
      return res.status(404).send({ message: 'State not found' })
    }
  } catch (error) {
    throw error
  }
}

const UpdateTrail = async (req, res) => {
  try {
    const trailId = parseInt(req.params.trailId)
    const userId = parseInt(req.params.userId)
    const trail = await Trail.findByPk(trailId)
    console.log(trail, "TRAIL")
    if (trail.userId === userId) {
      let updatedTrail = await Trail.update(
        { ...req.body },
        {
          where: { id: trailId },
          returning: true,
          plain: true,
          raw: true
        }
      )
      console.log(updatedTrail, "updatedTrail")
      return res.json(updatedTrail[1])
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
  GetAllTrailNames,
  GetTrailDetails,
  CreateTrail,
  UpdateTrail,
  DeleteTrail
}
