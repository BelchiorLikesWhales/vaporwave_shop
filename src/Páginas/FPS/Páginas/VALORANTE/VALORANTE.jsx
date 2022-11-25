import React from 'react';
import './VALORANTE.css';
import { Link } from 'react-router-dom';



export default function VALORANTE(){
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
                <img className='foof' src='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltf0200e1821b5b39f/5eb7cdc144bf8261a04d87f9/V_AGENTS_587x900_Phx.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Takashi</div>
                    <div className='txt'>R$119,99</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltceaa6cf20d328bd5/5eb7cdc1b1f2e27c950d2aaa/V_AGENTS_587x900_Jett.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Riot</div>
                    <div className='txt'>R$100,00</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt6577b1f58530e6b2/5eb7cdc121a5027d77420208/V_AGENTS_587x900_Reyna.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Reyna</div>
                    <div className='txt'>R$299,99</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
        <p> Em breve mais skins.</p>
    </div>
</div>
    )
}