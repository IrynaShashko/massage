import priceData from "../../price.json";

export default function Men() {
  const menData = priceData.men;

  return (
    <section>
      <div>
        <ul>
          <h2>Чоловічі послуги</h2>
          {menData.map((item) => (
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
