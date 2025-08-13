import { Router } from 'express'
import { register, login } from '../controllers/userControllers.js'      


const router = Router()

// Ruta para registrar usuario
router.post('/register', register)

// Ruta para login
router.post('/login', login)

export default router
