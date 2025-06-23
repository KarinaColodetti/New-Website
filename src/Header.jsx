import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="container_header">
      <div className="info_header">
        <button className="mobile_menu_icon" onClick={toggleMenu}>
          {isMenuOpen ? "✕" : "☰"}
        </button>
      </div>
      <nav className={`menu ${isMenuOpen ? "active" : ""}`}>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/sobre">Sobre</Link>
          </li>
          <li>
            <Link to="/servicos">Serviços</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
