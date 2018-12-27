const express = require('express');
const router = express.Router();
const _ = require('lodash');

const {Project} = require('../models/project');

router.get('/projects',(req,res) => {
    Project.find().then(project => res.send(project)).catch(err => res.send(err));
});

router.get('/projects/:id',(req,res) => {
    Project.findById(req.params.id).then(project => res.send(project)).catch(err => res.send(err));
});

router.post('/register', (req, res) => {
    let project = new Project(req.body);
    project.save().then(project => res.send(project)).catch(err => res.send(err));
});


module.exports = {
    projectsController:router
}