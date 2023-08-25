const express = require('express');
const { addProject, getProject } = require('../controllers/Project');
const router = express.Router();

router.post('/', addProject);
router.get('/', getProject)

module.exports = router;