import cors from 'cors';
import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';

import {
    authRoutes,
    userRoutes,
    productRoutes,
} from './routes/index.js';

const app = express();

// Configuração do body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configurando pasta statica do projeto
app.use(express.static('uploads'));

// Configuração do CORS
app.use(cors());

// Configuração morgan
app.use(morgan('dev'));

// Configuração das rotas
app.use('/api/v1', authRoutes);
app.use('/api/v1', userRoutes);
app.use('/api/v1', productRoutes);

export { app }
