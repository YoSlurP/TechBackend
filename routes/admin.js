import { Router } from "express";
import { AdminController } from "../controllers/index.js";


export const adminRouter=Router();
const adminController = new AdminController();
adminRouter.get("/",adminController.isAdmin);