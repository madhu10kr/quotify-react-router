const express = require('express');
const router = express.Router();
const _ = require('lodash');

const {User} = require('../models/user');

router.get('/users',(req,res) => {
    User.find().then(user => res.send(user)).catch(err => res.send(err));
});

router.post('/register', (req, res) => {
    let body = _.pick(req.body, ['email', 'password']);
    let user = new User(body);
    user.save().then((user) => {
        return user.generateToken();
    }).then((token) => {
        res.header('x-auth', token).send(user);
    }).catch((err) => {
        res.send(err); 
    });
});


module.exports = {
    usersController:router
}