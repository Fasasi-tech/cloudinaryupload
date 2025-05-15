const express = require('express');
const router = express.Router();
const { uploadBase64Image } = require('../controller/cloudinaryController');
const protect = require('../middleware/authMiddleware')
router.post('/upload-base64', protect,  uploadBase64Image);

module.exports = router;
