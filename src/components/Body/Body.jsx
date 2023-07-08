import priceData from "../../price.json";

import {
  PriceContainer,
  ItemTitle,
  ItemText,
} from "../../pages/PricePage/PricePage.styled";

export default function Body() {
  const styxData = priceData.styx;
  const alghotermData = priceData.alghoterm;

  return (
    <section>
      <PriceContainer>
        <tr>
          <ItemTitle>Послуга</ItemTitle>
          <ItemTitle>Час</ItemTitle>
          <ItemTitle>Ціна</ItemTitle>
        </tr>
        {styxData.map((item) => (
          <tr key={item.id}>
            <ItemText>{item.service}</ItemText>
            <ItemText>{item.time}</ItemText>
            <ItemText>{item.price}</ItemText>
          </tr>
        ))}
        {alghotermData.map((item) => (
          <tr key={item.id}>
            <ItemText>{item.service}</ItemText>
            <ItemText>{item.time}</ItemText>
            <ItemText>{item.price}</ItemText>
          </tr>
        ))}
      </PriceContainer>
    </section>
  );
}
