import bcrypt from 'bcryptjs';

import { jwt } from '../utils/index.js';
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

function login(req, res) {
    const { email, password } = req.body;

    const emailLowerCase = email.toLowerCase();

    User.findOne({email: emailLowerCase}, (error, userStorage) => {
        if (error) {
            res.status(500).send({ mgs: "Erro de servidor!"})
        } else {
            bcrypt.compare(password, userStorage.password, (bcryptError, check) => {
                if (bcryptError) {
                    res.status(500).send({ mgs: "Erro de servidor!"})
                } else if (!check) {
                    res.status(400).send({ mgs: "Usuário ou senha inválidos!"})
                } else {
                    res.status(200).send({
                        accessToken: jwt.createAccessToken(userStorage),
                        refreshToken: jwt.createRefreshToken(userStorage),
                    })
                }
            });
        }
    });
};

function refreshAccessToken(req, res) {
    const { refreshToken } = req.body;

    if (!refreshToken) {
        res.status(400).send({ mgs: "Token Requerido!" })
    }

    const hasExpired = jwt.hasExpiredToken(refreshToken);
    if (hasExpired) {
        res.status(400).send({ mgs: "Token expirado!" })
    }

    const { user_id } = jwt.decoded(refreshToken);
    User.findById(user_id, (error, userStorage) => {
        if (error) {
            res.status(500).send({ mgs: "Erro de servidor!"})
        } else {
            res.status(200).send({
                accessToken: jwt.createAccessToken(userStorage)
            })
        }
    });
}

export const AuthController  = {
    login,
    register,
    refreshAccessToken,
}


