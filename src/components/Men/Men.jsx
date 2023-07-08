import priceData from "../../price.json";

import {
  PriceContainer,
  ItemTitle,
  ItemText,
} from "../../pages/PricePage/PricePage.styled";

export default function Men() {
  const menData = priceData.men;

  return (
    <section>
      <div>
        <PriceContainer>
          <tr>
            <ItemTitle>Послуга</ItemTitle>
            <ItemTitle>Час</ItemTitle>
            <ItemTitle>Ціна</ItemTitle>
          </tr>
          {menData.map((item) => (
            <tr key={item.id}>
              <ItemText>{item.service}</ItemText>
              <ItemText>{item.time}</ItemText>
              <ItemText>{item.price}</ItemText>
            </tr>
          ))}
        </PriceContainer>
      </div>
    </section>
  );
}
