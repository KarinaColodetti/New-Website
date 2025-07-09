import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => setIsMenuOpen(false);

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
            <Link to="/" onClick={handleLinkClick}>
              Início
            </Link>
          </li>
          <li>
            <Link to="/sobre" onClick={handleLinkClick}>
              Sobre
            </Link>
          </li>
          <li>
            <Link to="/servicos" onClick={handleLinkClick}>
              Serviços
            </Link>
          </li>
          <li>
            <Link to="/contato" onClick={handleLinkClick}>
              Contato
            </Link>
          </li>
          <li>
            <Link to="/blog" onClick={handleLinkClick}>
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
