// src/components/DetalhePerfume.jsx
import { useState } from 'react';

export default function DetalhePerfume({ perfume, aoVoltar, favorito, aoAlternarFavorito }) {
  // Estado para controlar qual foto principal está ativa
  const [fotoAtiva, setFotoAtiva] = useState(perfume.img[0]);

  return (
    <div className="detalhe-container">
      <button className="btn-voltar" onClick={aoVoltar}>← Voltar ao Catálogo</button>
      
      <div className="detalhe-conteudo">
        {/* Lado Esquerdo: Galeria de Fotos */}
        <div className="galeria-fotos">
          <div className="foto-principal">
            <img src={fotoAtiva} alt={perfume.nome} />
          </div>
          <div className="fotos-miniaturas">
            {perfume.img.map((foto, index) => (
              <img 
                key={index}
                src={foto} 
                alt={`Miniatura ${index}`} 
                className={fotoAtiva === foto ? "ativa" : ""}
                onClick={() => setFotoAtiva(foto)} // Muda a foto principal no clique
              />
            ))}
          </div>
        </div>

        {/* Lado Direito: Informações Técnicas */}
        <div className="detalhe-info">
          <span className="brand">{perfume.marca}</span>
          <h2>{perfume.nome}</h2>
          <p className="genero-ml">{perfume.genero} | {perfume.ml}</p>
          <p className="preco-grande">R$ {perfume.preco}</p>
          
          <div className="descricao">
            <h3>Sobre a fragrância</h3>
            <p>{perfume.descricao}</p>
          </div>

          <button className="btn-favoritar" onClick={() => aoAlternarFavorito(perfume)}>
            {favorito ? '♥ Remover dos Curtidos' : '♡ Adicionar aos Curtidos'}
          </button>
        </div>
      </div>
    </div>
  );
}