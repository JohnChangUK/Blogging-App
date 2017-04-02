import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';


class PostsNew extends Component {

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // const title = this.props.fields.title;
    // same as const handleSubmit = this.props.handleSubmit
    return (
        <form onSubmit={handleSubmit(this.props.createPost)}>
          <h3>Create a new post</h3>
          <div className="form-group">
            <label>Title</label>
              <input type="text" className="form-control" {...title} />
              <div className="text-help">
                {title.touched ? title.error : ''}
              </div>
          </div>

           <div className="form-group">
            <label>Categories</label>
              <input type="text" className="form-control" {...categories} />
              <div className="categories-help">
              {categories.touched ? categories.error : ''}
              </div>
          </div>
          
          <div className="form-group">
            <label>Content</label>
              <textarea className="form-control" {...content} />
              <div className="content-help">
              {content.touched ? content.error : ''}
              </div>
          </div>
          
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title || values.title.trim() === '') {
    errors.title = 'Enter a username please';
  }
  if (!values.categories || values.categories.trim() === '') {
    errors.categories = "Please enter a category";
  }
  if (!values.content || values.content.trim() === '') {
    errors.content = "Please enter some content!";
  }

  return errors;
}

// connect: first argument is mapStateToProps,
// 2nd is mapDispatchToProps
// reduxForm: 1st is form config, 2nd is mapStateToProps,
// 3rd is mapDispatchToProps

export default reduxForm({ 
    form: 'PostsNewForm',
    fields: ['title', 'categories', 'content'],
    validate
  }, null, { createPost })(PostsNew);

