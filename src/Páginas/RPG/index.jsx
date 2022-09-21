import React from 'react';
import './rpg.css'
import { Link } from 'react-router-dom';

export default function RPG(){
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
                <Link to="/rpg" className='Link'>
                    Início
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/mine" className='Link'>
                    MINECRAFT
                </Link>
            </button>
            
            <button className='navmoba'>
                <Link to="/gta" className='Link'>
                    GTA RP
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/roblox" className='Link'>
                    ROBLOX
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
