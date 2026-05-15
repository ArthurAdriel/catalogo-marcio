// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-text">MARCIO</span>
          <span className="logo-subtext">PERFUMES</span>
        </div>
        
        <ul className="nav-links">
          <li className="active">Início</li>
          <li>Masculinos</li>
          <li>Femininos</li>
          <li>Unissex</li>
          <li>Lançamentos</li>
        </ul>

        <div className="nav-icons">
          <button className="icon-btn">🔍</button>
          <button className="icon-btn">👤</button>
          <button className="icon-btn">🛒 <span className="cart-count">0</span></button>
        </div>
      </div>
    </nav>
  );
}