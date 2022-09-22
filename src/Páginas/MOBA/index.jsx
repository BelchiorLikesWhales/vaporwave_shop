import React from 'react';
import './moba.css'
import { Link } from 'react-router-dom';

export default function MOBA(){
    return(
        <div className='container'>

    <div className='mainbox'>
        <div className='navbar'>
            <Link to="/" className='Link'>
                <button className='navmoba'>
                    Home
                </button>
            </Link>

            <Link to="/moba" className='Link'>
                <button className='navmoba'>
                    Início
                </button>
            </Link>

            <Link to="/lol" className='Link'>
                <button className='navmoba'>
                    League of Legends
                </button>
            </Link>

            <Link to="/mobilelegends" className='Link'>
                <button className='navmoba'>
                    Mobile Legends
                </button>
            </Link>

            <Link to="/pokemonunite" className='Link'>
                <button className='navmoba'>
                    Pokémon Unite
                </button>
            </Link>

        </div>
            <div className='appexe'>
                Seja_bem_vindo.exe
            </div>
            
            <div className='window'>
                <h3>Aqui é onde a aventura começa!</h3>
                <h3>Escolha o jogo que deseja adquirir Skins.</h3>

            </div>
    </div>

</div>
    )
}
