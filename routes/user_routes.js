
const express = require ('express');
const userController = require('../Controllers/usercontroller');
const authorise = require('../middleware/authorise')

const userrouter = express.Router();

userrouter.post('/register',userController.Register);
// http://localhost:4005/api/register

userrouter.post('/login',userController.Login);
// http://localhost:4005/api/login


module.exports = userrouter;