// src/components/AdminPanel.jsx
import { useState } from 'react';

const FORM_VAZIO = {
  nome: '',
  marca: 'Marcio Perfumes',
  genero: 'Masculino',
  ml: '',
  preco: '',
  descricao: '',
  imagens: '',
};

const MAX_DESTAQUES = 4;

export default function AdminPanel({ perfumes, aoAdicionar, aoAlternarDestaque, aoSair, aoVoltarSite }) {
  const [form, setForm] = useState(FORM_VAZIO);
  const totalDestaques = perfumes.filter((p) => p.destaque).length;

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((atual) => ({ ...atual, [name]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const imagens = form.imagens
      .split(',')
      .map((url) => url.trim())
      .filter(Boolean);

    aoAdicionar({
      nome: form.nome,
      marca: form.marca,
      genero: form.genero,
      ml: form.ml,
      preco: form.preco,
      descricao: form.descricao,
      img: imagens.length ? imagens : ['https://placehold.co/500x500?text=Sem+Imagem'],
    });

    setForm(FORM_VAZIO);
  }

  return (
    <div className="admin-container">
      <div className="admin-header">
        <div>
          <span className="section-subtitle">PAINEL ADMINISTRATIVO</span>
          <h2 className="section-title">Gerenciar Catálogo</h2>
        </div>
        <div className="admin-header-acoes">
          <button className="btn-voltar" onClick={aoVoltarSite}>← Ver Site</button>
          <button className="btn-sair" onClick={aoSair}>Sair</button>
        </div>
      </div>

      <div className="admin-grid">
        <section className="admin-card">
          <h3>Adicionar Perfume</h3>
          <form className="admin-form" onSubmit={handleSubmit}>
            <div className="admin-campo">
              <label htmlFor="admin-nome">Nome</label>
              <input id="admin-nome" name="nome" value={form.nome} onChange={handleChange} required />
            </div>

            <div className="admin-campo">
              <label htmlFor="admin-marca">Marca</label>
              <input id="admin-marca" name="marca" value={form.marca} onChange={handleChange} required />
            </div>

            <div className="admin-linha">
              <div className="admin-campo">
                <label htmlFor="admin-genero">Gênero</label>
                <select id="admin-genero" name="genero" value={form.genero} onChange={handleChange}>
                  <option value="Masculino">Masculino</option>
                  <option value="Feminino">Feminino</option>
                  <option value="Unissex">Unissex</option>
                </select>
              </div>

              <div className="admin-campo">
                <label htmlFor="admin-ml">Volume</label>
                <input
                  id="admin-ml"
                  name="ml"
                  value={form.ml}
                  onChange={handleChange}
                  placeholder="100ml"
                  required
                />
              </div>
            </div>

            <div className="admin-campo">
              <label htmlFor="admin-preco">Preço (R$)</label>
              <input
                id="admin-preco"
                name="preco"
                value={form.preco}
                onChange={handleChange}
                placeholder="399,90"
                required
              />
            </div>

            <div className="admin-campo">
              <label htmlFor="admin-descricao">Descrição</label>
              <textarea
                id="admin-descricao"
                name="descricao"
                value={form.descricao}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>

            <div className="admin-campo">
              <label htmlFor="admin-imagens">URLs das imagens (separadas por vírgula)</label>
              <input
                id="admin-imagens"
                name="imagens"
                value={form.imagens}
                onChange={handleChange}
                placeholder="https://exemplo.com/foto1.jpg, https://exemplo.com/foto2.jpg"
                required
              />
            </div>

            <button type="submit" className="btn-primary admin-btn-submit">
              ADICIONAR PERFUME
            </button>
          </form>
        </section>

        <section className="admin-card">
          <h3>Destaques da Semana</h3>
          <p className="admin-descricao-lista">
            Selecione até {MAX_DESTAQUES} perfumes para aparecer na vitrine da página inicial.
            {' '}({totalDestaques}/{MAX_DESTAQUES} selecionados)
          </p>

          <ul className="admin-lista-perfumes">
            {perfumes.map((perfume) => {
              const desabilitado = !perfume.destaque && totalDestaques >= MAX_DESTAQUES;
              return (
                <li key={perfume.id} className="admin-item-perfume">
                  <img src={perfume.img[0]} alt={perfume.nome} />
                  <div className="admin-item-info">
                    <p className="name">{perfume.nome}</p>
                    <p className="type">{perfume.marca}</p>
                  </div>
                  <label className={`admin-switch${desabilitado ? ' desabilitado' : ''}`}>
                    <input
                      type="checkbox"
                      checked={perfume.destaque}
                      disabled={desabilitado}
                      onChange={() => aoAlternarDestaque(perfume.id)}
                    />
                    <span className="admin-switch-slider"></span>
                  </label>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </div>
  );
}
