import React from 'react';
import './PU.css'
import { Link } from 'react-router-dom';

export default function PokemonUnite(){
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
                <img className='foof' src='https://www.serebii.net/pokemonunite/pokemon/holowear/025-holiday.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Holiday Pikachu</div>
                    <div className='txt'>$12</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://www.serebii.net/pokemonunite/pokemon/holowear/009-firefighter.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Blastoise Firefighter</div>
                    <div className='txt'>$10</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://www.serebii.net/pokemonunite/pokemon/holowear/006-armor.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Charizard Samurái</div>
                    <div className='txt'>$20</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>
        </div>
        <p> Em breve mais skins.</p>
    </div>

</div>
    )
}
