function authenticate(req, res, next) {
    const bearerToken = req.headers.authorization;

    if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
        return res.status(401).json({ message: 'Unauthorized' });
    }
    const token = bearerToken.split(' ')[1];
    next();
}

module.exports = authenticate;
