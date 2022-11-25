import React from 'react';
import { Link } from 'react-router-dom';
import './fort.css'

export default function Fortnite (){
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
       
        <div className='imgs_container'>
            <div className='imgs1'>
                <img className='fto' src='https://cdn.ligadosgames.com/imagens/fortnite-skin-dante-0-cke.jpg' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Dante</div>
                    <div className='txt'>$33,99</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>
        
    
    <div className='imgs_container'>
            <div className='imgs1'>
                <img className='fto' src='https://cdn.ligadosgames.com/imagens/fortnite-skin-ragnarok-cke.jpg' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Ragnarok</div>
                    <div className='txt'>$33,99</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>
        
    </div>
    <div className='imgs_container'>
            <div className='imgs1'>
                <img className='fto' src='https://cdn.ligadosgames.com/imagens/fortnite-skin-cuddle-team-leader-cke.jpg' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Cuddle Team Leader</div>
                    <div className='txt'>$33,99</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>
            </div>
        
    </div>
</div>

</div>
    )
}