import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header.jsx";
import Home from "./Home.jsx";
import Footer from "./Footer.jsx";
import Servicos from "./components/pages/Servicos.jsx";
import Sobre from "./components/pages/Sobre.jsx";
import Contato from "./components/pages/Contato.jsx";
import Blog from "./components/pages/Blog.jsx";
import Blogpost1 from "./components/pages/Blogpost1.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<Servicos />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/post1" element={<Blogpost1 />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
