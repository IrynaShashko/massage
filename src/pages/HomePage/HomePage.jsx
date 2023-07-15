import photo1 from "../../images/10.jpg";
import photo2 from "../../images/11.jpg";
import { GrLocation } from "react-icons/gr";
import {
  Container,
  TextContainer,
  Text,
  ImageContainer,
  ImageLeft,
  ImageRight,
} from "./HomePage.styled";

import {
  ModalText,
  ModalSubmitBtn,
  LocationButton,
} from "../../components/Modal/Modal.styled";

const HomePage = () => {
  return (
    <main>
      <Container>
        <TextContainer>
          <Text>Медична освіта</Text>
          <Text>Досвід 10+ років</Text>
          <Text>Симбіоз технік та методик</Text>
          <Text>Працюю для вашого здоров'я</Text>
          <LocationButton
            href="https://goo.gl/maps/wb7UFZ7Mh3YHv1fZA"
            target="_blank"
          >
            <GrLocation />
            <Text>пр.Перемоги, 121а, м.Київ</Text>
          </LocationButton>
          <ModalText href="tel:+380966193616" target="_blank">
            +38 (093) 619 3616
          </ModalText>
        </TextContainer>
        <ImageContainer>
          <ImageLeft src={photo1} width="100%" height="150px" alt="logo" />
          <ImageRight src={photo2} width="100%" height="150px" alt="logo" />
        </ImageContainer>
        <ModalSubmitBtn>Записатись</ModalSubmitBtn>
      </Container>
    </main>
  );
};

export default HomePage;
