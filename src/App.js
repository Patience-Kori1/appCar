import React, { Component } from 'react';
import './App.css';
import  MyCars from './components/myCars.js';

class App extends  Component {
  render() {
  return (
    <div className="App">
   
      <MyCars></MyCars>
    
    </div>
  );
}
}

export default App;
