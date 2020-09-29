import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 48px;
  min-width: 800px;
  padding: 16px 24px;
  border: 1px solid #F4F3EE;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > h1 {
    font-size: 32px;
    font-weight: bold;
    margin-right: 32px;
  }
`;

export const Weather = styled.ul`
  list-style: none;

  display: flex;
  align-items: center;

  li {
    display: flex;
    align-items: center;

    & + li {
      margin-left: 20px;
    }

    span {
      color: #C7C2A8;
    }

    strong {
      font-weight: bold;
      font-size: 24px;
      margin-left: 8px;
    }
  }
`;