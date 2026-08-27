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
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button
          className="hamburger-btn"
          aria-label="Abrir menu"
          aria-expanded={menuAberto}
          onClick={() => setMenuAberto((atual) => !atual)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div
          className="logo"
          role="button"
          tabIndex={0}
          onClick={() => {
            setMenuAberto(false);
            aoIrParaInicio();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setMenuAberto(false);
              aoIrParaInicio();
            }
          }}
        >
          <span className="logo-text">MARCIO</span>
          <span className="logo-subtext">PERFUMES</span>
        </div>

        <ul className={`nav-links${menuAberto ? ' aberto' : ''}`}>
          <li className="active" onClick={() => setMenuAberto(false)}>Início</li>
          <li onClick={() => setMenuAberto(false)}>Masculinos</li>
          <li onClick={() => setMenuAberto(false)}>Femininos</li>
          <li onClick={() => setMenuAberto(false)}>Unissex</li>
          <li onClick={() => setMenuAberto(false)}>Lançamentos</li>
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
            ❤️ <span className="icon-badge">{favoritos.length}</span>
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