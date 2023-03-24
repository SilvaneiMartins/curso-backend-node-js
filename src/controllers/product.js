import { Product } from '../models/index.js';

function createProduct(req, res) {
    res.status(200).send({ mgs: 'Criando um produto!' })
}

export const ProductsController = {
    createProduct,
}
