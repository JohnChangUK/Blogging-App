import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/index';


class PostsIndex extends Component {
  componentWillMount() {
    this.props.fetchPosts();
  }

  render() {
    return (
        <div>List of Blog Posts</div>
      );
  }
}

// This givues as access to this.props.fetchPosts and now we can 
// call it inside componentWillMount()
export default connect(null, { fetchPosts })(PostsIndex);