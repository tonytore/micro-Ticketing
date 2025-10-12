import type { Request, Response } from "express";
import { validationResult } from "express-validator";
import { RequestValidationError } from "../error/request-validation-error";
import { databaseConnectionError } from "../error/databaseConnectionError";
export function signUp(req: Request, res: Response) {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
  const { email, password } = req.body;

  if(!email || typeof email !== 'string'){
      return res.status(400).send({error:"invalid email"})
  }
  console.log("Creating a user ...");
  throw new databaseConnectionError()

  //res.send({"email": email, "password": password});
}
