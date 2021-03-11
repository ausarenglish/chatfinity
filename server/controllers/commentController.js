const db = require('../models/socialModels');

const commentController = {};

/**
 * Function createComment middleware receives a body containing detail information of the comment
 * from the client in a POST request then creates a query to store it in the database.
 *
 * @param {*} req HTTP request coming in from the client
 * @param {*} res HTTP response going out from the server
 * @param {*} next
 */
commentController.createComment = (req, res, next) => {
  const { title, body, user_id, parent_post_id } = req.body;

  const query = `INSERT INTO comments(title, body, user_id, parent_post_id)
                 VALUES($1, $2, $3, $4) RETURNING *`;
  db.query(query, [title, body, user_id, parent_post_id])
    .then((data) => {
      res.locals.newComment = data.rows[0];
      return next();
    })
    // Catch error
    .catch((e) => {
      console.log(`ERR: ${e.detail}`);
      return next({
        log: 'Error commentController.createComment',
        status: 400,
        message: e.detail,
      });
    });
};

/**
 * Function getComments middleware receives a parent_post_id from the client and retrieves
 * all comments associated with the parent_post_id
 *
 * @param {*} req HTTP request coming in from the client
 * @param {*} res HTTP response going out from the server
 * @param {*} next
 */
commentController.getComments = (req, res, next) => {
  const { parent_post_id } = req.body; // NEED TO DECIDE HOW THE CLIENT IS PASSING THE INFORMATION

  const query = `SELECT * FROM comments WHERE comments.parent_post_id = ${parent_post_id}`;

  db.query(query)
    .then((data) => {
      res.locals.comments = data.rows[0];
      return next();
    })
    .catch((e) => {
      return next({
        log: 'Error commentController.getComments',
        status: 400,
        message: e.detail,
      });
    });
};

module.exports = commentController;
