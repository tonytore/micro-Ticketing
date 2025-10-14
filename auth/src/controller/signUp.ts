import type { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../error/request-validation-error";
import { databaseConnectionError } from "../error/databaseConnectionError";
import { BadRequestError } from "../error/bad-request-error";
import { User } from "../models/user";




export async function signUp(req:Request,res:Response,next:NextFunction){
    try {
      const errors = validationResult(req)

    if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
    const {email,password} = req.body

    const existingUser = await User.findOne({email})

    if(existingUser){
        throw new BadRequestError('Email is Already in Use')
    }

    const user = User.build({email,password})
    await user.save()

    res.status(200).send({user})
    } catch (err) {
      next(err)
    }

}