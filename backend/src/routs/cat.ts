const path = require('path');

const express = require('express');
const router = express.Router();

const catController = require('../controllers/catController');

router.get("/",catController.cat);

module.exports = router;

