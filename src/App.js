import React, { Component } from 'react';
import './App.css';
import  MyCars from './components/myCars.js';

class App extends  Component {

  state = { 
    titre: "Mon catalogue Voitures",
    color:'green' 
  };

  render() {
  return (
    <div className="App">
   
      <MyCars title = {this.state.titre} couleur = {this.state.color}></MyCars>
    
    </div>
  );
}
}

export default App;
