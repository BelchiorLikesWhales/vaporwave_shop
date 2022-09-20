import React from 'react';
import './ML.css'
import { Link } from 'react-router-dom';
import Teste from './images/teste.jpg';

export default function LOL(){
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
        <div className='imgs_container'>
            <div className='imgs1'>
                <img className='foof' src={Teste} width='385px' height='400px' />
                <div className='txt_container'>
                    <div className='txt'>nome</div>
                    <div className='txt'>preço</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
        <p> só pra confirmar que chegou em ML</p>
    </div>

</div>
    )
}