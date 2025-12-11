import express from 'express';
import { register, login, logout, test } from '../controllers/auth.js';

const route = express.Router()

route.post('/register', register);

route.post('/login', login);
route.post('/logout', logout);
route.get('/test', test);

export default route