const express = require('express');
const router = express.Router();

const { handleLogin } = require('../controllers/Authentication');

router.post('/', handleLogin)

module.exports = router;