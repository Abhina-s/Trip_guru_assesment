import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.css';
import {
  Router,
  Route,
} from 'react-router-dom';
import history from './history';
import TourList from './containers/TourList';
import DetailView from './containers/DetailView';

const App = () => {
  return (
    <Router history={history}>
      <div className="App">
        <Route path="/" exact component={TourList} />
        <Route path="/tour/:name" component={DetailView} />
      </div>
    </Router>
  );
};

export default App;
