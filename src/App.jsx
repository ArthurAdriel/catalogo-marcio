// src/App.jsx
import { useState } from 'react';
import Navbar from "./components/Navbar";
import PerfumeCard from "./components/PerfumeCard";
import DetalhePerfume from "./components/DetalhePerfume"; // Novo import
import AdminPanel from "./components/AdminPanel";
import "./App.css";

const MAX_DESTAQUES = 4;

function App() {
  // Estado para guardar qual perfume o usuário clicou
  const [perfumeSelecionado, setPerfumeSelecionado] = useState(null);

  // Estado da sessão de administrador
  const [admin, setAdmin] = useState(false);
  const [mostrarAdmin, setMostrarAdmin] = useState(false);

  function irParaInicio() {
    setPerfumeSelecionado(null);
    setMostrarAdmin(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function sairAdmin() {
    setAdmin(false);
    setMostrarAdmin(false);
  }

  function irParaCatalogo() {
    const catalogo = document.getElementById('catalogo');
    if (!catalogo) return;
    const navbar = document.querySelector('.navbar');
    const offset = navbar ? navbar.offsetHeight : 0;
    const top = catalogo.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
  }

  // Estado para guardar os ids dos perfumes curtidos
  const [favoritosIds, setFavoritosIds] = useState([]);

  // Estado da busca por nome no catálogo completo
  const [busca, setBusca] = useState('');

  function alternarFavorito(perfume) {
    setFavoritosIds((atual) =>
      atual.includes(perfume.id)
        ? atual.filter((id) => id !== perfume.id)
        : [...atual, perfume.id]
    );
  }

  // Banco de dados simulado com arrays de imagens e descrições
  const [perfumes, setPerfumes] = useState([
    {
      id: 1,
      nome: "Bleu Intense",
      marca: "Marcio Perfumes",
      destaque: true,
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
      marca: "Marcio Perfumes",
      destaque: true,
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
      marca: "Marcio Perfumes",
      destaque: true,
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
      marca: "Marcio Perfumes",
      destaque: true,
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
      marca: "Marcio Perfumes",
      destaque: false,
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

  function adicionarPerfume(dados) {
    setPerfumes((atual) => {
      const novoId = atual.length ? Math.max(...atual.map((p) => p.id)) + 1 : 1;
      const totalDestaques = atual.filter((p) => p.destaque).length;
      return [...atual, { id: novoId, destaque: totalDestaques < MAX_DESTAQUES, ...dados }];
    });
  }

  function alternarDestaque(id) {
    setPerfumes((atual) => {
      const alvo = atual.find((p) => p.id === id);
      if (!alvo) return atual;

      if (!alvo.destaque) {
        const totalDestaques = atual.filter((p) => p.destaque).length;
        if (totalDestaques >= MAX_DESTAQUES) return atual;
      }

      return atual.map((p) => (p.id === id ? { ...p, destaque: !p.destaque } : p));
    });
  }

  const favoritos = perfumes.filter((item) => favoritosIds.includes(item.id));
  const destaques = perfumes.filter((item) => item.destaque);
  const perfumesFiltrados = perfumes.filter((item) =>
    item.nome.toLowerCase().includes(busca.trim().toLowerCase())
  );

  return (
    <div className="app-container">
      <Navbar
        favoritos={favoritos}
        aoSelecionarFavorito={setPerfumeSelecionado}
        aoIrParaInicio={irParaInicio}
        admin={admin}
        emPainelAdmin={mostrarAdmin}
        aoAbrirAdmin={() => setMostrarAdmin(true)}
        aoLogar={() => {
          setAdmin(true);
          setMostrarAdmin(true);
        }}
      />

      {/* Condicional Baseada no Estado (Renderização Condicional) */}
      {mostrarAdmin ? (
        <AdminPanel
          perfumes={perfumes}
          aoAdicionar={adicionarPerfume}
          aoAlternarDestaque={alternarDestaque}
          aoSair={sairAdmin}
          aoVoltarSite={() => setMostrarAdmin(false)}
        />
      ) : perfumeSelecionado ? (
        // Se houver um perfume selecionado, mostra a tela de detalhes
        <DetalhePerfume
          perfume={perfumeSelecionado}
          aoVoltar={irParaInicio}
        />
      ) : (
        // Se NÃO houver perfume selecionado (null), mostra a página inicial normal
        <>
          <header className="hero">
            <div className="hero-content">
              <span className="hero-subtitle">COLECÇÃO EXCLUSIVA</span>
              <h1>Descubra a Essência que define você</h1>
              <button className="btn-primary" onClick={irParaCatalogo}>VER CATÁLOGO →</button>
            </div>
          </header>

          <main className="content" id="catalogo">
            <div className="section-header">
              <span className="section-subtitle">CURADORIA EXCLUSIVA</span>
              <h2 className="section-title">Destaques da Semana</h2>
              <div className="title-divider"></div>
            </div>

            {destaques.length === 0 ? (
              <p className="catalogo-vazio">Nenhum perfume em destaque no momento.</p>
            ) : (
              <section className="catalog-grid">
                {destaques.map((item) => (
                  <PerfumeCard
                    key={item.id}
                    perfume={item}
                    aoSelecionar={setPerfumeSelecionado} // Passa a função de seleção
                    favorito={favoritosIds.includes(item.id)}
                    aoAlternarFavorito={alternarFavorito}
                  />
                ))}
              </section>
            )}

            <div className="section-header">
              <span className="section-subtitle">CATÁLOGO COMPLETO</span>
              <h2 className="section-title">Todos os Perfumes</h2>
              <div className="title-divider"></div>
            </div>

            <div className="busca-container">
              <input
                type="text"
                className="busca-input"
                placeholder="Pesquisar perfume pelo nome..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
              />
            </div>

            {perfumesFiltrados.length === 0 ? (
              <p className="catalogo-vazio">Nenhum perfume encontrado para "{busca}".</p>
            ) : (
              <section className="catalog-grid">
                {perfumesFiltrados.map((item) => (
                  <PerfumeCard
                    key={item.id}
                    perfume={item}
                    aoSelecionar={setPerfumeSelecionado}
                    favorito={favoritosIds.includes(item.id)}
                    aoAlternarFavorito={alternarFavorito}
                  />
                ))}
              </section>
            )}
          </main>
        </>
      )}

      <footer className="footer">
        <p>&copy; 2026 Marcio Perfumes</p>
      </footer>
    </div>
  );
}

export default App;
