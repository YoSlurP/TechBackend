import { AdminService } from "../services/index.js";

export class AdminController{
    constructor() {
        this.isAdmin = this.isAdmin.bind(this);
        this._adminService = new AdminService();
    }
    async isAdmin(req,res,next) {
        try {
            
            const userId=req.get("x-user-id");
            const isAdmin=await this._adminService.checkAdmin(userId);
            res.status(200).send({data:{isAdmin}});
            
            
        } catch (error) {
            next(error);
        }
    }
}