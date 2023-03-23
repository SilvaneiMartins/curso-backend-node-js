import express from "express";
import multiparty from "connect-multiparty";

import { mdAuth } from "../middlewares/index.js";
import { UserController } from "../controllers/index.js";

const mdUpload = multiparty({ uploadDir: "./uploads/avatar" });

const api = express.Router();

api.get("/user/me", [mdAuth.asureAuth], UserController.getMe);
api.patch("/user/me", [mdAuth.asureAuth, uploadDir], UserController.updateUser);

api.get("/user/getall", [mdAuth.asureAuth], UserController.getAllUsers);
api.get("/user/getbyid/:id", [mdAuth.asureAuth], UserController.getUserById);

export const userRoutes = api;
