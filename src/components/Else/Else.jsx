import priceData from "../../price.json";

export default function Else() {
  const elseData = priceData.else;

  return (
    <section>
      <div>
        <ul>
          <h2>Додаткові послуги</h2>
          {elseData.map((item) => (
            <li key={item.id}>
              <p>{item.service}</p>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
