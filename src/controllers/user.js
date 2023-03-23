import { User } from '../models/index.js';
import { getFilePath } from '../utils/index.js';

async function getMe(req, res) {
    const { user_id } = req.user;

    try {
        const response = await User.findById(user_id).select(["-password", "-__v"]);

        if (!response) {
            return res.status(400).send({ msg: 'Usuário não encontrado!' });
        } else {
            return res.status(200).send(response);
        }
    } catch (error) {
        res.status(500).send({ msg: 'Erro de Servidor!' });
    }
};

async function getAllUsers(req, res) {
    try {
        const { user_id } = req.user;

        const response = await User.find({ _id: { $ne: user_id } }).select(["-password", "-__v"]);

        if (!response) {
            return res.status(400).send({ msg: 'Usuário não encontrado!' });
        } else {
            return res.status(200).send(response);
        }
    } catch (error) {
       res.status(500).send({ msg: 'Erro de Servidor!' });
    }
};

async function getUserById(req, res) {
    const { id } = req.params;

    try {
        const response = await User.findById(id).select(["-password", "-__v"]);

        if (!response) {
            res.status(400).send({ msg: 'Usuário não encontrado!' });
        } else {
            res.status(200).send(response);
        }
    } catch (error) {
        res.status(500).send({ msg: 'Erro de Servidor!' });
    }
};

async function updateUser(req, res) {
    const { user_id } = req.user;
    const userData = req.body;

    if (req.files.avatar) {
        const imagePath = getFilePath(req.files.avatar);
        userData.avatar = imagePath;
    }

    User.findByIdAndUpdate({ _id: user_id}, userData, { new: true }, (error, userUpdated) => {
        if (error) {
            res.status(500).send({ msg: 'Erro de Servidor!' });
        } else {
            if (!userUpdated) {
                return res.status(400).send({ msg: 'Erro ao atualizar o usuário!' });
            } else {
                return res.status(200).send(userUpdated);
            }
        }
    });
};

export const UserController = {
    getMe,
    updateUser,
    getUserById,
    getAllUsers,
}
