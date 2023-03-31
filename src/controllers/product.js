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
};

async function getAllProducts(req, res) {
    try {
        const { _id } = req.body;
        const products = await Product.find({ _id: { $ne: _id } }).select(["-__v"]);

        if (!products) {
            return res.status(400).send({ msg: 'Produto não encontrado!' });
        } else {
            return res.status(200).send(products);
        }
    } catch (error) {
        return res.status(500).send({ msg: 'Error de servidor!' });
    }
}

export const ProductsController = {
    createProduct,
    getAllProducts,
}
