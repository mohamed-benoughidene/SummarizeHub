const express = require('express');
const {articleSummarizer,textSummarizer} = require('../Controllers/articlesController');
const requireAuth = require('../Middleware/requireAuth');
const router = express.Router();
router.use(requireAuth)
router.post("/article-summarizer", articleSummarizer);
router.post("/text-summarizer", textSummarizer);
module.exports = router;