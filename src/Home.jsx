import karina13 from "./assets/karina-13.jpg";
import karina2 from "./assets/karina-2.jpg";
import karina4 from "./assets/karina-4.jpg";

function Home() {
  return (
    <main>
      <div className="container">
        <img id="imagem1" src={karina13} alt="professora Karina" />
        <div className="child">
          <h1>Experiência Cultural</h1>
          <p>
            Aprender uma nova língua é abrir janelas para outros mundos. As
            aulas são um convite à imersão em culturas, histórias e expressões
            artísticas — com embasamento em Letras e Relações Internacionais.
            Mais do que ensinar gramática, convido você a pensar, sentir e viver
            o idioma em sua plenitude.
          </p>
        </div>
      </div>

      <div className="container2">
        <div className="child2">
          <h1 id="titulo2">Ensino Personalizado</h1>
          <p id="p2">
            Cada trajetória é única — e o aprendizado também deve ser. Desde
            2013, ofereço aulas sob medida para adultos que buscam mais do que
            fluência: desejam compreender, se expressar e se conectar com
            profundidade. A partir da linguística e das ciências humanas, ensino
            com afeto, reflexão e propósito.
          </p>
        </div>
        <img id="imagem2" src={karina2} alt="professora Karina" />
      </div>

      <div className="container3">
        <img id="imagem3" src={karina4} alt="professora Karina lendo" />
        <div className="child3">
          <h1 id="titulo3">Olhar Decolonial para o Mundo</h1>
          <p id="p3">
            A língua estrangeira não deve apagar quem somos — ao contrário, pode
            iluminar nossa identidade. Minha abordagem decolonial parte da
            riqueza latino-americana e brasileira para construir um aprendizado
            crítico e libertador. Porque aprender um idioma é, também, se
            reconhecer e se reinventar no mundo.
          </p>
        </div>
      </div>
    </main>
  );
}

export default Home;
