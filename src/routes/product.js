import express from 'express';
import multiparty from 'connect-multiparty';

import { mdAuth } from '../middlewares/index.js';
import { ProductsController } from '../controllers/index.js';

const api = express.Router();

// Criar as rotas;


export const productRoutes = api;
