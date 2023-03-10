import express from "express";

import { mdAuth } from "../middlewares/index.js";
import { UserController } from "../controllers/index.js";

const api = express.Router();

api.get("/user/me", [mdAuth.asureAuth], UserController.getMe);

export const userRoutes = api;
