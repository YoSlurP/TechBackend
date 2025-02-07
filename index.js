import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { adminRouter, uzenetekRouter } from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import axios from "axios";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/admin", adminRouter);
app.use("/uzenetek", uzenetekRouter);
app.use(errorHandler);


const url = `https://techbackend-app4.onrender.com`; 
const interval = 30000;

function reloadWebsite() {
  axios.get(url)
    .then(response => {
      console.log(`Reloaded at ${new Date().toISOString()}: Status Code ${response.status}`);
    })
    .catch(error => {
      console.error(`Error reloading at ${new Date().toISOString()}:`, error.message);
    });
}

setInterval(reloadWebsite, interval);

app.listen(88, (error) => {
  if (error) console.log(error);
  else console.log("Server on :88");
});
