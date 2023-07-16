import priceData from "../../price.json";

import {
  Container,
  PriceContainer,
  ItemTitle,
  ItemText,
} from "../../pages/PricePage/PricePage.styled";

export default function Women() {
  const womenData = priceData.women;

  return (
    <section>
      <Container>
        <PriceContainer>
          <tr>
            <ItemTitle>Послуга</ItemTitle>
            <ItemTitle>Час</ItemTitle>
            <ItemTitle>Ціна</ItemTitle>
          </tr>
          {womenData.map((item) => (
            <tr key={item.id}>
              <ItemText>{item.service}</ItemText>
              <ItemText>{item.time}</ItemText>
              <ItemText>{item.price}</ItemText>
            </tr>
          ))}
        </PriceContainer>
      </Container>
    </section>
  );
}
