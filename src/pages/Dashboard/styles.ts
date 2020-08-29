import styled from 'styled-components';

export const HomePageImage = styled.div`
  font-family: 'Noto Sans', sans-serif;
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
    margin: 200px 0 0 250px;
    width: 500px;


    h1 {
      font-style: normal;
      font-weight: normal;
      font-size: 40px;
      line-height: 44px;
      color: #34325E;

    }

    p {      
      margin-top: 20px;
      font-style: normal;
      font-weight: normal;
      font-size: 24px;
      line-height: 27px;
      
      strong {
        font-family: 'Quattrocento', serif;
        color: #34325E;
      }
    }

    a {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px;
      margin-top: 50px;
      text-align: center;
      width: 204px;
      height: 70px;
      background: #59AFE6;
      border-radius: 10px;
      cursor: pointer;
      color: #fff;
      text-decoration: none;
      font-size: 24px;
      transition: 0.2s;

      &:hover {
        background: #1293e6;
      }
    }
  }

  img {

  }
`;