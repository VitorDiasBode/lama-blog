import express, { json } from "express";
import postRoutes from './routes/post.js'
import authRoutes from './routes/auth.js'

const app = express();

app.use(json() );
app.use('/api/posts', authRoutes);

app.listen(8800, ()=>{
    console.log("Connected!");
});