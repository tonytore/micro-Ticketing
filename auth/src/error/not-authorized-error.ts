import { CustomError } from "./custom-error";

export class NotAuthorizeError extends CustomError {
    statusCode = 401

    constructor(){
        super('Not Authorized')

        Object.setPrototypeOf(this, NotAuthorizeError.prototype)
    }

    serializErrors() {
        return [{message: 'Not authrized'}]
    }


}