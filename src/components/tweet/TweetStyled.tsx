import styled from "styled-components";
import imgDefault from "/assets/default_profile.png";

interface TweetImgProps {
  imgUrl: string | undefined;
}

export const TweetStyled = styled.section`
  display: flex;
  flex-direction: row;
  border-bottom: 1px solid rgb(224, 224, 224);
  padding: 12px;
  font-size: 0.8rem;

  #content-tweet {
    flex: 1 1 0%;

    #header-tweet {
      span {
        margin-right: 8px;
      }

      #tw-user-name {
        font-weight: bold;
      }
    }

    #content-text {
      color: rgb(79, 79, 79);
    }

    #content-actions {
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 8px;

      div {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-right: 28px;
      }
    }
  }
`;

export const TweetImg = styled.figure<TweetImgProps>`
  margin-right: 8px;
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-image: url(${(props) => props.imgUrl}), url(${imgDefault});
  background-position: center center;
  background-size: cover;
`;

export const TweetIconAction = styled.img`
  height: 12px;
  width: 12px;
  margin-right: 4px;
`;
