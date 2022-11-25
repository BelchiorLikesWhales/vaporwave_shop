import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Páginas/Home';
import Login from './Home/index';
import Register from './Register/index';

//Rotas Battle Royale
import Battle from './Páginas/Battle Royale';
import FF from './Páginas/Battle Royale/Páginas/FREEFIRE/Freefire';
import Fortnite from './Páginas/Battle Royale/Páginas/FORTINITE/Fortnite';
import PUBG from './Páginas/Battle Royale/Páginas/PUBG/Call';

//Rotas FPS
import Fps from './Páginas/FPS';
import COD from './Páginas/FPS/Páginas/COD/COD';
import CSGO from './Páginas/FPS/Páginas/CSGO/CSGO';
import Valorant from './Páginas/FPS/Páginas/VALORANTE/VALORANTE';

// ROTAS MOBA
import Moba from './Páginas/MOBA';
import LOL from './Páginas/MOBA/Páginas/LOL/LOL';
import MobileLegends from './Páginas/MOBA/Páginas/MobileLegends/MobileLegends';
import PokemonUnite from './Páginas/MOBA/Páginas/PokemonUnite/PokemonUnite';

// Rotas RPG
import Rpg from './Páginas/RPG';
import Minecraft from './Páginas/RPG/Páginas/Minecraft/Minecraft';
import Gta from './Páginas/RPG/Páginas/Gta/Gta';
import Roblox from './Páginas/RPG/Páginas/Roblox/Roblox';


export default function Rotas() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/fps" element={<Fps />} />
        <Route path="/cod" element={<COD />} />
        <Route path="/csgo" element={<CSGO />} />
        <Route path='/valorante' element={<Valorant />} />
        <Route path="/battleroyale" element={<Battle />} />
        <Route path='/Freefire' element={<FF />} />
        <Route path="/fortnite" element={<Fortnite />} />
        <Route path="/pubg" element={<PUBG />} />
        <Route path="/moba" element={<Moba />} />
        <Route path="/lol" element={<LOL />} />
        <Route path="/mobilelegends" element={<MobileLegends />} />
        <Route path="/pokemonunite" element={<PokemonUnite />} />
        <Route path="/rpg" element={<Rpg />} />
        <Route path="/mine" element={<Minecraft />} />
        <Route path='/gta' element={<Gta />} />
        <Route path='/roblox' element={<Roblox />} />
      </Routes>
    </BrowserRouter>
  )
}
