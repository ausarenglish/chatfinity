const express = require('express');
const commentController = require('../controllers/commentController');
const router = express.Router();

router.post('/', commentController.getComments, (req, res) => {
  res.status(200).json(res.locals.comments); // pass res.locals something from controller
});

router.post('/post', commentController.createComment, (req, res) => {
  res.status(200).json(res.locals.newComment); // pass res.locals something from controller
});

module.exports = router;
