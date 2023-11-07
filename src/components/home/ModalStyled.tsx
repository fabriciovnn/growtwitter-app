import styled from "styled-components";

const ModalStyled = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  left: 0px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  display: flex;

  .card {
    min-height: 200px;
    min-width: 450px;
    background-color: white;
    border-radius: 8px;

    .close-icon {
      padding-top: 16px;
      padding-left: 16px;
      cursor: pointer;
    }
  }

  form {
    display: block;

    .form-content {
      display: flex;
      padding: 12px;
      flex-direction: column;

      #content {
        padding: 4px;
        border-top: none;
        border-right: none;
        border-left: none;
        border-image: initial;
        border-bottom: 1px solid rgb(224, 224, 224);
        resize: none;
        outline: none;
        font-size: 14px;
      }

      button {
        width: 70px;
        border-radius: 16px;
        color: white;
        background-color: rgb(29, 155, 240);
        border: 0px;
        padding: 8px;
        margin-top: 8px;
        align-self: flex-end;
        font-size: 10px;
      }
    }
  }
`;

export default ModalStyled;
