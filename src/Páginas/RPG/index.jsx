import React from 'react';
import './rpg.css'
import { Link } from 'react-router-dom';

export default function RPG(){
    return(
    <div className='container'>

        <div className='mainbox'>
            <div className='navbar'>
                <Link to="/" className='Link'>
                    <button className='navmoba'>
                            Home
                    </button>
                </Link>
                
                <Link to="/rpg" className='Link'>
                    <button className='navmoba'>
                        Início                
                    </button>
                </Link>
                
                <Link to="/mine" className='Link'>
                    <button className='navmoba'>
                        MINECRAFT
                    </button>
                </Link>
                
                <Link to="/gta" className='Link'>
                    <button className='navmoba'>
                        GTA RP
                    </button>
                </Link>

                <Link to="/roblox" className='Link'>
                    <button className='navmoba'>    
                        ROBLOX
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
