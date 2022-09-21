<<<<<<< HEAD
import React from 'react';
import './Gta.css'
import { Link } from 'react-router-dom';

export default function Gta(){
    return(
        <div className='container'>

    <div className='mainbox'>
        <div className='navbar'>
            <button className='navmoba'>
                <Link to="/" className='Link'>
                    Home
                </Link>
            </button>
            <button className='navmoba'>
                <Link to="/rpg" className='Link'>
                    Início
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/mine" className='Link'>
                    MINECRAFT
                </Link>
            </button>
            
            <button className='navmoba'>
                <Link to="/gta" className='Link'>
                    GTA RP
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/roblox" className='Link'>
                    ROBLOX
                </Link>
            </button>            
        </div>
        <div className='imgs_container'>
            <div className='imgs1'>
                <img className='foof' src='https://1.bp.blogspot.com/-G9rdNZgaPhA/VtvREF9_YWI/AAAAAAAAE0Y/CT2a8AbnXlc/s1600/rw%2Bfoda%2B2.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Skin Policial</div>
                    <div className='txt'>$15</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://gtadev.com.br/wp-content/uploads/2021/05/1.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Mandrake</div>
                    <div className='txt'>$10</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='http://localhostr.com/file/cVXHra9/8.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Snoopdog</div>
                    <div className='txt'>$100</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>
        </div>
        <p> Em breve mais skins.</p>
    </div>

</div>
    )
}
=======
import React from 'react';
import './Gta.css'
import { Link } from 'react-router-dom';

export default function Gta(){
    return(
        <div className='container'>

    <div className='mainbox'>
        <div className='navbar'>
            <button className='navmoba'>
                <Link to="/" className='Link'>
                    Home
                </Link>
            </button>
            <button className='navmoba'>
                <Link to="/rpg" className='Link'>
                    Início
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/mine" className='Link'>
                    MINECRAFT
                </Link>
            </button>
            
            <button className='navmoba'>
                <Link to="/gta" className='Link'>
                    GTA RP
                </Link>
            </button>

            <button className='navmoba'>
                <Link to="/roblox" className='Link'>
                    ROBLOX
                </Link>
            </button>


            
        </div>
        <p> só pra confirmar que chegou em GTA</p>
    </div>

</div>
    )
}
>>>>>>> dc936088839f55119d902d3322b106b609ee471c
