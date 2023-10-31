import styled from "styled-components";
import imgDefault from "/assets/default_profile.png";

interface ImageProfileStyledProps {
  imgUrl: string;
}

const ImageProfileStyled = styled.div<ImageProfileStyledProps>`
  height: 132px;
  width: 100%;
  background-color: white;
  position: relative;
  overflow: visible;
  margin-bottom: 48px;

  #p-img {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    border: 6px solid rgb(51, 51, 51);
    position: absolute;
    bottom: -45px;
    left: 12px;
    background-image: ${(props) =>
      props.imgUrl ? `url(${props.imgUrl})` : `url(${imgDefault})`};
    background-position: center center;
    background-size: cover;
  }
`;

export default ImageProfileStyled;
