import styled from "@emotion/styled";

export const Container = styled.div`
  width: 320px;
  justify-content: center;
  padding: 20px;
  margin: 0 auto;
  @media screen and (min-width: 375px) {
    width: 350px;
  }
  @media screen and (min-width: 767px) {
    width: 650px;
  }
  @media screen and (min-width: 1440px) {
    width: 1200px;
  }
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  background-color: #fff;
`;

export const Main = styled.main`
  min-height: 75vh;
`;
