import React from 'react';
import './COD.css';
import { Link } from 'react-router-dom';



export default function COD(){
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
                <img className='foof' src='https://assets.stickpng.com/images/580b57fcd9996e24bc43c29e.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Sargento Arthur</div>
                    <div className='txt'>R$120</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://imagensemoldes.com.br/wp-content/uploads/2021/07/Foto-Call-Of-Duty-PNG.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Tenente Petrova</div>
                    <div className='txt'>R$399,99</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='http://pngimg.com/uploads/call_of_duty/call_of_duty_PNG46.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Tenente Jackson</div>
                    <div className='txt'>R$699,99</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
        <p> Em breve mais skins.</p>
    </div>
</div>
    )
}