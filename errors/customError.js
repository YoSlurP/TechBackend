export class CustomError extends Error {
    constructor(message, status) {
        super(message);
        this.status = status;
    }
    
}
export class BadRequestError extends CustomError {
    constructor(message) {
        super(message, 400);
    }
}