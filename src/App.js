import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';

import Counter from './components/Counter';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';

class App extends Component {

  test = 'bla';

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/counter">Counter</Link></li>
          <li><Link to="/books">Books</Link></li>
        </ul>
        <Route path="/counter" component={Counter}/>
        <Route exact path="/books" component={BookList}/>
        <Route path="/books/:id" component={BookDetail}/>
      </div>
    );
  }
}

export default App;
