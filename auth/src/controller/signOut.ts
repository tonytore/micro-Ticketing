import type { Request, Response } from "express";

export function signOut(req:Request,res:Response){
    req.session = null
    res.send({})

}