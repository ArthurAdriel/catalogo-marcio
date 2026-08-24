// src/components/Navbar.jsx
import { useState } from 'react';
import Login from './Login';
import Favoritos from './Favoritos';

export default function Navbar({
  favoritos = [],
  aoSelecionarFavorito,
  aoIrParaInicio,
  admin,
  emPainelAdmin,
  aoAbrirAdmin,
  aoLogar,
}) {
  const [mostrarLogin, setMostrarLogin] = useState(false);
  const [mostrarFavoritos, setMostrarFavoritos] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div
          className="logo"
          role="button"
          tabIndex={0}
          onClick={aoIrParaInicio}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              aoIrParaInicio();
            }
          }}
        >
          <span className="logo-text">MARCIO</span>
          <span className="logo-subtext">PERFUMES</span>
        </div>

        <ul className="nav-links">
          <li className="active">Início</li>
          <li>Masculinos</li>
          <li>Femininos</li>
          <li>Unissex</li>
          <li>Lançamentos</li>
        </ul>

        <div className="nav-icons">
          <button
            className="icon-btn"
            title={admin ? 'Painel Admin' : 'Entrar'}
            onClick={() => (admin ? aoAbrirAdmin() : setMostrarLogin(true))}
          >
            {emPainelAdmin ? '🛠️' : '👤'}
          </button>
          <button className="icon-btn" onClick={() => setMostrarFavoritos(true)}>
            ♥ <span className="icon-badge">{favoritos.length}</span>
          </button>
        </div>
      </div>

      {mostrarLogin && (
        <Login aoFechar={() => setMostrarLogin(false)} aoLogar={aoLogar} />
      )}
      {mostrarFavoritos && (
        <Favoritos
          favoritos={favoritos}
          aoFechar={() => setMostrarFavoritos(false)}
          aoSelecionarPerfume={aoSelecionarFavorito}
        />
      )}
    </nav>
  );
}