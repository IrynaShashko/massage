import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const ModalBackdrop = styled.div`
  /* @media screen and (max-width: 768px) { */
  position: fixed;
  top: 0;
  right: 0;
  width: 120vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  z-index: 2;
  /* } */
`;

export const ModalContent = styled.div`
  position: absolute;
  margin: 0;
  /* margin-left: auto; */
  height: 100vh;
  width: 100vw;
  right: 0;
  /* top: 60px; */
  background-color: #fff;
  @media screen and (min-width: 768px) {
    top: 100px;
    left: 220px;
    width: 400px;
    max-height: 550px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 8px;
  } /* @media screen and (max-width: 768px) {
    max-height: 600px;
    width: 100%;
    /* padding: 20px 10px 268px 10px; */
  /* padding: 20px 0px 268px 0px;
  }
  @media screen and (min-width: 768px) {
    max-height: 508px;
    min-width: 500px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 20px 60px 20px;
    border-radius: 20px;
  } */
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ModalHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 300px;
    padding: 0;
    margin-bottom: 0;
  }
`;

export const ModalButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const ModalList = styled.ul`
  list-style: none;
  font-size: 25px;
  margin-bottom: 20px;
  justify-content: center;
  padding: 0;
`;

export const ModalTitle = styled.li`
  justify-self: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 0;
  line-height: 150%;
  text-align: center;
  color: #000000;
`;

export const ModalTextContainer = styled.div`
  justify-self: center;
  align-items: center;
  font-size: 20px;
  margin: 0 auto;
  padding: 0;
`;

export const ModalText = styled.a`
  text-decoration: none;
  color: #007586;
  font-size: 20px;
  text-shadow: 2px 2px 5px #656666;
  /* margin-bottom: 20px; */
`;
export const ModalNumber = styled.p`
  text-decoration: none;
  color: #007586;
  font-size: 20px;
  text-shadow: 2px 2px 5px #656666;
  margin-bottom: 20px;
`;

export const ModalSubmitBtn = styled.button`
  border: none;
  background-color: #007586;
  border-radius: 8px;
  align-self: center;
  padding: 10px 20px;
  color: #ffffff;
  width: 280px;
  font-size: 20px;
  font-family: 400;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (min-width: 425px) {
    width: 250px;
  }
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`;

export const LocationButton = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000;
  margin-bottom: 20px;
`;

export const NavLinkStyled = styled(NavLink)`
  color: #007586;
  text-decoration: none;
  margin-left: 10px;
`;
