import { Product } from '../models/index.js';

function createProduct(req, res) {
    const { name, description, category, price, quantity } = req.body;

    const product = new Product({
        name,
        description,
        category,
        price,
        quantity,
    });
}

export const ProductsController = {
    createProduct,
}
