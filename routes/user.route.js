import { Router } from 'express'
import { register, login,logout } from '../controllers/userControllers.js'      


const router = Router()

// Ruta para registrar usuario
router.post('/register', register)

// Ruta para login
router.post('/login', login)

// Ruta para login
router.post('/logout', logout)

export default router
