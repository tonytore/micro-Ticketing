import { Router, type Request, type Response } from 'express'
import { currentUser } from '../controller/currentUser'

const route = Router()

route.get('/currentuser', currentUser)

export {route as currentUser}