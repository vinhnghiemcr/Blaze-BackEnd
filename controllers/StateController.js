const { State } = require('../models')
const middleware = require('../middleware')

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
    const state = await State.findByPk(stateId)
    const trails = await Trail.findAll({ where: { stateId: stateId } })
    state.trails = [...trails]
    return res.status(200).json(state)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetAllStates,
  GetStateDetails
}
