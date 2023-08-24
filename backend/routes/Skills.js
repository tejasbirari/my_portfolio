const express = require('express');
const { addSkillPic, getSkillPic } = require('../controllers/Skills');
const router = express.Router();

router.post('/', addSkillPic);
router.get('/', getSkillPic)

module.exports = router;