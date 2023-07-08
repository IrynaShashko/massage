import priceData from "../../price.json";
import {
  PriceContainer,
  ItemTitle,
  ItemText,
} from "../../pages/PricePage/PricePage.styled";

export default function Else() {
  const elseData = priceData.else;

  return (
    <section>
      <div>
        <PriceContainer>
          <tr>
            <ItemTitle>Послуга</ItemTitle>
            <ItemTitle>Ціна</ItemTitle>
          </tr>
          {elseData.map((item) => (
            <tr key={item.id}>
              <ItemText>{item.service}</ItemText>
              <ItemText>{item.price}</ItemText>
            </tr>
          ))}
        </PriceContainer>
      </div>
    </section>
  );
}
