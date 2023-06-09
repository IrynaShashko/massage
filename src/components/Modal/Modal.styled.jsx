import styled from "@emotion/styled";

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
  margin-left: auto;
  height: 100vh;
  width: 100vw;
  right: 0;
  /* top: 60px; */
  background-color: #fff;
  /* @media screen and (max-width: 768px) {
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
  margin-bottom: 50px;
`;

export const ModalButton = styled.button`
  border: none;
  background-color: transparent;
`;

export const ModalList = styled.ul`
  list-style: none;
  font-size: 25px;
  margin-bottom: 40px;
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
  margin-bottom: 30px;
`;

export const ModalText = styled.a`
  text-decoration: none;
  color: #007586;
  font-size: 25px;
  text-shadow: 2px 2px 5px #656666;
`;

export const ModalSubmitBtn = styled.button`
  border: none;
  background-color: #007586;
  border-radius: 10px;
  align-self: center;
  padding: 10px 20px;
  color: #ffffff;
  width: 250px;
  font-size: 20px;
  font-family: 400;
  cursor: pointer;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
