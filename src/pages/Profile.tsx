import { user } from "../components/home/LeftSideBar";
import HeaderProfileStyled from "../components/profile/HeaderProfileStyled";
import ImageProfileStyled from "../components/profile/ImageProfileStyled";
import InformationProfileStyled from "../components/profile/InformationProfileStyled";

function Profile() {
  return (
    <div>
      <HeaderProfileStyled>
        <div id="ph-back">
          <img src="/assets/light_color/icone_seta.svg" alt="Voltar" />
        </div>

        <div>
          <h1>Perfil de @{user.username}</h1>
          <span>X Tweets</span>
        </div>
      </HeaderProfileStyled>

      <ImageProfileStyled imgUrl={user.imgUrl}>
        <div id="p-img" />
      </ImageProfileStyled>

      <InformationProfileStyled>
        <h1>{user.name}</h1>
        <span>@{user.username}</span>
      </InformationProfileStyled>

      <div>
        <h2>Para os tweets</h2>
      </div>
    </div>
  );
}

export default Profile;
