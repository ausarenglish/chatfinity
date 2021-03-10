const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.get('/', commentController.getComments, (req, res) => {
  res.status(200).json(); // pass res.locals something from controller
});

router.post('/post', commentController.postComment, (req, res) => {
  res.status(200).json(); // pass res.locals something from controller
});

module.exports = router;
