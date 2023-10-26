import styled from "styled-components";

const CardStyled = styled.div`
  width: 60%;
  display: flex;
  min-height: 300px;
  border-radius: 8px;
  align-items: stretch;
  background-color: white;

  #welcome {
    padding: 12px 24px;
    width: 54.9%;
    background-color: rgb(29, 155, 240);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;

    h1 {
      color: white;
    }

    p {
      color: rgb(238, 238, 238);
    }

    #trabalho {
      margin: 12px 0;
      font-size: 12px;
    }
  }

  #login-form {
    padding: 8px;
    flex: 1 1 0%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    #card {
      padding: 24px 16px;
      min-width: 70%;
      border-radius: 12px;

      h2 {
        margin-bottom: 12px;
        text-align: center;
      }

      form {
        display: flex;
        flex-direction: column;
        justify-content: center;

        .input-group {
          width: 100%;
          position: relative;

          label {
            color: rgb(136, 136, 136);
            font-size: 14px;
            margin-bottom: 4px;
          }

          input {
            width: 100%;
            padding: 8px 4px;
            margin-bottom: 8px;
            outline: none;
            border-radius: 8px;
            border: 1px solid rgb(221, 221, 221);
          }

          button {
            margin-top: 8px;
            width: 100%;
            border: none;
            border-radius: 8px;
            background-color: rgb(29, 155, 240);
            color: rgb(250, 250, 250);
            padding: 8px 4px;
          }
        }
      }
    }
  }
`;

export default CardStyled;
