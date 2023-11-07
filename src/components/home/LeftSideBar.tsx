import { Link, NavLink, useNavigate } from "react-router-dom";
import LeftSideBarStyled from "./LeftSideBarStyled";
import ProfileImgStyled from "./ProfileImgStyled";
import imgExplorer from "/assets/light_color/icone_explorar.svg";
import imgExplorerActive from "/assets/light_color/icone_explorar_selecionado.svg";
import imgHome from "/assets/light_color/icone_pagina inicial.svg";
import imgHomeActive from "/assets/light_color/icone_pagina inicial_selecionado.svg";
import imgProfile from "/assets/light_color/icone_perfil.svg";
import imgProfileActive from "/assets/light_color/icone_perfil_selecionado.svg";
import { useEffect, useState } from "react";
import Modal from "./Modal";

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

export interface UsuarioLogado {
  name: string;
  username: string;
  imgUrl: string;
}

function LeftSideBar() {
  const [open, setOpen] = useState<boolean>(false);
  const [usuarioLogado, setUsuarioLogado] = useState<UsuarioLogado | null>(
    null
  );
  // const user = JSON.parse(localStorage.getItem("user") ?? "")
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");
    const token = localStorage.getItem("token") ?? "";
    if (!token || !user) {
      navigate("/");
      return;
    }

    setUsuarioLogado({
      imgUrl: user.imgUrl,
      name: user.name,
      username: user.username,
    });
  }, []);

  function logout() {
    localStorage.clear();
  }

  if (!usuarioLogado) {
    return null;
  }

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
        <button id="btn-tweetar" onClick={() => setOpen(true)}>
          Tweetar
        </button>
      </div>
      <div id="ls-profile">
        <ProfileImgStyled imgUrl={usuarioLogado.imgUrl} />
        <div id="ls-profile-name">
          <h1>{usuarioLogado.name}</h1>
          <p>@{usuarioLogado.username}</p>
        </div>
      </div>
      <div id="ls-profile-actions">
        <Link onClick={logout} to="/">
          Sair
        </Link>
      </div>
      {open && <Modal handleClose={() => setOpen(false)} />}
    </LeftSideBarStyled>
  );
}

export default LeftSideBar;
