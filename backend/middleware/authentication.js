const jwt = require('jsonwebtoken');
const { User } = require("../modules/SignUpModule.js")
const secret = 'mysecretsshhh';

const authentication = async (req, res, next) => {
    const token = req.header('jwt-auth');

    if (!token)
        return res.status(401).json({ msg: 'No token' });

    try {
        const decoded = await jwt.verify(token, secret);
        const user = await User.findOne({ _id: decoded.id })
        req.user = user;
        next();
    } catch (e) {
        res.status(400).json({ msg: 'Token is not valid' });
    }
};



module.exports = authentication