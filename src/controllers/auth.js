import bcrypt from 'bcryptjs';

import { User } from '../models/user.js';

function register(req, res) {
    const { email, password } = req.body;

    const salt = bcrypt.genSaltSync(12);
    const hashPassword = bcrypt.hashSync(password, salt);

    const user = new User({
        email: email.toLowerCase(),
        password: hashPassword,
    });


    user.save((error,  userStorage) => {
        if (error) {
            res.status(400).send({ mgs: "Erro ao cadastrar usuário"})
        } else {
            res.status(201).send(userStorage);
        }
    });
}

export const AuthController  = {
    register,
}


