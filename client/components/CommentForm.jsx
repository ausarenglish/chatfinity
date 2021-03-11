import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCommentTitle, updateCommentBody, saveComment } from '../actions/actions';


const mapStateToProps = (state) => {
  return {
    newCommentTitle: state.posts.newCommentTitle,
    newCommentBody: state.posts.newCommentBody,
    //user: state.scratch.user,
    
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCommentTitle: (value) => dispatch(updateCommentTitle(value)),
    updateCommentBody: (value) => dispatch(updateCommentBody(value)),
    handleSubmit: (e, title, body, id) => {
      e.preventDefault();
      if (!title || !body) return;

      dispatch(saveComment(title, body, id));
    },
  };
};
// notes: duplicate CommentForm
class CommentForm extends Component {
  render() {
    return (
      <center className="PostForm">
        <form
          onSubmit={(e) =>
            this.props.handleSubmit(
              e,
              this.props.newCommentTitle,
              this.props.newCommentBody,
              //this.props.user.id
            )
          }
        >
          <input
            placeholder="Add a title"
            onChange={(e) => this.props.updateCommentTitle(e.target.value)}
          />
          <br />
          <textarea
            placeholder="Add a body"
            onChange={(e) => this.props.updateCommentBody(e.target.value)}
          />
          <br />
          <button type="submit">Add Comment</button>
        </form>
      </center>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentForm);
