// src/App.jsx
import { useState } from 'react';
import Navbar from "./components/Navbar";
import PerfumeCard from "./components/PerfumeCard";
import DetalhePerfume from "./components/DetalhePerfume"; // Novo import
import "./App.css";

function App() {
  // Estado para guardar qual perfume o usuário clicou
  const [perfumeSelecionado, setPerfumeSelecionado] = useState(null);

  // Banco de dados simulado com arrays de imagens e descrições
  const [perfumes] = useState([
    { 
      id: 1, 
      nome: "Bleu Intense", 
      marca: "Essenza", 
      genero: "Masculino", 
      ml: "100ml", 
      preco: "459,90", 
      descricao: "Uma fragrância amadeirada aromática profunda, com notas de sândalo da Nova Caledônia, cedro e bergamota fresca.",
      img: [
        "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500",
        "https://images.unsplash.com/photo-1523293182086-7651a899d37f?w=500" // Segunda foto de teste
      ]
    },
    { 
      id: 2, 
      nome: "Lumière", 
      marca: "Essenza", 
      genero: "Feminino", 
      ml: "100ml", 
      preco: "399,90", 
      descricao: "Um buquê floral radiante, combinando notas de jasmim, rosa de Grasse e um toque vibrante de frutas cítricas.",
      img: [
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500"
      ]
    },
    { 
      id: 3, 
      nome: "Lumière", 
      marca: "Essenza", 
      genero: "Feminino", 
      ml: "100ml", 
      preco: "399,90", 
      descricao: "Um buquê floral radiante, combinando notas de jasmim, rosa de Grasse e um toque vibrante de frutas cítricas.",
      img: [
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500"
      ]
    },
    { 
      id: 4, 
      nome: "Lumière", 
      marca: "Essenza", 
      genero: "Feminino", 
      ml: "100ml", 
      preco: "399,90", 
      descricao: "Um buquê floral radiante, combinando notas de jasmim, rosa de Grasse e um toque vibrante de frutas cítricas.",
      img: [
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500"
      ]
    },
    { 
      id: 5, 
      nome: "Lumière", 
      marca: "Essenza", 
      genero: "Feminino", 
      ml: "100ml", 
      preco: "399,90", 
      descricao: "Um buquê floral radiante, combinando notas de jasmim, rosa de Grasse e um toque vibrante de frutas cítricas.",
      img: [
        "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500",
        "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500"
      ]
    }
  ]);

  return (
    <div className="app-container">
      <Navbar />

      {/* Condicional Baseada no Estado (Renderização Condicional) */}
      {perfumeSelecionado ? (
        // Se houver um perfume selecionado, mostra a tela de detalhes
        <DetalhePerfume 
          perfume={perfumeSelecionado} 
          aoVoltar={() => setPerfumeSelecionado(null)} 
        />
      ) : (
        // Se NÃO houver perfume selecionado (null), mostra a página inicial normal
        <>
          <header className="hero">
            <div className="hero-content">
              <span className="hero-subtitle">COLECÇÃO EXCLUSIVA</span>
              <h1>Descubra a Essência que define você</h1>
              <button className="btn-primary">VER CATÁLOGO →</button>
            </div>
          </header>

          <main className="content">
            <div className="section-header">
              <span className="section-subtitle">CURADORIA EXCLUSIVA</span>
              <h2 className="section-title">Destaques da Semana</h2>
              <div className="title-divider"></div>
            </div>

            <section className="catalog-grid">
              {perfumes.map((item) => (
                <PerfumeCard 
                  key={item.id} 
                  perfume={item} 
                  aoSelecionar={setPerfumeSelecionado} // Passa a função de seleção
                />
              ))}
            </section>
          </main>
        </>
      )}

      <footer className="footer">
        <p>&copy; 2026 Essenza Perfumaria</p>
      </footer>
    </div>
  );
}

export default App;