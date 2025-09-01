import express, { json } from 'express';
import {addPost} from '../controllers/post.js'

const route = express.Router()

route.get('/test', addPost)

export default route