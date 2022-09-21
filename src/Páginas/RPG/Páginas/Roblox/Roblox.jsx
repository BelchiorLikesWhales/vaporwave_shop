<<<<<<< HEAD
import React from 'react';
import './Roblox.css'
import { Link } from 'react-router-dom';

export default function ROBLOX(){
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
                <img className='foof' src='https://i.pinimg.com/originals/ab/af/0b/abaf0b8df29c6e618c5d9bbefc30d564.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Hétero top</div>
                    <div className='txt'>$1</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://i.pinimg.com/originals/32/52/26/3252262efb8dc04178f647f9504f6782.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Gata estelar</div>
                    <div className='txt'>$10</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://i.pinimg.com/originals/4c/c4/65/4cc465844db47aaa7e0ac9781f24a046.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Essa fadona</div>
                    <div className='txt'>$20</div>
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
import './Roblox.css'
import { Link } from 'react-router-dom';

export default function ROBLOX(){
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
        <p> só pra confirmar que chegou em Roblox</p>
    </div>

</div>
    )
}
>>>>>>> dc936088839f55119d902d3322b106b609ee471c
