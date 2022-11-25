import React from 'react';
import './LOL.css';
import { Link } from 'react-router-dom';



export default function LOL(){
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
                <img className='foof' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b37b3fec-4640-40af-9505-6c6cf67c4c5a/df2no7f-cddf6016-3ba9-42d4-94ea-2c35860f2aa9.png/v1/fill/w_1192,h_670,strp/arcana_ahri_skin_by_uhmtaongon_df2no7f-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIwIiwicGF0aCI6IlwvZlwvYjM3YjNmZWMtNDY0MC00MGFmLTk1MDUtNmM2Y2Y2N2M0YzVhXC9kZjJubzdmLWNkZGY2MDE2LTNiYTktNDJkNC05NGVhLTJjMzU4NjBmMmFhOS5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.5OUh5Jq86FTXBZjX5DKNcRvke-mo4VDyTaykoRFr1jg' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Ahri Arcana</div>
                    <div className='txt'>$12</div>
                </div>
                <Link to='/login'>
                    <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
                </Link>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://static.wikia.nocookie.net/leagueoflegends/images/3/37/Xayah_Arcana_%28Ruby%29.png' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Xayah Arcana</div>
                    <div className='txt'>$10</div>
                </div>
                <Link to='/login'>
                    <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
                </Link>
            </div>

            <div className='imgs1'>
                <img className='foof' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b37b3fec-4640-40af-9505-6c6cf67c4c5a/df2ri8s-afa2c7c0-3a64-422e-95e7-8828d7adfa57.png/v1/fill/w_1191,h_671,strp/arcana_ryze_by_uhmtaongon_df2ri8s-pre.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzIxIiwicGF0aCI6IlwvZlwvYjM3YjNmZWMtNDY0MC00MGFmLTk1MDUtNmM2Y2Y2N2M0YzVhXC9kZjJyaThzLWFmYTJjN2MwLTNhNjQtNDIyZS05NWU3LTg4MjhkN2FkZmE1Ny5wbmciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.248SiGSNmqI7P_j5EfmiTtx3Fq8eZdnGPeEFIn0eTo4' width='290px' height='290px' />
                <div className='txt_container'>
                    <div className='txt'>Ryze Arcan</div>
                    <div className='txt'>$20</div>
                </div>
                <Link to='/login'>
                    <Link to='/login'>
                    <button className='comprar'>ADICIONAR AO CARRINHO</button>
                </Link>
                </Link>
            </div>
        </div>
        <p> Em breve mais skins.</p>
    </div>
</div>
    )
}