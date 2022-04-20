const router = require('express').Router()
const controller = require('../controllers/TrailController')
const middleware = require('../middleware')

router.get('/', controller.GetAllTrailNames)
router.get('/:trailId', controller.GetTrailDetails)
router.post(
  '/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.CreateTrail
)
router.put(
  '/:trailId/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.UpdateTrail
)
router.delete(
  '/:trailId/user/:userId',
  middleware.stripToken,
  middleware.verifyToken,
  controller.DeleteTrail
)
module.exports = router
