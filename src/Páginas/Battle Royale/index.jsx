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

                </div>

                <div className='appexe'>
                    Seja_bem_vindo.exe
                </div>
                    
                <div className='window'>
                    <h3>Coming Soon.</h3>
                </div>
            </div>

        </div>
    )
}