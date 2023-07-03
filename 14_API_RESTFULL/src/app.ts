import express from "express";
import config from "config";
import router from "./router";
import db from "../config/db"

const app = express();

// JSON middleware
app.use(express.json());

//Routes 
app.use("/api/", router);

// app port
const port = config.get<number>("port");

app.listen(port, async () => {
    await db();
    console.log(`Aplicação está funcionando na url: http://localhost:${port}/`);
});