const express = require('express');
const { addProfilePic, getProfilePic } = require('../controllers/Profile');
const router = express.Router();

router.post('/', addProfilePic);
router.get('/', getProfilePic)

module.exports = router;