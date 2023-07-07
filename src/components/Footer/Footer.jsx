import logo from "../../logo_mg.png";
import {
  FooterContainer,
  FooterInfoContainer,
  FooterTel,
  FooterAddress,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} width="30px" height="100%" alt="logo" />
      <FooterInfoContainer>
        <FooterTel href="tel:+380936193616">+38 (096) 619 3616</FooterTel>
        <FooterAddress>Проспект Перемоги, 121а, м.Київ</FooterAddress>
      </FooterInfoContainer>
    </FooterContainer>
  );
};

export default Footer;
