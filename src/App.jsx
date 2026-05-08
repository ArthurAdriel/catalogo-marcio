import PerfumeCard from "./components/PerfumeCard";
import "./App.css";

const perfumesFake = [
  { id: 1, nome: "Bleu Intense", marca: "Essenza", genero: "Masculino", ml: "100ml", preco: "459,90", img: "https://via.placeholder.com/200x250" },
  { id: 2, nome: "Lumière", marca: "Essenza", genero: "Feminino", ml: "100ml", preco: "399,90", img: "https://via.placeholder.com/200x250" },
  // Adicione mais aqui...
];

function App() {
  return (
    <div className="app-container">
      {/* Banner Principal (Hero) */}
      <section className="hero">
        <div className="hero-content">
          <span>DESCUBRA SUA ESSÊNCIA</span>
          <h1>Os melhores perfumes para cada momento</h1>
          <button className="btn-primary">VER CATÁLOGO →</button>
        </div>
      </section>

      {/* Grid de Destaques */}
      <main className="content">
        <div className="section-title">
          <h2>Destaques</h2>
        </div>
        <div className="catalog-grid">
          {perfumesFake.map(p => (
            <PerfumeCard key={p.id} perfume={p} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;