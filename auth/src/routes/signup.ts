import { Router, type Request, type Response } from 'express'
import { signUp } from '../controller/signUp'

const route = Router()

route.get('/signup', signUp)

export {route as signUp}