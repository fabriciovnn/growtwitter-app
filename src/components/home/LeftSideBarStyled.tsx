import styled from "styled-components";

const LeftSideBarStyled = styled.nav`
  width: 100%;
  max-width: 162px;
  padding-top: 16px;
  padding-right: 8px;
  display: flex;
  flex-direction: column;

  #main-left-menu {
    flex: 1 1 0%;

    #logo-container {
      padding-left: 8px;
    }

    #left-side-navigation {
      list-style-type: none;
      margin-top: 8px;

      li > a {
        display: flex;
        align-items: center;

        img {
          padding: 8px;
        }
      }
    }
    #btn-tweetar {
      margin-top: 12px;
      background-color: rgb(29, 155, 240);
      color: rgb(255, 255, 255);
      max-width: 162px;
      width: 100%;
      padding: 8px;
      border: none;
      border-radius: 16px;
      cursor: pointer;
      &:hover {
        background-color: rgb(53, 141, 200);
      }
    }
  }

  #ls-profile {
    display: flex;
    flex-direction: row;

    #ls-profile-name {
      margin-left: -4px;

      h1 {
        font-size: 12px;
        font-weight: bold;
        margin: 0px;
      }

      p {
        color: rgb(130, 130, 130);
        font-size: 12px;
      }
    }
  }

  #ls-profile-actions {
    margin-bottom: 24px;
    margin-top: 12px;
    font-size: 12px;
    margin-left: 4px;
  }
`;

export default LeftSideBarStyled;
