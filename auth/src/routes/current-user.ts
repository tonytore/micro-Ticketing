import { Router, type Request, type Response } from 'express'
import { currentUser } from '../controller/currentUser'
import { currentUser as currentUserMiddleware } from '../middleware/current-user'
import { requireAuth } from '../middleware/require-auth'

const route = Router()

route.get('/currentuser', currentUserMiddleware, requireAuth, currentUser)

export {route as currentUser}