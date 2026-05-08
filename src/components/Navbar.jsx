// src/components/Navbar.jsx
export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        Marcio Perfumes
      </div>
      <ul className="nav-links">
        <li>Início</li>
        <li>Masculinos</li>
        <li>Femininos</li>
        <li>Lançamentos</li>
      </ul>
      <div className="nav-icons">
        <span>🔍</span> <span>👤</span>
      </div>
    </nav>
  );
}