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

    product.save((error, productStored) => {
        if (error)  {
            return res.status(500).send({ msg: 'Error de servidor!' });
        } else {
            return res.status(201).send(productStored);
        }
    });
}

export const ProductsController = {
    createProduct,
}
