import { BadRequestError, ForbiddenError } from "../errors/index.js";
import { AdminService } from "../services/index.js";

export async function adminAuthMiddelware(req, res, next) {
  try {
    const userId = req.get("x-user-id");
    if (!userId) {
      throw new BadRequestError("Nincs id");
    }
    const service = new AdminService();
    const admin = await service.checkAdmin(userId);
    if (!admin) {
      throw new ForbiddenError("Nem admin vagy");
    }
    next();
  } catch (error) {
    next(error);
  }
}
