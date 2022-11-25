import React from 'react';
import { Link } from 'react-router-dom';
import './fps.css';

export default function Fps(){
    return(
        <div className='container'>
            <div className='mainbox'>
                <div className='navbar'>
                    <Link to="/" className='Link'>
                        <button className='navmoba'>
                                Home
                        </button>
                    </Link>
                    
                    <Link to="/fps" className='Link'>
                        <button className='navmoba'>
                            Início                
                        </button>
                    </Link>
                    
                    <Link to="/cod" className='Link'>
                        <button className='navmoba'>
                                Call Of Duty
                        </button>
                    </Link>

                    <Link to="/csgo" className='Link'>
                        <button className='navmoba'>
                            Counter Strike
                        </button>
                    </Link>

                    <Link to="/valorante" className='Link'>
                        <button className='navmoba'>
                            Valorante
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