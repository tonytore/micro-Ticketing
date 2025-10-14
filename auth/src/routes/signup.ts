import { Router } from 'express'
import { body } from 'express-validator'
import { signUp } from '../controller/signUp'

const route = Router()

route.post('/signup',[
    body('email').isEmail().withMessage('email must be valid'),
    body('password').trim().isLength({min: 4, max: 20}).withMessage('password must be between 4 and 20 characters')
], signUp)
route.post('/signup',[
    body('email').isEmail().withMessage('must be a valid email'),
    body('password').trim().isLength({min:4,max:20}).withMessage('password must be min of 4 and max 0f 20')
], signUp)

export {route as signUp}