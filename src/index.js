import {
    IP_SERVER,
    PORT_SERVER,
    DB_USER,
    DB_PASSWORD,
    DB_HOST,
} from './constants.js';
import { app } from './app.js';
import mongoose from 'mongoose';

const mongoDbUrl = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/`;
const mongoDbLogal = `mongodb://localhost/cadastro-geral`;

mongoose.connect(mongoDbUrl, (error) => {
    if (error) {
        throw error;
    }

    app.listen(PORT_SERVER, () => {
        console.log(`##########################################################`);
        console.log(`##########################################################`);
        console.log(`############## API REST CADASTRO GERAL ###################`);
        console.log(`##########################################################`);
        console.log(`##########################################################`);
        console.log(`🚀 Servidor está rodando em http://${IP_SERVER}:${PORT_SERVER}`);
        console.log(`🚀 Conexão com banco de dados realizada com sucesso!`);
    });
})


