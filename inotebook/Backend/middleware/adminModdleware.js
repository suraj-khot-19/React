const adminMiddleware = (req, res, next) => {
    const { name, password } = req.body;
    if (name === 'suraj' && password === 'rowdy') {
        next();
    }
    else {
        res.status(400).json({ error: 'You cant access this data' });
    }
}
module.exports = adminMiddleware;