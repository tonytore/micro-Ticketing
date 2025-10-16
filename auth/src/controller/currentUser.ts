import type { Request, Response } from "express";


export function currentUser(req:Request,res:Response){

    try{
        
        res.send({currentUser: req.currentUser || null})
    }catch(err){
        res.send({currentUser: null})
    }

}