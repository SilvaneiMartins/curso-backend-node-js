import { User } from '../models/index.js';

async function getMe(req, res) {
    res.status(200).json({ mgs: "Minhas Informações!" });
}

export const UserController = {
    getMe,
}
