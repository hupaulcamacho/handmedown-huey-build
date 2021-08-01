const db = require("../db/index");

const createUser = async(req, res, next) => {
    try {
        await db.none("INSERT INTO users (id, email) VALUES(${id}, ${email})", req.body);
        res.json({ message: "User created."});
    } catch (err) {
        next(err);
    }
}

const fetchAllUsers = async (req, res, next) => {
    try {
        const users = await db.any("SELECT * FROM users");
        res.json({
            message: "Retrieved all users",
            users: users
        })
    } catch (error) {
        
    }
}

module.exports = {
    createUser,
    fetchAllUsers
}