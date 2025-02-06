import { getConnection } from "../connection.js";
import { v4 } from "uuid";
import { BadRequestError } from "../errors/customError.js";

export class ValaszokService {
  constructor() {
    this.createUjValasz = this.createUjValasz.bind(this);
  }

  async createUjValasz(adminId, uzenetId, valasz) {
    const connection = await getConnection();
    const valaszId = v4();
    const egyAdmin = `SELECT COUNT(*) AS count FROM uzenetek where id=? and adminId=?`;
    const [uzenetCount] = await connection.execute(egyAdmin, [
      uzenetId,
      adminId,
    ]);
    if (uzenetCount[0].count === 0) {
      throw new BadRequestError(
        "Az uzenet " + uzenetId + " nem " + adminId + " -hoz tartozik"
      );
    }

    const valaszSql = `INSERT INTO valasz (id, valasz, uzenetId,adminId) VALUES (?, ?, ?,?);`;
    const valaszReturn = `SELECT * FROM valasz WHERE id = ?;`;
    await connection.execute(valaszSql, [valaszId, valasz, uzenetId, adminId]);
    const [rows] = await connection.execute(valaszReturn, [valaszId]);
    await connection.end();
    return {
      id: rows[0].id,
      valasz: rows[0].valasz,
      created_at: rows[0].date,
    };
  }
}
