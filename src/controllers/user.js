import { User } from '../models/index.js';

async function getMe(req, res) {
    res.status(200).json({ mgs: "Get ME!" });
}

export const UserController = {
    getMe,
}
