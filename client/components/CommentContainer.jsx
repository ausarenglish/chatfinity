import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getComments } from '../actions/actions';
import Comment from './Comment.jsx'
import CommentForm from './CommentForm.jsx'
import Navbar from './Navbar.jsx';

const mapStateToProps = (state) => {
  // notes: change bottom for comments
  console.log("Test")
  return { comments: state.comments, userId: state.scratch.user.id };
};


 class CommentContainer extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // will comment parent comment id to get comments
    //console.log("Comment Container")
    this.props.getComments();
  }

  renderComments() {
    if (Array.isArray(this.props.comments.comments)) {
      return this.props.comments.comments.map((comment, i) => (
        <Comment
          key={`Comment ${i}`}
          title={comment.title}
          body={comment.body}
          userId={comment.user_id}
          commentId={comment.id}
          styling={comment.user_id === this.props.userId ? 'MyComment' : null}
        />
      ));
    }
  }

  render() {
    return (
      <center>
        <Navbar />
        <h1>NO COMMENT</h1>
        <center className="CommentContainer">
          {/* {this.renderComments()} */}
          <CommentForm />
        </center>
      </center>
    );
  }
}

export default connect(mapStateToProps, { getComments })(CommentContainer);