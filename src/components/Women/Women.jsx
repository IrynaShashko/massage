import priceData from "../../price.json";

export default function Women() {
  const womenData = priceData.women;

  return (
    <section>
      <div>
        <ul>
          <h2>Жіночі послуги</h2>
          {womenData.map((item) => (
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