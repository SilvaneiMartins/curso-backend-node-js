import express from "express";
import multiparty from "connect-multiparty";

import { mdAuth } from "../middlewares/index.js";
import { ProductsController } from "../controllers/index.js";

const api = express.Router();

api.post("/product", [mdAuth.asureAuth], ProductsController.createProduct);

export const productRoutes = api;
