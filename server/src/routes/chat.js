const express = require('express');
const router = express.Router();

const chatController = require('../controllers/chatController');

router.get('/get/:status', chatController.getNodeChat);

module.exports = router;
