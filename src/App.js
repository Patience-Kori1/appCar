import { Component } from 'react';
import Mycars from './components/Mycars';
import './App.css';
import { getRoles } from '@testing-library/react';

class App extends Component {

  state = {
    titre: 'Mon Catalogue Voitures',
    couleur : "green"
  }

  render() {
    return (
      <div className='App'style = {{backgroundColor: ' rgb(248, 225, 186)', width: '800px', margin:'5px auto', padding:'10px', marginTop: '50px'}}>

        <h1> Composant 1  : App.js </h1>
        <Mycars title={this.state.titre} />

      </div>
    )
  }
}

export default App;