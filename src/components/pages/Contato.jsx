import Header from "../../Header.jsx";
import Footer from "../../Footer.jsx";
import karina11 from "../../assets/karina-11.jpg";

function Contato() {
  return (
    <>
      <div className="container_contato">
        <h1>Contato</h1>
        <form action="#" method="get">
          <label>
            Nome <br />
            <input type="text" required />
          </label>
          <br />
          <label>
            E-mail <br />
            <input type="email" required />
          </label>
          <br />
          <label>
            Mensagem <br />
            <textarea
              name="text"
              required
              style={{
                width: "250px",
                height: "100px",
                marginTop: "10px",
                outline: "0",
                borderColor: "burlywood",
              }}
            />
          </label>
          <br />
          <button>Enviar</button>
        </form>
        <img
          id="imagem_contato"
          src={karina11}
          alt="professora Karina lendo em uma cafeteria"
        />
      </div>
    </>
  );
}

export default Contato;
