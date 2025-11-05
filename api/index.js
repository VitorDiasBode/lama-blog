import express, { json } from "express";
import postRoutes from './routes/post.js'
import authRoutes from './routes/auth.js'
import cookieParser from "cookie-parser";

const app = express();

app.use(json() );
app.use(cookieParser() );
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoutes)

app.listen(8800, ()=>{
    console.log("Connected!");
});