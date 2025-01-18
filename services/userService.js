const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

class UserService {
    static async register(data) {
        const hashedPassword = await bcrypt.hash(data.password, 12);
        const user = new User({ ...data, password: hashedPassword });
        return user.save();
    }

    static async login({ email, password }) {
        const user = await User.findOne({ email });
        if (!user) throw { status: 404, message: 'User not found' };

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw { status: 401, message: 'Invalid credentials' };

        return jwt.sign({ id: user._id, email: user.email }, process.env.JWT_SECRET, { expiresIn: '1d' });
    }

    static async findAll() {
        return User.find();
    }

    static async findById(id) {
        return User.findById(id);
    }
}

module.exports = UserService;