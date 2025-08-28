import express, { json } from "express";

const app = express();

app.use(json);

app.listen(8800, () =>{
    console.log("Connected!");
});