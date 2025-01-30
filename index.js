import express from "express"
import cors from "cors"
import mysql from "mysql2/promise"

const con = await mysql.createConnection({
    host:"localhost",
    port:3306,
    database:"techsupport",
    user:"root",
    password:""
});

const app = express();
app.use(express.json())
app.use(cors());

async function getuzenet(req,res) {
    let sql = "select az, uzenete, uaz, saz,cim,date from admin";
    try{
        const [ json ] = await con.query(sql);
        resp.send(json);
    }catch(err){resp.status(500).send({error:err});}
}
async function adduzenet(req,res) {
    if(req.body.cim&&req.body.uzenet&&req.body.uaz&&req.body.saz){
        try{
            let sql=`insert into admin set cim="${req.body.cim}", uzenet="${req.body.uzenet}",uaz=${req.body.uaz}, saz=${req.body.saz}, date=${CURRENT_TIMESTAMP}`;
            const resp = await con.query(sql); 
            res.status(200).send("OK");
        }catch(err){res.status(500).send({error:err});}
    }else res.status(400).send({ error:"Hibás paraméterek!" });
}



app.get("/admin",getuzenet)
app.post("/uzenet",adduzenet)

app.listen(88,(error)=> {if(error)console.log(error);else console.log("Server on :88")})