import dotenv  from "dotenv";
import mysql from "mysql2";

dotenv.config()
console.log("Connected to", process.env.DATABASE)

export const db = mysql.createConnection({
    host: process.env.HOST ,
    user: process.env.DB_USER ,
    password: process.env.PASSWORD ,
    database: process.env.DATABASE
});
