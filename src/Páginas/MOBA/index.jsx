import React from 'react';
import './moba.css'
import { Link } from 'react-router-dom';

export default function MOBA(){
    return(
        <div className='container'>

    <div className='mainbox'>
        <div className='navbar'>
            <button className='navmoba'>
                <Link to="/" className='Link'>
                    Home
                </Link>
            </button>
            <button className='navmoba'>
                <Link to="/moba" className='Link'>
                    Início
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/lol" className='Link'>
                    League of Legends
                </Link>
            </button>
            
            <button className='navmoba'>
                <Link to="/mobilelegends" className='Link'>
                    Mobile Legends
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/pokemonunite" className='Link'>
                    Pokémon Unite
                </Link>
            </button>

        </div>
            <div className='appexe'>
                Seja bem-vindo!
            </div>
            
            <div className='window'>
                <h3>Aqui é onde a aventura começa!</h3>
                <h3>Escolha o jogo que deseja adquirir Skins.</h3>

            </div>
    </div>

</div>
    )
}
