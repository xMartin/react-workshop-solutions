import React from 'react';

import BookListItem from './BookListItem';

class BookList extends React.Component {
  render() {
    if (this.props.books.length === 0) {
      return (
        <p>No books, yet.</p>
      );
    }

    return (
      <ul>
        {this.props.books.map((book, index) => {
          return <BookListItem key={index} book={book} />
        })}
      </ul>
    );
  }
}

BookList.propTypes = {
  books: React.PropTypes.array.isRequired
};

export default BookList;
