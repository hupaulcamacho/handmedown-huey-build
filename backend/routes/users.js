const users = require("express").Router();

const { createUser, fetchAllUsers } = require("../queries/users");
const { checkFirebaseToken } = require('../middleware/auth');

users.post("/", createUser);
users.get("/", checkFirebaseToken, fetchAllUsers);

module.exports = users;