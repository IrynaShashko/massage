import priceData from "../../price.json";

export default function Children() {
  const сhildrenData = priceData.children;

  return (
    <section>
      <div>
        <ul>
          <h2>Дитячі послуги</h2>
          {сhildrenData.map((item) => (
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
