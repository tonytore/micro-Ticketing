import { Request, Response, NextFunction } from "express"
import { NotAuthorizeError } from "../error/not-authorized-error"

export const requireAuth = (req:Request,res:Response,next:NextFunction)=>{
    if(!req.currentUser){
        throw new NotAuthorizeError()
    }

    next()

}