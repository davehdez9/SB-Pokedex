/**
 * Shows a single Pokemon, with their name, image, and type.
 */

import React from 'react'
import './Pokecard.css'


const Poke_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

const Pokecard = (props) => {    
    let img = `${Poke_API}${props.id}.png`
    return (
        <div className="Card">
            <ul>
                <h3 className="Card-title">{props.name}</h3>
                <img className="Card-image" src={img} alt=''/>
                <h3>Type: {props.type}</h3>
                <h3>Exp: {props.exp}</h3>
            </ul>
        </div>
    )
}

export default Pokecard