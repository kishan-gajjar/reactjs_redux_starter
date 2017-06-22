import React, {Component} from 'react';
import { connect } from 'react-redux';

export class BookList extends Component {

  renderList() {
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
      {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // Whatever get return from here will show up as prop inside of BookList
  return {
    books: state.books
  };
}

export default connect(mapStateToProps)(BookList);
