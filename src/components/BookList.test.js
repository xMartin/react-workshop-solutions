import React from 'react';
import { shallow } from 'enzyme';
import BookList from './BookList';

it('shows empty info for no books', () => {
  const wrapper = shallow(<BookList books={[]} />);
  const empty = <p>No books, yet.</p>;
  expect(wrapper.contains(empty)).toEqual(true);
});

it('shows list for books', () => {
  const books = [{title: 'test'}];
  const wrapper = shallow(<BookList books={books} />);
  expect(wrapper.find('ul')).toHaveLength(1);
});
