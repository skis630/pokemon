import React from 'react';
import {generateRandomIndex} from '../utils';
import { useEffect, useState } from 'react';
import './profile.css';

const UPPER_BOUND = 20;


const Profile = (): JSX.Element | null => {
    const [details, setDetails] = useState({name: '', sprites: {front_default: ''},
        abilities:[{ability: {name: ''}}, {ability: {name: ''}}], height: 0, weight: 0});
    useEffect(() => {
        const id: number = generateRandomIndex(UPPER_BOUND);
        fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(resp => resp.json()).then(data => setDetails(data))
        // .catch()
    }, []);

    
    const {name, sprites, abilities, height, weight} = details;
    return  (
        <div className='profile-card'>
            <div className='left'>
               <h5 className='name'>{name}</h5>
                <img src={sprites.front_default}></img>
                <ul className='abilities'>
                    <li>{abilities[0].ability.name}</li>
                    <li>{abilities[1].ability.name}</li>
                </ul> 
            </div>
            <div className='right'>
                <p>{height}</p>
                <p>{weight}</p>
            </div>
        </div>
    );
}

export default Profile;