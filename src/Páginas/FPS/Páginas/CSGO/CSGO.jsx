import React from 'react';
import './CSGO.css';
import { Link } from 'react-router-dom';



export default function CSGO(){
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
        <div className='imgs_container'>
            <div className='imgs1'>
                <img className='foof' src='https://cdn.key-drop.com/csgo_icons/c8/c89d3288bc252517d1cbdcc1095bfdbd.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Nice Shote</div>
                    <div className='txt'>R$210,00</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://community.cloudflare.steamstatic.com/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXH5ApeO4YmlhxYQknCRvCo04DEVlxkKgpovbSsLQJf0ebcZThQ6tCvq4GFqOP9NL7DqWRD6ct2j9bN_Iv9nGu4qgE7NnfxctPGJwZsYV6B8lXtlOy915DpvZicziE3uXEh4inZnxXhgxlEZ-Fvm7XAHohWzUAc/360fx360f' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Butterfly Gold</div>
                    <div className='txt'>R$999,99</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://cdn.key-drop.com/csgo_icons/f5/f5a128a4eb50a92ed5364c454b2088a8.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Spider</div>
                    <div className='txt'>R$99,99</div>
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