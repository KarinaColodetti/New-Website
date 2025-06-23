import Header from "../../Header.jsx";
import Footer from "../../Footer.jsx";

function Blogpost1() {
  return (
    <>
      <div className="container_blogpost1">
        <div className="container_blog_post">
          <div className="container_blog_post_img">
            <img
              className="blog_post_img"
              src="/src/assets/bowldust.png"
              alt="dust bowl"
            />
          </div>
          <div className="container_blog_post_content">
            <h2>O que aprendemos com o Dust Bowl</h2>
            <p className="blog_post_1">
              Imagine, depois de passar por uma crise financeira violenta, ter
              que emigrar fugindo de um tufão de poeira sem fim. Pois é, foi
              exatamente isso que milhares de famílias tiveram que fazer nos
              anos 1930. <br />
              <br />
              Os Estados Unidos foram atingidos pelo Dust Bowl, a maior
              catástrofe ambiental da sua história até então — uma onda de
              tempestades de poeira que devastou plantações inteiras, matou
              animais por asfixia, causou doenças respiratórias graves e tornou
              a vida praticamente inviável em várias regiões, forçando milhares
              de famílias a migrar, principalmente rumo à Califórnia. <br />
              <br />
              <img
                className="imagesblog1"
                src="/src/assets/migrant-mother.webp"
                alt="migrant mother"
              />
              O Dust Bowl (ou "Tigela de Poeira") foi o resultado direto de uma
              corrida desenfreada pelo mercado de trigo. Durante a Primeira
              Guerra Mundial, os EUA enriqueceram vendendo produtos e armamentos
              para a Europa. Com a Europa devastada e produzindo pouco, os
              preços do trigo subiram — e os agricultores americanos expandiram
              agressivamente suas plantações, removendo a vegetação nativa que
              protegia o solo.
              <br />
              <br />
              <img
                className="imagesblog1"
                src="/src/assets/wheatproduction.jpg"
                alt="dust bowl"
              />
              No entanto, com o colapso da bolsa em 1929 e o início da Grande
              Depressão, o consumo interno despencou, os preços agrícolas caíram
              vertiginosamente, e para tentar manter os lucros, os fazendeiros
              plantaram ainda mais. Resultado? Superprodução, solos esgotados e
              um desastre ecológico sem precedentes. As tempestades de poeira
              formavam nuvens negras com mais de 3 mil metros de altura e
              velocidades de até 94 km/h, ao ponto de que o meio-dia parecesse
              meia-noite. Carros e celeiros eram soterrados por poeira e
              milhares adoeciam com a chamada dust pneumonia. O cenário se
              agravava com secas prolongadas, infestações de gafanhotos e até
              descargas de eletricidade estática que causavam curtos-circuitos
              em carros e aparelhos eletrônicos. <br />
              <br />
              <img
                className="imagesblog1"
                src="/src/assets/dustcovering.jpg"
                alt="dust bowl"
              />
              O Dust Bowl é uma lição dura sobre o que a ganância e o descuido
              ambiental podem causar. Um clássico da literatura que mostra não
              só esse momento histórico, mas também a resiliência e a força de
              quem sobreviveu a ele é: The Grapes of Wrath (As Vinhas da Ira),
              de John Steinbeck. A obra retrata com sensibilidade e crueza a
              jornada das famílias que, como os Joad, buscaram dignidade em meio
              ao caos.
              <br />
              <br />
              <img
                className="imagesblog1"
                src="/src/assets/thegrapesofwrath.jpg"
                alt="dust bowl"
              />
              Dizem que a história não se repete, mas é cíclica como uma
              espiral. Será que, desta vez, vamos agir de forma diferente diante
              das adversidades ambientais causadas pelos mesmos velhos padrões
              de ganância e exploração? <br />
              <br />
              Falando tanto em poeira, me lembrei da música Dust in the Wind.
              Talvez o que esse episódio nos mostre é justamente isso: frente à
              natureza somos apenas dust in the wind.
              <img
                className="imagesblog1"
                src="/src/assets/peoplewithmasks.png"
                alt="dust bowl"
              />
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blogpost1;
