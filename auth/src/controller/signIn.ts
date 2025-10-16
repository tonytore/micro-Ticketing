import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../error/request-validation-error";
import { User } from "../models/user";
import { BadRequestError } from "../error/bad-request-error";
import { Password } from "../services/password";
import jwt from "jsonwebtoken";

export async function signIn(req:Request,res:Response){
    const { email, password} = req.body

    const existingUser = await User.findOne({email})

    if(!existingUser){
        throw new BadRequestError('Invalid Credentials')
    }

    const passwordMatch = await Password.compare(existingUser.password,password)
    if(!passwordMatch){
        throw new BadRequestError('Invalid Credentials')
    }
    
    const token = jwt.sign({
        id: existingUser.id,
        email: existingUser.email
    }, process.env.JWT_KEY!)

    req.session = {
        jwt: token
    }

    res.status(200).send(existingUser)

}