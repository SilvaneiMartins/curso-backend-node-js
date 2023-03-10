import express from "express";

import { UserController } from '../controllers/index.js';

const api = express.Router();

api.get('/user/me', UserController.getMe);

export const userRoutes = api;
