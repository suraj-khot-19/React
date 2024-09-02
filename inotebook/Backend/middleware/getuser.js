const jwt = require('jsonwebtoken');
const JWT_SecureStr = "ILovePrograming";

const getUserData = (req, res, next) => {
    try {
        // getting token from header
        let token = req.header('auth-token');
        // if no token 400
        if (!token) {
            return res.status(400).send({ error: "please authenticate using token" });
        }
        // Synchronously verify given token using a secret or a public key to get a decoded token token
        //means getting data as userid+secure code
        const data = jwt.verify(token, JWT_SecureStr);
        //get user id from data and send it as ******request to next fn
        req.userId = data.id;
        //call next then next function will call
        next();
    } catch (error) {
        res.status(500).send({ error: error.message });
    }
}
module.exports = getUserData;