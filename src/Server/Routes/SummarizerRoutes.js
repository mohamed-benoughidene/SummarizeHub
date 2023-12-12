const express = require('express');
const {urlSummarizer,textSummarizer} = require('../Controllers/summarizerController');
const requireAuth = require('../Middleware/requireAuth');
const router = express.Router();
router.use(requireAuth)
router.post("/url-summarizer", urlSummarizer);
router.post("/text-summarizer", textSummarizer);
module.exports = router;