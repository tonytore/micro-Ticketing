import { CustomError } from "./custom-error";

export class databaseConnectionError extends CustomError {
    statusCode = 500;
    reason = 'Error connecting to database';
    constructor() {
        super('Error connecting to database');
        Object.setPrototypeOf(this, databaseConnectionError.prototype);
    }

    serializErrors() {
        return [{ message: this.reason }]
    }
}