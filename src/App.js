import React from 'react'
import Pokedex from './Pokedex'
import pokemons from './pokemonList'
import './App.css';

function App() {
  return (
    <div>
      <Pokedex pokemons={pokemons}/>
    </div>
  );
}

export default App;
