import { Router } from "express";
import { valaszokRouter } from "./valaszok.js";
import { AdminController } from "../../controllers/index.js";
import { adminAuthMiddelware } from "../../middlewares/adminAuth.js";
import { uzenetekRouter } from "./uzenetek.js";

export const adminRouter = Router({ mergeParams: true });

const adminController = new AdminController();

adminRouter.use(adminAuthMiddelware);
adminRouter.use("/valaszok", valaszokRouter);
adminRouter.use("/uzenetek", uzenetekRouter);
adminRouter.get("/", adminController.isAdmin);
