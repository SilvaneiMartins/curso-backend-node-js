import express from "express";
import multiparty from "connect-multiparty";

import { mdAuth } from "../middlewares/index.js";
import { ProductsController } from "../controllers/index.js";

const api = express.Router();

api.post("/product", [mdAuth.asureAuth], ProductsController.createProduct);
api.get("/products", [mdAuth.asureAuth], ProductsController.getAllProducts);

export const productRoutes = api;
