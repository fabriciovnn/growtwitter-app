import styled from "styled-components";

const AsideStyled = styled.aside`
  width: 100%;
  max-width: 300px;
  padding: 8px;

  #right-side-card {
    margin-top: 24px;
    margin-left: 16px;
    padding: 8px 12px;
    border-radius: 10px;
    background: rgb(233, 233, 233);

    h1 {
      font-size: 14px;
      font-weight: bold;
    }

    ul {
      list-style-type: none;
      margin-top: 8px;

      li {
        padding: 8px 0;

        #wh-label {
          font-size: 10px;
          color: rgb(130, 130, 130);
        }

        #wh-title {
          font-size: 12px;
          font-weight: bold;
        }
      }
    }

    #wh-more > a {
      font-size: 10px;
      color: rgb(29, 155, 240);
      margin-top: 12px;
    }
  }
`;

export default AsideStyled;
