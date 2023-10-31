import styled from "styled-components";

const HeaderProfileStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;
  margin-left: 8px;
  margin-bottom: 8px;

  #ph-back {
    margin-right: 24px;
  }

  div {
    display: block;

    h1 {
      font-size: 14px;
      font-weight: bold;
    }

    span {
      font-size: 10px;
      color: rgb(130, 130, 130);
    }
  }
`;

export default HeaderProfileStyled;
