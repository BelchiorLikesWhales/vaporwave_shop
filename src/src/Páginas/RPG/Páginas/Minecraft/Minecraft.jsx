import React from 'react';
import './mine.css'
import { Link } from 'react-router-dom';

export default function Minecraft(){
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
                <img className='foof' src='https://s.namemc.com/3d/skin/body.png?id=98adc21b0a391612&model=classic&width=282&height=282' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Homem de Ferro</div>
                    <div className='txt'>$3</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://s.namemc.com/3d/skin/body.png?id=80bba43d8a1b7c61&model=slim&width=282&height=282' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Deadpool chique</div>
                    <div className='txt'>$10</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://s.namemc.com/3d/skin/body.png?id=233a9174d2ff9ef3&model=slim&width=282&height=282' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Skin orgulho</div>
                    <div className='txt'>$88</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
        <p> Em breve mais skins.</p>
    </div>

</div>
    )
}
