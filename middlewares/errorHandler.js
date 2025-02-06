import { CustomError } from "../errors/index.js";

export function errorHandler(err, req, res, next) {
  if (err instanceof CustomError) {
    res.status(err.status).send({ error: err.message });
    return;
  }
  console.error(err);
  res.status(500).send({ error: "Ismeretlen hiba" });
}
