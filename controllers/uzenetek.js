import { BadRequestError, CustomError } from "../errors/customError.js";
import { UzenetekService } from "../services/index.js";

export class UzenetekController {
  constructor() {
    this.getUzenetek = this.getUzenetek.bind(this);
    this.uzenetekService = new UzenetekService();
  }
  async getUzenetek(req, res, next) {
    try {
      const userId = req.get("x-user-id");
      if (!userId) {
        throw new BadRequestError("Hiányzó felhasználó azonosító!");
      }
      const uzenetek = await this.uzenetekService.getUzenetek(userId);
      res.status(200).send({ data: uzenetek });
    } catch (error) {
      next(error);
    }
  }
  postUzenetek = async (req, res, next) => {
    try {
      const userId = req.get("x-user-id");
      if (!userId) {
        throw new BadRequestError("Hiányzó felhasználó azonosító!");
      }
      const { cim, uzenet } = req.body;
      if (!cim || !uzenet) {
        throw new BadRequestError("Nincs uzenet vagy cim!");
      }
      const createUzenet = await this.uzenetekService.createUjUzenet(
        userId,
        cim,
        uzenet
      );
      res.status(201).send({ data: createUzenet });
    } catch (error) {
      next(error);
    }
  };
  getUzenet = async (req, res, next) => {
    try {
      const userId = req.get("x-user-id");
      const uzenetId = req.params.uzenetId;
      if (!userId) {
        throw new BadRequestError("Nem vagy bejelentkezve");
      }
      const uzenet = await this.uzenetekService.getUzenet(userId, uzenetId);
      res.status(200).send({ data: uzenet });
    } catch (error) {
      next(error);
    }
  };
  getAdminUzenetek=async(req,res,next)=>{
    try {
      const adminId=req.get("x-user-id")
      if(!adminId){
        throw new BadRequestError("Nincs adminId");
      }
      const uzenet = await this.uzenetekService.getAdminUzenetek(adminId);
      res.status(200).send({ data: uzenet });
    } catch (error) {
      next(error)
    }
  }
}
