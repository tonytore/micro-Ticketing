import { Router, type Request, type Response } from 'express'
import { signOut } from '../controller/signOut'

const route = Router()

route.get('/signout', signOut)

export {route as signOut}