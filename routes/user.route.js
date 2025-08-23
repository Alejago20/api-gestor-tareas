import { Router } from 'express'
import { register, login,logout,profile } from '../controllers/userControllers.js'      
import { authRequired } from '../middlewares/validateToken.js'

const router = Router()

// Ruta para registrar usuario
router.post('/register', register)

// Ruta para login
router.post('/login', login)

// Ruta para login
router.post('/logout', logout)

router.get('/profile', authRequired, profile)

export default router
