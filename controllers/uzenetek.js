import { BadRequestError, CustomError } from "../errors/customError.js";
import { UzenetekService } from "../services/index.js";

export class UzenetekController {
    constructor() {
        this.getUzenetek=this.getUzenetek.bind(this);
        this.uzenetekService = new UzenetekService();
    }
    async getUzenetek(req, res, next) {
        
        try {
            const userId = req.get("x-user-id");
            if(!userId){
                throw new BadRequestError("Hiányzó felhasználó azonosító!");
            }
            const uzenetek = await this.uzenetekService.getUzenetek(userId);
            res.status(200).send({ data: uzenetek });
        } catch (error) {
            next(error);
        }
    }
    postUzenetek = async(req, res, next)=> {
        try {
            const userId=req.get("x-user-id")
            if(!userId){
                throw new BadRequestError("Hiányzó felhasználó azonosító!")
            }
            const { cim,uzenet}=req.body;
            if(!cim||!uzenet){
                throw new BadRequestError("Nincs uzenet vagy cim!")
            }
            const createUzenet=await this.uzenetekService.createUjUzenet(userId,cim,uzenet);
            res.status(201).send({data:createUzenet})
        } catch (error) {
            console.log(error)
            next(error);
        }
    }
}