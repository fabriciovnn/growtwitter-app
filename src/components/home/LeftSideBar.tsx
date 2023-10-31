import { Link, NavLink, useNavigate } from "react-router-dom";
import LeftSideBarStyled from "./LeftSideBarStyled";
import ProfileImgStyled from "./ProfileImgStyled";
import imgExplorer from "/assets/light_color/icone_explorar.svg";
import imgExplorerActive from "/assets/light_color/icone_explorar_selecionado.svg";
import imgHome from "/assets/light_color/icone_pagina inicial.svg";
import imgHomeActive from "/assets/light_color/icone_pagina inicial_selecionado.svg";
import imgProfile from "/assets/light_color/icone_perfil.svg";
import imgProfileActive from "/assets/light_color/icone_perfil_selecionado.svg";
import { useEffect } from "react";

const menuItens = [
  {
    link: "/home",
    title: "Página Inicial",
    img: imgHome,
    imgActive: imgHomeActive,
  },
  {
    link: "/explore",
    title: "Explorar",
    img: imgExplorer,
    imgActive: imgExplorerActive,
  },
  {
    link: "/profile",
    title: "Perfil",
    img: imgProfile,
    imgActive: imgProfileActive,
  },
];

export const user = {
  id: "85fe118e-6970-4dca-8061-dca33e4b7d6d",
  name: "Xablau da Silva",
  username: "xablau",
  password: "6660",
  createdAt: "2023-10-25T00:35:37.730Z",
  updatedAt: "2023-10-25T00:35:37.730Z",
  imgUrl:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrvvuxQ0vx08DbMKCUs3tSeR72IIaUp7E7bysBcL9c8vc91EtK7_zKPM0AsDJhROIVuNs&usqp=CAU",
};

function LeftSideBar() {
  const token = JSON.parse(localStorage.getItem("token") ?? "");
  // const user = JSON.parse(localStorage.getItem("user") ?? "")
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate("/");
      return;
    }
  }, []);

  return (
    <LeftSideBarStyled>
      <div id="main-left-menu">
        <div id="logo-container">
          <img src="/assets/light_color/logo_growtweet.svg" alt="" />
        </div>
        <ul id="left-side-navigation">
          {menuItens.map((item) => (
            <li>
              <NavLink
                to={item.link}
                className={(props) => (props.isActive ? "active" : "")}
                children={({ isActive }) => (
                  <>
                    {isActive ? (
                      <img src={item.imgActive} alt={item.title} />
                    ) : (
                      <img src={item.img} alt={item.title} />
                    )}
                    <span>{item.title}</span>
                  </>
                )}
              ></NavLink>
            </li>
          ))}
        </ul>
        <button id="btn-tweetar" onClick={() => alert("teste")}>
          Tweetar
        </button>
      </div>
      <div id="ls-profile">
        <ProfileImgStyled imgUrl={user.imgUrl} />
        <div id="ls-profile-name">
          <h1>{user.name}</h1>
          <p>@{user.username}</p>
        </div>
      </div>
      <div id="ls-profile-actions">
        <Link to="/">Sair</Link>
      </div>
    </LeftSideBarStyled>
  );
}

export default LeftSideBar;
