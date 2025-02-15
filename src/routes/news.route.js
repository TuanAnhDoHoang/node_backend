const express = require('express');
const router = express.Router();
const newsController = require('../app/controller/news.controller');

// newsController.index()
router.use('/:slug', newsController.slug);
router.use('/', newsController.index);
module.exports = router;