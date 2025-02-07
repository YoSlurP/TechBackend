import { Router } from "express";
import { UzenetekController } from "../../controllers/index.js";

export const uzenetekRouter = Router();
const uzenetekController = new UzenetekController();
uzenetekRouter.get("/", uzenetekController.getAdminUzenetek);
