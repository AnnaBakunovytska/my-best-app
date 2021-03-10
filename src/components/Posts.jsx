import React from "react";
import { connect } from "react-redux";
import { openPosts } from "../actions/posts";

class Post extends React.Component {

  render() {
    return (
      <div>
        <button onClick={() => this.props.openPosts()}>Load posts</button>
        {this.props.posts.map((item) => (
          <div key={item.id}>
            <h3>{item.title}</h3>
            <span>{ item.body }</span>
         </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  isLoading: state.postsState.isLoading,
  posts: state.postsState.posts
});

const mapDispatchToProps = {
  openPosts
};

export const PostContainer = connect(mapStateToProps, mapDispatchToProps)(Post);