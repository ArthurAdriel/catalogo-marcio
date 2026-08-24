// src/components/Login.jsx
import { useState } from 'react';
import { createPortal } from 'react-dom';

const ADMIN_USUARIO = 'admin';
const ADMIN_SENHA = 'admin123';

export default function Login({ aoFechar, aoLogar }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (usuario === ADMIN_USUARIO && senha === ADMIN_SENHA) {
      aoLogar();
      aoFechar();
    } else {
      setErro('Usuário ou senha inválidos.');
    }
  }

  return createPortal(
    <div className="login-overlay" onClick={aoFechar}>
      <div className="login-modal" onClick={(e) => e.stopPropagation()}>
        <button className="login-fechar" onClick={aoFechar}>✕</button>

        <div className="login-header">
          <span className="logo-text">MARCIO</span>
          <span className="logo-subtext">PERFUMES</span>
        </div>

        <h2 className="login-titulo">Entrar</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <div className="login-campo">
            <label htmlFor="login-usuario">Login</label>
            <input
              id="login-usuario"
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              autoComplete="username"
              required
            />
          </div>

          <div className="login-campo">
            <label htmlFor="login-senha">Senha</label>
            <input
              id="login-senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              autoComplete="current-password"
              required
            />
          </div>

          {erro && <p className="login-erro">{erro}</p>}

          <button type="submit" className="btn-primary login-btn">ENTRAR</button>
        </form>
      </div>
    </div>,
    document.body
  );
}
