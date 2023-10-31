import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import TitleStyled from "../components/TitleStyled";

function Home() {
  const navigate = useNavigate();
  const token = JSON.parse(localStorage.getItem("token") ?? "false");

  useEffect(() => {
    if (!token) {
      return navigate("/");
    }
  }, []);

  return (
    <>
      <TitleStyled>Home</TitleStyled>
    </>
  );
}

export default Home;
