import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
      <h1>Home</h1>
    </>
  );
}

export default Home;
