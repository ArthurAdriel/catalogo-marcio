// src/components/Favoritos.jsx
import { createPortal } from 'react-dom';

export default function Favoritos({ favoritos, aoFechar, aoSelecionarPerfume }) {
  function handleSelecionar(perfume) {
    aoSelecionarPerfume(perfume);
    aoFechar();
  }

  return createPortal(
    <div className="favoritos-overlay" onClick={aoFechar}>
      <div className="favoritos-painel" onClick={(e) => e.stopPropagation()}>
        <div className="favoritos-header">
          <h3>Meus Favoritos</h3>
          <button className="login-fechar" onClick={aoFechar}>✕</button>
        </div>

        {favoritos.length === 0 ? (
          <p className="favoritos-vazio">Você ainda não curtiu nenhum perfume.</p>
        ) : (
          <ul className="favoritos-lista">
            {favoritos.map((perfume) => (
              <li
                key={perfume.id}
                className="favoritos-item"
                onClick={() => handleSelecionar(perfume)}
              >
                <img src={perfume.img[0]} alt={perfume.nome} />
                <div className="favoritos-info">
                  <p className="brand">{perfume.marca}</p>
                  <p className="name">{perfume.nome}</p>
                  <p className="price">R$ {perfume.preco}</p>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>,
    document.body
  );
}
