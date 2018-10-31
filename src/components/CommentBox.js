import React from 'react';

class CommentBox extends React.Component {
  state = { comment: ''}

  handleChange = (evt) => {
    this.setState({ comment: evt.target.value })
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({ comment: '' });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h4>Add a Comment</h4>
        <textarea
          value={this.state.comment}
          onChange={this.handleChange}
        />
        <div>
          <button type="submit">Submit Comment</button>
        </div>
      </form>
    )
  }
}

export default CommentBox;