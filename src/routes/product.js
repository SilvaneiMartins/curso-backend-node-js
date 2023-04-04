import express from "express";
import multiparty from "connect-multiparty";

import { mdAuth } from "../middlewares/index.js";
import { ProductsController } from "../controllers/index.js";

const api = express.Router();

api.post("/product", [mdAuth.asureAuth], ProductsController.createProduct);
api.get("/products", [mdAuth.asureAuth], ProductsController.getAllProducts);

api.patch("/product/update/:id", [mdAuth.asureAuth], ProductsController.updateProduct);
api.get("/product/getbyid/:id", [mdAuth.asureAuth], ProductsController.getProductById);

export const productRoutes = api;
