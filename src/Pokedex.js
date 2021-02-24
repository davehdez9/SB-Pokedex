/**
 * Is provide, via props, and array of objects describing different pokemon, and render a sequence of Pokecard components
 * 
 * - Use the defaultProps feature of Pokedex to provide a default list of Pokemon characters to show. To can use this list for a good set of defaults:
 * 
 * - For each Pokemon, their image source should be:
 * https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png.
 */

import React from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'

const Pokedex = (props) => {
    return (
        <div className="Container">
            <h1>Pokedex</h1>
            <div className="Pokedex">
                {props.pokemons.map(p => (
                    <Pokecard
                    id={p.id}
                    name={p.name}
                    type={p.type}
                    exp={p.base_experience}/>
                ))}
            </div>
        </div>
    )
}

export default Pokedex