import React, { Component } from 'react';
import './App.css';
import Form from './components/form';

class App extends Component {
  render() {
    return (
      <div className="container">
        <h1 className="text-center">Sample Text Generator</h1>
        <hr />
        <Form />
      </div>
    );
  }
}

export default App;
