import { Router, type Request, type Response } from 'express'
import { signUp } from '../controller/signUp'
import { body } from 'express-validator'

const route = Router()

route.post('/signup',[
    body('email').isEmail().withMessage('must be a valid email'),
    body('password').trim().isLength({min:4,max:20}).withMessage('password must be min of 4 and max 0f 20')
], signUp)

export {route as signUp}