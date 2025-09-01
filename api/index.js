import express, { json } from "express";
import postRoutes from './routes/post.js'

const app = express();

app.use(json() );
app.use('/api/posts', postRoutes);

app.get('/test', (req,res) =>{
    res.json('works')
})

app.listen(8800, ()=>{
    console.log("Connected!");
});