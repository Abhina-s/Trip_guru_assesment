import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import ImageList from './containers/ImageList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ImageList />
      </div>
    );
  }
}

export default App;
