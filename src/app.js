import React, { Component } from 'react';
import './app.css';
import CardBoard from './components/card_board';

class App extends Component {
  render() {
    return (
      <div className="App">
          <CardBoard/>
      </div>
    );
  }
}

export default App;
