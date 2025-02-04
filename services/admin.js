import { getConnection } from "../connection.js";

export class AdminService{
    
    constructor(){
        this.checkAdmin = this.checkAdmin.bind(this);
    }
    async checkAdmin(userId){
        const connection = await getConnection();
        const [rows] = await connection.execute("SELECT * FROM admin WHERE id=?",[userId]);
        await connection.end();
        return rows.length !== 0;
    }
    
}