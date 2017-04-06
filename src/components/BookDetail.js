import React from 'react';

const BookDetail = ({match}) => {
  return (
    <div>{match.params.id}</div>
  );
};

BookDetail.propTypes = {
  match: React.PropTypes.object.isRequired
};

export default BookDetail;
