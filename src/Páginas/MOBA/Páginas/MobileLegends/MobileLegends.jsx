import React from 'react';
import './ML.css'
import { Link } from 'react-router-dom';

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
                <img className='foof' src='https://mlbuildguide.com/images/icerik/51.jpg' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Leomord</div>
                    <div className='txt'>$7</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://i.pinimg.com/originals/b4/e5/cc/b4e5cc4205ca14579ee94015f10eae92.jpg' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Esmeralda</div>
                    <div className='txt'>$10</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://pm1.narvii.com/6565/7149e3ccfda04dd3a1a9676730c09652ed331d80_hq.jpg' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Karina</div>
                    <div className='txt'>$10</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
        <p> Em breve mais skins.</p>
    </div>

</div>
    )
}