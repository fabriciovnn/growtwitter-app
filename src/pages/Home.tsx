import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TitleStyled from "../components/TitleStyled";
import MainHomeStyled from "../components/home/MainHomeStyled";
import Tweet from "../components/home/Tweet";

const mockTweets = [
  {
    id: "id123",
    content: "conteudo1",
    totalLikes: 1,
    like: true,
    user: {
      name: "joao",
      username: "@joao2",
      imgUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvvuxQ0vx08DbMKCUs3tSeR72IIaUp7E7bysBcL9c8vc91EtK7_zKPM0AsDJhROIVuNs&usqp=CAU",
    },
  },
  {
    id: "id1234",
    content: "conteudo2",
    totalLikes: 2,
    like: false,
    user: {
      name: "joao da silva",
      username: "@joao3",
    },
  },
];

function Home() {
  const navigate = useNavigate();
  const token = localStorage.getItem("token") ?? "";

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, []);

  return (
    <MainHomeStyled>
      <div>
        <TitleStyled>Home</TitleStyled>
        <div id="fd-content">
          {mockTweets.map((item) => (
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
