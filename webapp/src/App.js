import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import {
  Router,
  Route,
} from 'react-router-dom';
import history from './history';
import ImageList from './containers/ImageList';
import DetailView from './containers/DetailView';

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <div className="App">
          <Route path="/" exact component={ImageList} />
          <Route path="/tour/:name" component={DetailView} />
        </div>
      </Router>
    );
  }
}

export default App;
