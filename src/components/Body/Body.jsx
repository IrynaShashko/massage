import priceData from "../../price.json";

export default function Body() {
  const styxData = priceData.styx;
  const alghotermData = priceData.alghoterm;

  return (
    <section>
      <div>
        <h2>Догляд за тілом</h2>
        <ul>
          {styxData.map((item) => (
            <li key={item.id}>
              <p>{item.service}</p>
              <p>{item.time}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
        <ul>
          {alghotermData.map((item) => (
            <li key={item.id}>
              <p>{item.service}</p>
              <p>{item.time}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
