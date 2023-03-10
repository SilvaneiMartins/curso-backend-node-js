import jsonwebtoken from 'jsonwebtoken';
import { JWT_SECRETY_KEY } from '../constants';

function createAccessToken(user) {
    const expToken = new Date();
    expToken.setHours(expToken.getHours() + 24);

    const payload = {
        token_type: 'accessToken',
        user_id: user._id,
        iat: Date.now(),
        exp: expToken.getTime(),
    }

    return jsonwebtoken.sign(payload, JWT_SECRETY_KEY);
};

function createRefreshToken() {

};

function decoded() {

};

function hasExpiredToken() {

};

export const jwt = {
    decoded,
    hasExpiredToken,
    createAccessToken,
    createRefreshToken,
};
