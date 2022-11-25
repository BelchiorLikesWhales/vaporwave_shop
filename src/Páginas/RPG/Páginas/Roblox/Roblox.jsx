import React from 'react';
import './Roblox.css'
import { Link } from 'react-router-dom';

export default function ROBLOX(){
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
        <div className='imgs_container'>
            <div className='imgs1'>
                <img className='foof' src='https://i.pinimg.com/originals/ab/af/0b/abaf0b8df29c6e618c5d9bbefc30d564.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Hétero top</div>
                    <div className='txt'>$1</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://i.pinimg.com/originals/32/52/26/3252262efb8dc04178f647f9504f6782.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Gata estelar</div>
                    <div className='txt'>$10</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://i.pinimg.com/originals/4c/c4/65/4cc465844db47aaa7e0ac9781f24a046.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Essa fadona</div>
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