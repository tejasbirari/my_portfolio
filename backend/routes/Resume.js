const express = require('express');
const { addResume, getResume } = require('../controllers/Resume');
const router = express.Router();

router.post('/', addResume);
router.get('/', getResume);

module.exports = router;