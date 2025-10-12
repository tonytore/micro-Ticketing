import { Router } from 'express'
import { body } from 'express-validator'
import { signUp } from '../controller/signUp'


const route = Router()

route.post('/signup',[
    body('email').isEmail().withMessage('email must be valid'),
    body('password').trim().isLength({min: 4, max: 20}).withMessage('password must be between 4 and 20 characters')
], signUp)

export {route as signUp}