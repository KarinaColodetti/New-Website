import Header from "../../Header.jsx";
import Footer from "../../Footer.jsx";
import karina3 from "./src/assets/karina-3.jpg";
import karina6 from "./src/assets/karina-6.jpg";

function Servicos() {
  return (
    <>
      <div className="container">
        <img id="imagem1" src={karina3} alt="professora Karina dando aula" />
        <div className="child_servicos1">
          <h1>Cursos de Idiomas</h1>
          <p>
            Aprenda inglês, espanhol ou francês com aulas personalizadas,
            desenhadas para que você alcance seus objetivos, sejam eles
            profissionais como se preparar para uma vaga de emprego, fins
            acadêmicos como tirar uma certificação ou mesmo pessoais como
            viagens e conhecimento cultural.
          </p>
          <ul className="lista_aulas">
            <h3>O que as aulas incluem:</h3>
            <li>pacotes de uma ou duas aulas semanais*;</li>
            <li>acesso ao espaço de estudos exclusivo na plataforma Notion;</li>
            <li>material personalizado para cada aluno;</li>
            <li>aulas com duração de 60 minutos*;</li>
            <li>preparatório para exames como TOEFL, CAE, DELE, DALF;</li>
            <li>study plan semanal e acompanhamento do seu progresso.</li>
          </ul>
          <p style={{ fontSize: "15px" }}>
            <em>
              *pacotes e duração de aulas podem ser ajustadas conforme
              necessidade do aluno
            </em>
          </p>
        </div>
      </div>
      <div className="container2">
        <img
          id="imagem2"
          src={karina6}
          alt="professora Karina revisando texto"
        />
        <div className="child2">
          <h1>Tradução e Revisão de Textos</h1>
          <p>
            Tradução e revisão de textos acadêmicos são tabelados de acordo com
            o{" "}
            <a className="link_sintra" href="https://sintra.org.br/valores">
              Sindicato Nacional dos Tradutores SINTRA
            </a>
            .
          </p>
          <p>
            O valor pode variar de acordo com a complexidade do texto e a
            urgência da entrega
          </p>
          <p>Entre em contato para mais informações</p>
        </div>
      </div>
    </>
  );
}

export default Servicos;
