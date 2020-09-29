import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 36px;
  }

  form {
    margin-top: 32px;

    display: flex;
    flex-direction: column;
    align-items: center;

    input {
      margin-top: 24px;
      width: 400px;
      padding: 8px 16px;
      color: #061C23;
    }

    button {
      margin-top: 16px;
      width: 160px;
      padding: 8px 16px;
      font-weight: bold;
      background-color: #4E8098;
    }
  }
`;
