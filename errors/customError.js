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
export class ForbiddenError extends CustomError {
  constructor(message) {
    super(message, 403);
  }
}
export class NotFoundError extends CustomError {
  constructor(message) {
    super(message, 404);
  }
}
