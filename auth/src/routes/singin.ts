import { Router, type Request, type Response } from 'express'
import { signIn } from '../controller/signIn'

const route = Router()

route.get('/signin', signIn)

export  {route as signIn}