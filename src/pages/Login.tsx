import { useNavigate } from "react-router-dom";
import { login } from "../services/auth.service";
import MainStyled from "../components/MainStyled";
import CardStyled from "../components/CardStyled";

function Login() {
  const navigate = useNavigate();

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();

    const dados = {
      email: ev.currentTarget.email.value,
      password: ev.currentTarget.password.value,
    };

    const resposta = await login(dados);

    if (resposta.ok === false) {
      alert(resposta.mensagem);
      return;
    }

    alert(resposta.mensagem);
    localStorage.setItem("token", resposta.dados.token);
    localStorage.setItem("user", JSON.stringify(resposta.dados.user));
    navigate("/home");
  }

  return (
    <MainStyled>
      <CardStyled className="login-card">
        <div id="welcome">
          <h1>Growtwitter</h1>
          <p id="trabalho">Trabalho final do bloco intermediário</p>
          <p>
            O Growtwitter é a plataforma definitiva para todos os apaixonados
            por redes sociais que buscam uma experiência familiar e poderosa,
            semelhante ao Twitter, mas com um toque único. Seja parte desta
            comunidade que valoriza a liberdade de expressão, a conexão com
            pessoas de todo o mundo e a disseminação de ideias.
          </p>
        </div>

        <div id="login-form">
          <div id="card">
            <h2>Entrar no Growtwitter</h2>

            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" name="email" />
              </div>

              <div className="input-group">
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
              </div>

              <div className="input-group">
                <button type="submit">Entrar</button>
              </div>
            </form>
          </div>
        </div>
      </CardStyled>
    </MainStyled>
  );
}

export default Login;
