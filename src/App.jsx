import { useState } from 'react';
import Navbar from "./components/Navbar";
import PerfumeCard from "./components/PerfumeCard";
import "./App.css";

function App() {
  // Simulando os dados que futuramente virão do seu MySQL
  const [perfumes] = useState([
    { 
      id: 1, 
      nome: "Bleu Intense", 
      marca: "Essenza", 
      genero: "Masculino", 
      ml: "100ml", 
      preco: "459,90", 
      img: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500" 
    },
    { 
      id: 2, 
      nome: "Lumière", 
      marca: "Essenza", 
      genero: "Feminino", 
      ml: "100ml", 
      preco: "399,90", 
      img: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=500" 
    },
    { 
      id: 3, 
      nome: "Royal Oud", 
      marca: "Essenza", 
      genero: "Unissex", 
      ml: "75ml", 
      preco: "520,00", 
      img: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500" 
    },
    { 
      id: 4, 
      nome: "Aqua Marine", 
      marca: "Essenza", 
      genero: "Masculino", 
      ml: "100ml", 
      preco: "350,00", 
      img: "https://images.unsplash.com/photo-1557170334-a7c3a4f22038?w=500" 
    }
  ]);

  return (
    <div className="app-container">
      {/* 1. Barra de Navegação */}
      <Navbar />

      {/* 2. Banner Principal (Hero Section) */}
      <header className="hero">
        <div className="hero-content">
          <span className="hero-subtitle">COLECÇÃO EXCLUSIVA</span>
          <h1>Descubra a Essência que define você</h1>
          <p>Explore fragrâncias importadas e artesanais com elegância e sofisticação.</p>
          <button className="btn-primary">VER CATÁLOGO →</button>
        </div>
      </header>

      {/* 3. Área do Catálogo */}
      <main className="content">
        <div className="section-header">
          <h2>Destaques</h2>
          <div className="divider"></div>
        </div>

        <section className="catalog-grid">
          {perfumes.map((item) => (
            <PerfumeCard key={item.id} perfume={item} />
          ))}
        </section>
      </main>
    </div>
  );
}

export default App;