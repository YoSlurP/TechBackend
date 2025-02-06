import { Router } from "express";
import { ValaszokController } from "../../controllers/index.js";

export const valaszokRouter = Router();
const valaszokController = new ValaszokController();
valaszokRouter.post("/:uzenetId", valaszokController.postValaszok);
