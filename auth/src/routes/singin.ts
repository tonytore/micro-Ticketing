import { Router, type Request, type Response } from 'express'
import { signIn } from '../controller/signIn'
import { body } from 'express-validator'
import { validateRequest } from '../middleware/validate-request'

const route = Router()

route.post('/signin',body('email').isEmail().withMessage('email must be valid'), validateRequest,
body('password').trim().notEmpty().withMessage('you must supply a password'), signIn)

export  {route as signIn}