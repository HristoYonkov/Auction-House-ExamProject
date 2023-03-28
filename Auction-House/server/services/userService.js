const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const secret = 'q-asd231adfas12321kl';

async function register(username, email, password) {
    const existing = await User.findOne({ email })
    if (existing) {
        throw new Error('Email is already taken!!!')
    }

    const user = await User.create({
        username,
        email,
        hashedPassword: await bcrypt.hash(password, 10)
    });

    return createToken(user)
}

async function login(email, password) {
    const user = await User.findOne({ email })

    if (!user) {
        throw new Error('Invalid  email or password!!!')
    }

    const match = await bcrypt.compare(password, user.hashedPassword)
    if (!match) {
        throw new Error('Invalid  email or password!!!')

    }
    return createToken(user);
}


function createToken(user) {
    const payload = {
        username: user.username,
        email: user.email,
        _id: user._id,
    };
    return {
        username: user.username,
        email: user.email,
        _id: user._id,
        accessToken: jwt.sign(payload, secret)
    }
}

function parseToken(token) {
    try {
        return jwt.verify(token, secret)

    } catch (error) {
        throw new Error('Invalid acces token!')
    }
}

module.exports = {
    register,
    login,
    parseToken,

}