const router = require('express').Router()
const AuthController = require('../controllers/AuthController')
const validationUser =require('../middlewares/validationUser')

router.post('/register', validationUser, AuthController.registration)
router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)

module.exports = router