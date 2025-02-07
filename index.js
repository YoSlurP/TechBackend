import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { adminRouter, uzenetekRouter } from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandler.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use("/admin", adminRouter);
app.use("/uzenetek", uzenetekRouter);
app.get("/health", (req, res) => res.status(200).send("Alive"));
app.use(errorHandler);

app.listen(88, (error) => {
  if (error) console.log(error);
  else console.log("Server on :88");
});
