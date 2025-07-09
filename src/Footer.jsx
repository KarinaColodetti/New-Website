import { useNavigate, Link } from "react-router-dom";
import logo1 from "./assets/logo.svg";

function Footer() {
  const navigate = useNavigate();

  // Função para rolar ao topo ao clicar em um link do menu
  const handleMenuLinkClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="footer">
      <div className="footer_main">
        <div className="footer_content1">
          <a href="/">
            <img
              id="logo"
              src={logo1}
              alt="logo Karina Rodrigues Idiomas"
              onClick={() => navigate("/")}
            />
          </a>
          <div className="footer_social_media">
            <a
              href="https://www.instagram.com/karinarodrigues.idiomas/"
              className="footer_link"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com/Prof.KarinaRodrigues"
              className="footer_link"
            >
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=5531995740810"
              className="footer_link"
            >
              <i className="fa-brands fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Coluna 2: páginas */}
        <div className="footer_contents">
          <h3>Menu</h3>
          <ul className="footer_menu">
            <li>
              <Link to="/" onClick={handleMenuLinkClick}>
                Início
              </Link>
            </li>
            <li>
              <Link to="/sobre" onClick={handleMenuLinkClick}>
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/servicos" onClick={handleMenuLinkClick}>
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/contato" onClick={handleMenuLinkClick}>
                Contato
              </Link>
            </li>
            <li>
              <Link to="/blog" onClick={handleMenuLinkClick}>
                Blog
              </Link>
            </li>
          </ul>
        </div>

        {/* Coluna 3: newsletter */}
        <div className="footer_contents">
          <h3 className="h3_footer">Newsletter</h3>
          <p className="p_footer">Receba novos artigos do blog:</p>
          <div className="input_group">
            <input type="email" placeholder="Seu e-mail" />
            <button>
              <i className="fa-regular fa-envelope"></i>
            </button>
          </div>
        </div>
      </div>

      <div id="footer_copyright">&#169; 2025 Todos os direitos reservados</div>
    </footer>
  );
}

export default Footer;
