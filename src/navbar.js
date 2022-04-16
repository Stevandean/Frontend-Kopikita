import { Link, Route, Routes } from 'react-router-dom';
import Promo from './pages/promo';
import Makanan from './pages/makanan';
import Minuman from './pages/minuman';
import './App.css';
import Home from './pages/home';
import Keranjang from './pages/keranjang';
// import { getDefaultNormalizer } from '@testing-library/react';

function Navbar() {//./
  return (
    <div class="body">
      <div className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container-list">
        <a className="navbar-list" href="/">KopiKita</a>
        <Link
          className="navbar-list" to="/promo">Promo</Link>
        <Link
          className="navbar-list" to="/makanan">Makanan</Link>
        <Link
          className="navbar-list " to="/minuman">Minuman</Link>
        <Link
          className="navbar-icon " to="/keranjang">🛒</Link>
        </div>
      </div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/promo" element={<Promo />}></Route>
        <Route path="/makanan" element={<Makanan />}></Route>
        <Route path="/minuman" element={<Minuman />}></Route>
        <Route path="/keranjang" element={<Keranjang />}></Route>
      </Routes>
    </div>
  )
}

export default Navbar