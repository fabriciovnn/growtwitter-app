import { useState, useEffect } from "react";
import HeaderProfileStyled from "../components/profile/HeaderProfileStyled";
import ImageProfileStyled from "../components/profile/ImageProfileStyled";
import InformationProfileStyled from "../components/profile/InformationProfileStyled";
import { UsuarioLogado } from "../components/home/LeftSideBar";

function Profile() {
  const [usuarioLogado, setUsuarioLogado] = useState<UsuarioLogado | null>(
    null
  );

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user") || "null");

    if (!user) {
      return;
    }

    setUsuarioLogado({
      name: user.name,
      username: user.username,
      imgUrl: user.imgUrl,
    });
  }, []);

  if (!usuarioLogado) {
    return null;
  }

  return (
    <div>
      <HeaderProfileStyled>
        <div id="ph-back">
          <img src="/assets/light_color/icone_seta.svg" alt="Voltar" />
        </div>

        <div>
          <h1>Perfil de @{usuarioLogado!.username}</h1>
          <span>X Tweets</span>
        </div>
      </HeaderProfileStyled>

      <ImageProfileStyled imgUrl={usuarioLogado!.imgUrl}>
        <div id="p-img" />
      </ImageProfileStyled>

      <InformationProfileStyled>
        <h1>{usuarioLogado!.name}</h1>
        <span>@{usuarioLogado!.username}</span>
      </InformationProfileStyled>

      <div>
        <h2>Para os tweets</h2>
      </div>
    </div>
  );
}

export default Profile;
