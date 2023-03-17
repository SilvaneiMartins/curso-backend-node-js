import express from "express";

import { mdAuth } from "../middlewares/index.js";
import { UserController } from "../controllers/index.js";

const api = express.Router();

api.get("/user/me", [mdAuth.asureAuth], UserController.getMe);
api.get("/user/getall", [mdAuth.asureAuth], UserController.getAllUsers);
api.get("/user/getbyid/:id", [mdAuth.asureAuth], UserController.getUserById);

export const userRoutes = api;
