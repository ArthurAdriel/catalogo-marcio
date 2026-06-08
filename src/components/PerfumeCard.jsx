export default function PerfumeCard({ perfume, aoSelecionar }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={perfume.img[0]} alt={perfume.nome} /> {/* Pegamos a primeira foto */}
        <button className="wishlist-btn">♡</button>
      </div>
      <div className="card-info">
        <p className="brand">{perfume.marca}</p>
        <h3 className="name">{perfume.nome}</h3>
        <p className="type">{perfume.genero} • {perfume.ml}</p>
        <p className="price">R$ {perfume.preco}</p>
        {/* Adicionamos o evento de clique aqui */}
        <button className="btn-details" onClick={() => aoSelecionar(perfume)}>
          Ver Detalhes
        </button>
      </div>
    </div>
  );
}