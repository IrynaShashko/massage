import { SiInstagram } from "react-icons/si";
import { PiTelegramLogoBold } from "react-icons/pi";
import { LuPhone } from "react-icons/lu";
import { MdOutlineEmail } from "react-icons/md";
import logo from "../../logo_mg.png";
import {
  FooterContainer,
  FooterIconContainer,
  FooterInfoContainer,
  FooterTel,
  FooterAddress,
} from "./Footer.styled";

const Footer = () => {
  return (
    <FooterContainer>
      <img src={logo} width="30px" height="100%" alt="logo" />
      <FooterIconContainer>
        <li>
          <SiInstagram />
        </li>
        <li>
          <PiTelegramLogoBold />
        </li>
        <li>
          <MdOutlineEmail />
        </li>
        <li>
          <LuPhone />
          <FooterTel href="tel:+380936193616">+38 (096) 619 3616</FooterTel>
        </li>
      </FooterIconContainer>
      <FooterInfoContainer>
        <FooterAddress>Проспект Перемоги, 121а, м.Київ</FooterAddress>
      </FooterInfoContainer>
    </FooterContainer>
  );
};

export default Footer;
