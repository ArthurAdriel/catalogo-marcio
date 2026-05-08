export default function PerfumeCard({ perfume }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src={perfume.img} alt={perfume.nome} />
        <button className="wishlist-btn">♡</button>
      </div>
      <div className="card-info">
        <p className="brand">{perfume.marca}</p>
        <h3 className="name">{perfume.nome}</h3>
        <p className="type">{perfume.genero} • {perfume.ml}</p>
        <p className="price">R$ {perfume.preco}</p>
      </div>
    </div>
  );
}