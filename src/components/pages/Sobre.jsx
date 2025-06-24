import Header from "../../Header.jsx";
import Footer from "../../Footer.jsx";
import karina1 from "./src/assets/karina-1.jpg";
import karina4 from "./src/assets/karina-4.jpg";

function Sobre() {
  return (
    <>
      <div className="container">
        <img id="imagem_sobre" src={karina1} alt="professora Karina" />
        <div className="child">
          <h1>Sobre mim</h1>
          <p>
            Com formação em licenciatura Dupla em Letra português-francês(UFMG)
            e Relações Internacionais(PUC-MG), construi minha trajetória no
            ensino de idiomas com foco na dimensão cultural, buscando sempre uma
            reflexão profunda entre língua e cultura.
            <br />
            <br />
            Além disso, o curso está em constante atualização, tanto em
            metodologias de ensino quanto em temas globais e culturais que
            enriquecem o aprendizado. Acredito que ensinar idiomas vai muito
            além da gramática: é também promover autonomia, autoconhecimento e
            conexão com o mundo.
          </p>
        </div>
      </div>

      <div className="container2">
        <div className="child2">
          <h1>Minha trajetória</h1>
          <p>
            Durante minha formação busquei sempre me conectar com o mundo não
            somente pelos livros mas também por meio de experiências reais.
            Realizei estudos linguísticos e culturais em Salamanca, Espanha,
            Cidade do México, México e Buenos Aires, Argentina.
            <br />
            <br />
            Em 2021, cursei pós-graduação em Psicologia Analítica que me trouxe
            a sensibilidade para um trabalho mais humano e de real sentido para
            os alunos.
            <br />
            <br />
            Em 2024, cursei pós-graduação em Relações Internacionais para
            docentes pela universidade UNILA, onde pude desenvolver meu artigo
            sobre ensino plurilíngue e seus reflexos na identidade
            latino-americana.
            <br />
            <br />
            Possuo certificações DELE (Diploma de Espanhol como Língua
            Estrangeira) nível C2 e CAE (Cambridge Advanced Exam) C1.
            <br />
            <br />
            Atualmente, estou concluindo curso de especialização no ensino de
            inglês pela LongLife English e perseguindo certificação CAE C2.
          </p>
        </div>
        <img id="imagem_sobre" src={karina4} alt="professora Karina" />
      </div>
    </>
  );
}

export default Sobre;
