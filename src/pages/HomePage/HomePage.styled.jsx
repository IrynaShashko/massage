import styled from "@emotion/styled";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  & p:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Text = styled.p`
  font-size: 20px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: space-around;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const ImageLeft = styled.img`
  border-top-left-radius: 50%;
  /* border-bottom-left-radius: 50%; */
`;

export const ImageRight = styled.img`
  margin-left: 5px;
  border-bottom-right-radius: 50%;
  /* border-top-right-radius: 50%; */
`;
