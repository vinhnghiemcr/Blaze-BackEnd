
const { State, Trail } = require('../models')

const GetAllStates = async (req, res) => {
  try {
    const states = await State.findAll()
    return res.status(200).json(states)
  } catch (error) {
    throw error
  }
}

const GetStateDetails = async (req, res) => {
  try {
    const stateId = parseInt(req.params.stateId)
    const state = await State.findAll({include: {model: Trail, as: 'trails' }, where: {id: stateId}})
    return res.status(200).json(state)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStates,
  GetStateDetails
}
