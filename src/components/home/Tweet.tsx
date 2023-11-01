import { TweetIconAction, TweetImg, TweetStyled } from "../tweet/TweetStyled";

interface TweetProps {
  imgUrl: string | undefined;
  name: string;
  username: string;
  content: string;
  like?: boolean;
  countLikes: number;
}

function Tweet(props: TweetProps) {
  return (
    <TweetStyled>
      <TweetImg imgUrl={props.imgUrl} />
      <div id="content-tweet">
        <div id="header-tweet">
          <span id="tw-user-name">{props.name}</span>
          <span>@{props.username} • 3h</span>
        </div>
        <div id="content-text">
          <p>{props.content}</p>
        </div>
        <div id="content-actions">
          <div>
            <TweetIconAction
              src="/assets/light_color/icone_responder.svg"
              alt="responder"
            />
            <span>0</span>
          </div>
          <div>
            <TweetIconAction
              src={
                props.like
                  ? "/assets/light_color/icone_curtir_selecionado.svg"
                  : "/assets/light_color/icone_curtir.svg"
              }
              alt="curtir"
            />
            <span>{props.countLikes}</span>
          </div>
        </div>
      </div>
    </TweetStyled>
  );
}

export default Tweet;
