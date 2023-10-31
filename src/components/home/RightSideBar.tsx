import { Link } from "react-router-dom";
import AsideStyled from "./AsideStyled";

const happeningList = [
  {
    label: "Esportes - Há 45 min",
    title: "Assunto sobre esportes",
  },
  {
    label: "Assunto do Momento em Brasil",
    title: "Assunto do Momento",
  },
  {
    label: "Música - Assunto do Momento",
    title: "Assunto sobre Música",
  },
  {
    label: "Cinema - Assunto do Momento",
    title: "Assunto sobre Filmes e Cinema",
  },
];

function RightSideBar() {
  return (
    <AsideStyled>
      <div id="right-side-card">
        <h1>O que está acontecendo?</h1>
        <ul>
          {happeningList.map((item) => (
            <li>
              <p id="wh-label">{item.label}</p>
              <p id="wh-title">{item.title}</p>
            </li>
          ))}
        </ul>
        <div id="wh-more">
          <Link to="#">Mostrar mais</Link>
        </div>
      </div>
    </AsideStyled>
  );
}

export default RightSideBar;
