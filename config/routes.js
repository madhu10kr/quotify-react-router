const express = require('express');
const router = express.Router();

const {usersController} = require('../app/controllers/users_controller');
const {projectsController} = require('../app/controllers/projects_controller');

router.use('/users',usersController);
router.use('/categories',projectsController);


module.exports = {
    router
}