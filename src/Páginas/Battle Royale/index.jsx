import React from 'react';
import { Link } from 'react-router-dom';
import './battleryl.css';

export default function Battle(){
    return(
        <div className='container'>

        <div className='mainbox'>
            <div className='navbar'>
                <Link to="/" className='Link'>
                    <button className='navmoba'>
                        Home
                    </button>
                </Link>

                <Link to="/battleroyale" className='Link'>
                    <button className='navmoba'>
                        Início
                    </button>
                </Link>

                <Link to="/freefire" className='Link'>
                    <button className='navmoba'>
                        Free Fire
                    </button>
                </Link>

                <Link to="/fortnite" className='Link'>
                    <button className='navmoba'>
                        Fortnite
                    </button>
                </Link>

                <Link to="/pubg" className='Link'>
                    <button className='navmoba'>
                        PUBG
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