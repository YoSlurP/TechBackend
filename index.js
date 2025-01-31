import express from "express"
import cors from "cors"
import mysql from "mysql2/promise"
import {infok} from "./Databaseconfig.js"

const con = await mysql.createConnection(infok);

const app = express();
app.use(express.json())
app.use(cors());

async function getuzenet(req,res) {
    let sql = "select az, uzenet, uaz, saz,cim,date from admin";
    try{
        const [ json ] = await con.query(sql);
        res.send(json);
    }catch(err){res.status(500).send({error:err});}
}
async function adduzenet(req,res) {
    if(req.body.cim&&req.body.uzenet&&req.body.uaz&&req.body.saz){
        // try{
            let sql=`insert into admin set cim="${req.body.cim}", uzenet="${req.body.uzenet}",uaz=${req.body.uaz}, saz=${req.body.saz}`;
            console.log(sql)
            const resp = await con.query(sql); 
            res.status(200).send("OK");
        // }catch(err){res.status(500).send({error:err});}
    }else res.status(400).send({ error:"Hibás paraméterek!" });
}



app.get("/admin",getuzenet)
app.post("/uzenet",adduzenet)

app.listen(88,(error)=> {if(error)console.log(error);else console.log("Server on :88")})