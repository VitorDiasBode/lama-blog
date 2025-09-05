import express from 'express';
import { register, login, logout } from '../controllers/auth.js';

const route = express.Router()

route.post('/register', register);
route.get('/test', (req, res) => {
    res.json('Working!')
})
route.post('/login', login);
route.post('logout', logout);

export default route