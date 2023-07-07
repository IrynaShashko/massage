import styled from "@emotion/styled";

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FooterInfoContainer = styled.div`
  margin-left: 20px;
`;

export const FooterTel = styled.a`
  text-decoration: none;
  font-size: 16px;
  color: #2c2c2c;
  cursor: pointer;
  &:hover {
    color: #007586;
    font-size: 18px;
  }
`;

export const FooterAddress = styled.p`
  font-size: 16px;
`;
