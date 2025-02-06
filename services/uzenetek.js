import { getConnection } from "../connection.js";
import { v4 } from "uuid";
import { NotFoundError } from "../errors/customError.js";

export class UzenetekService {
  constructor() {
    this.getUzenetek = this.getUzenetek.bind(this);
    this.createUjUzenet = this.createUjUzenet.bind(this);
    this.getUzenet = this.getUzenet.bind(this);
  }

  async getUzenetek(userId) {
    const connection = await getConnection();
    const sql = "SELECT * FROM uzenetek WHERE userId=?";
    const [rows] = await connection.execute(sql, [userId]);
    await connection.end();
    const uzenetek = rows.map((row) => {
      return {
        id: row.id,
        uzenet: row.uzenet,
        cim: row.cim,
        created_at: row.date,
      };
    });
    return uzenetek;
  }
  async createUjUzenet(userId, cim, uzenet) {
    const connection = await getConnection();
    const adminSql = `SELECT id FROM admin`;
    const [admins] = await connection.execute(adminSql);
    const adminIndex = Math.floor(Math.random() * admins.length);
    const adminId = admins[adminIndex].id;

    const uzenetId = v4();
    const uzenetSql = `INSERT INTO uzenetek (id,uzenet, cim, adminId, userId) VALUES (?, ?, ?, ?, ?);`;
    const uzenetReturn = `SELECT * FROM uzenetek WHERE id = ?;`;
    await connection.execute(uzenetSql, [
      uzenetId,
      uzenet,
      cim,
      adminId,
      userId,
    ]);
    const [rows] = await connection.execute(uzenetReturn, [uzenetId]);
    await connection.end();
    return {
      id: rows[0].id,
      uzenet: rows[0].uzenet,
      cim: rows[0].cim,
      created_at: rows[0].date,
    };
  }
  async getUzenet(userId, uzenetId) {
    const connection = await getConnection();
    const uzenetSql = `SELECT uzenetek.*,valasz.valasz FROM uzenetek LEFT JOIN valasz ON uzenetek.id=valasz.uzenetId WHERE uzenetek.userId=? AND uzenetek.id=?`;
    const [rows] = await connection.execute(uzenetSql, [userId, uzenetId]);
    await connection.end();
    if (!rows.length) {
      throw new NotFoundError("Ilyen id-val nincs uzenet: " + uzenetId);
    }
    return {
      id: rows[0].uzenetId,
      adminId: rows[0].adminId,
      uzenet: rows[0].uzenet,
      cim: rows[0].cim,
      isAnswered: !!rows[0].valasz,
      valasz: rows[0].valasz || null,
    };
  }
}
