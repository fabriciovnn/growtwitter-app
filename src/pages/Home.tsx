import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TitleStyled from "../components/TitleStyled";
import MainHomeStyled from "../components/home/MainHomeStyled";
import Tweet from "../components/home/Tweet";
import { listarTweets } from "../services/tweet.service";

function Home() {
  const [listaTweets, setListaTweets] = useState([]);
  const navigate = useNavigate();
  const token = localStorage.getItem("token") ?? "";
  const user = JSON.parse(localStorage.getItem("user") ?? "{}");

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, []);

  useEffect(() => {
    async function buscarTweets() {
      const resposta = await listarTweets({ token, userId: user.id });
      console.log(resposta.dados);

      setListaTweets(resposta.dados);
    }
    buscarTweets();
  }, []);

  return (
    <MainHomeStyled>
      <div>
        <TitleStyled>Home</TitleStyled>
        <div id="fd-content">
          {listaTweets &&
            listaTweets.map((item: any) => (
              <Tweet
                key={item.id}
                content={item.content}
                countLikes={item.totalLikes}
                like={item.like}
                name={item.user.name}
                imgUrl={item.user.imgUrl}
                username={item.user.username}
              />
            ))}
        </div>
      </div>
    </MainHomeStyled>
  );
}

export default Home;
