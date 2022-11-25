import React from 'react';
import { Link } from 'react-router-dom';
import './free.css'

export default function Freefire (){
    return(
        <div>
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
                <img className='fto' src='data:image/jpeg;base64,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' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Dino</div>
                    <div className='txt'>$33,99</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            
        
    </div>
    <div className='imgs_container'>
            <div className='imgs1'>
                <img className='fto' src='https://i.pinimg.com/originals/14/4b/dd/144bdd2ab3aca50af01ea92119fdda33.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>CRIMINAL </div>
                    <div className='txt'>$69,99</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>
        
    </div>
    <div className='imgs_container'>
            <div className='imgs1'>
                <img className='fto' src='https://i.pinimg.com/474x/f4/04/e1/f404e1a9d9e0635303e17fc487f69f3b.jpg' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>JOKER</div>
                    <div className='txt'>$14,99</div>
                </div>
                <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
            </div>
            </div>
    </div>
</div>

</div>
        </div>
    )
}