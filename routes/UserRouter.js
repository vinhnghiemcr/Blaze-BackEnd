const router = require('express').Router()
const controler = require('../controllers/UserController')
const middleware = require('../middleware')

router.post('/login', controler.Login)
router.post('/register', controler.Register)
router.put('/userId', middleware.stripToken, middleware.verifyToken, controler.UpdatePassword)
router.get('/session', middleware.stripToken, middleware.verifyToken, controler.CheckSession)
router.delete('/userId', middleware.stripToken, middleware.verifyToken, )