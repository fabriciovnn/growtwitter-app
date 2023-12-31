import TitleStyled from "../components/TitleStyled";
import ContentExplorestyled from "../components/explore/ContentExploreStyled";

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
  {
    label: "Entretenimento - Assunto do Momento",
    title: "Assunto sobre Entretenimento",
  },
  {
    label: "Assunto do Momento em Porto Alegre",
    title: "Assunto do Momento em Porto Alegre",
  },
  {
    label: "Daphne - Principal Assunto do Momento",
    title: "Assunto sobre a Daphne",
  },
];

function Explore() {
  return (
    <div>
      <TitleStyled>Explorar</TitleStyled>
      <ContentExplorestyled>
        <ul>
          {happeningList.map((item) => (
            <li>
              <p id="wh-label">{item.label}</p>
              <p id="wh-title">{item.title}</p>
            </li>
          ))}
        </ul>
      </ContentExplorestyled>
    </div>
  );
}

export default Explore;
