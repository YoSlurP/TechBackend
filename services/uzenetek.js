import { getConnection } from "../connection.js";
import {v4} from "uuid"

export class UzenetekService{
    constructor(){
        this.getUzenetek = this.getUzenetek.bind(this);
        this.createUjUzenet= this.createUjUzenet.bind(this)
    }

    async getUzenetek(userId){
        const connection = await getConnection();
        const sql = "SELECT * FROM uzenetek WHERE userId=?";
        const [rows] = await connection.execute(sql,[userId]);
        await connection.end();
        const uzenetek = rows.map(row => {
            return {
                id: row.id,
                uzenet: row.uzenet,
                cim: row.cim,
                created_at: row.date
            }
        });
        return uzenetek;
    }
    async createUjUzenet(userId,cim,uzenet){
        const connection =await getConnection();
        const adminSql=`SELECT id FROM admin`;
        const [admins] = await connection.execute(adminSql);
        const adminIndex =Math.floor(Math.random()*admins.length)
        const adminId=admins[adminIndex].id

        const uzenetId=v4();
        const uzenetSql=`INSERT INTO uzenetek (id,uzenet, cim, adminId, userId) VALUES (?, ?, ?, ?, ?);`
        const uzenetReturn=`SELECT * FROM uzenetek WHERE id = ?;`
        await connection.execute(uzenetSql,[uzenetId],[uzenet],[cim],[adminId],[userId]);
        const [rows] = await connection.execute(uzenetReturn,[uzenetId])
        await connection.end();
        return {
            id: rows[0].id,
            uzenet: rows[0].uzenet,
            cim: rows[0].cim,
            created_at: rows[0].date
        }
    }
}