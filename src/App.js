import React, { Component } from 'react';
import './App.scss';
import News from './components/NewsComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <News />
      </div>
    );
  }
}

export default App;
