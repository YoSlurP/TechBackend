import express from "express"
import cors from "cors"
import mysql from "mysql2/promise"
import dotenv from 'dotenv';
import { adminRouter } from "./routes/index.js";
dotenv.config();


const con = await mysql.createConnection({
    host:process.env.DB_HOST,
    port:process.env.DB_PORT,
    database:process.env.DB_DATABASE,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD
});

const app = express();
app.use(express.json())
app.use(cors());
app.use("/admin",adminRouter)

async function getuzenet(req,res) {
    let sql = "select az, uzenet, uaz, saz,cim,date from tickets";
    try{
        const [ json ] = await con.query(sql);
        res.send(json);
    }catch(err){res.status(500).send({error:err});}
}
async function adduzenet(req,res) {
    if(req.body.cim&&req.body.uzenet&&req.body.uaz){
         try{
            let sql=`insert into tickets set cim="${req.body.cim}", uzenet="${req.body.uzenet}",uaz="${req.body.uaz}", saz="${req.body.saz},taz=${req.body.taz}"`;
            console.log(sql)
            const resp = await con.query(sql); 
            res.status(200).send("OK");
         }catch(err){res.status(500).send({error:err});}
    }else res.status(400).send({ error:"Hibás paraméterek!" });
}
async function getadmin(req,res) {
    let sql = "select saz, id from admin";
    try{
        const [ json ] = await con.query(sql);
        res.send(json);
    }catch(err){res.status(500).send({error:err});}
}



app.get("/uzenetek",getuzenet)
app.get("/admin",getadmin)
app.post("/uzenet",adduzenet)

app.listen(88,(error)=> {if(error)console.log(error);else console.log("Server on :88")})