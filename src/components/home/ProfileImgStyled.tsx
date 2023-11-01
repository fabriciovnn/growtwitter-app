import styled from "styled-components";
import imgDefault from "../../../public/assets/default_profile.png";

interface ProfileImgStyledProps {
  imgUrl: string | null;
}

const ProfileImgStyled = styled.div<ProfileImgStyledProps>`
  margin-right: 8px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-image: ${(props) =>
    props.imgUrl ? `url(${props.imgUrl})` : `url(${imgDefault})`};
  background-position: center center;
  background-size: cover;
`;

export default ProfileImgStyled;
