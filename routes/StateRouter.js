const router = require('express').Router()
const controller = require('../controllers/StateController')

router.get('/', controller.GetAllStates)
router.get('/:stateId', controller.GetStateDetails)
