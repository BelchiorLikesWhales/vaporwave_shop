import React from 'react';
import { Link } from 'react-router-dom';
import './call.css'

export default function Call(){
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
                <img className='foto' src='https://arenaesports.com.br/foto/976x430/cache/wp-content/uploads/2018/09/skins-mais-caras-do-PUBG.jpg' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Playerunknown’s</div>
                    <div className='txt'>$211,99</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>
    
    <div className='imgs_container'>
            <div className='imgs1'>
                <img className='foto' src='https://s2.glbimg.com/rw5mmlBkcSF1FPIExoeGyqdPbu0=/0x0:695x390/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2020/G/L/ExQJmZQYAMwv0corQtgg/pubg-skins-bizarras-2.jpg' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Coringa e Arlequina</div>
                    <div className='txt'>$12</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>
    </div>
    <div className='imgs_container'>
            <div className='imgs1'>
                <img className='foto' src='https://arenaesports.com.br/wp-content/uploads/2018/09/Doomsday-Hoodie-PUBG.jpg' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Doomsday Hoodie</div>
                    <div className='txt'>$199,99</div>
                </div>
                <button className='comprar'>ADICIONAR AO CARRINHO</button>
            </div>
            </div>
    </div>
</div>

</div>
        </div>
    )
}
