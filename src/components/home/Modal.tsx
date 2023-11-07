import { cadastrarTweets, listarTweets } from "../../services/tweet.service";
import ModalStyled from "./ModalStyled";

interface ModalProps {
  handleClose: () => void;
}

function Modal(props: ModalProps) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  async function handleSubmit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const content = ev.currentTarget.content.value;

    if (!content) {
      alert("Insira um conteúdo.");
      return;
    }

    const resposta = await cadastrarTweets({ content, token: token as string });
    alert(resposta.mensagem);
    props.handleClose();
    await listarTweets({ token: token as string, userId: user.id });
  }

  return (
    <ModalStyled>
      <div className="card">
        <div onClick={props.handleClose} className="close-icon">
          <img src="/assets/light_color/X.svg" alt="close icon" />
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-content">
            <textarea
              name="content"
              id="content"
              cols={30}
              rows={10}
            ></textarea>
            <button type="submit">Tweetar</button>
          </div>
        </form>
      </div>
    </ModalStyled>
  );
}

export default Modal;
