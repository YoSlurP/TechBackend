import { BadRequestError, CustomError } from "../errors/customError.js";
import { ValaszokService } from "../services/index.js";

export class ValaszokController {
  constructor() {
    this.valaszokService = new ValaszokService();
  }
  postValaszok = async (req, res, next) => {
    try {
      const userId = req.get("x-user-id");
      if (!userId) {
        throw new BadRequestError("Hiányzó felhasználó azonosító!");
      }
      const uzenetId = req.params.uzenetId;
      if (!uzenetId) {
        throw new BadRequestError("Hiányzó üzenet azonosító!");
      }
      const { valasz } = req.body;
      if (!valasz) {
        throw new BadRequestError("Nincs valasz!");
      }
      const createValasz = await this.valaszokService.createUjValasz(
        userId,
        uzenetId,
        valasz
      );
      res.status(201).send({ data: createValasz });
    } catch (error) {
      console.log(error);
      next(error);
    }
  };
}
