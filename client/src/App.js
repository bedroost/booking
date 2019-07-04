/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';

class Add extends Component {
  render() {
    return (
      <div className="App">
        <h1>Add Function</h1>
      </div>
    );
  }
}


class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Add />
        </header>
      </div>
    );
  }
}

export default App;
