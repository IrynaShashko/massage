import { Link } from "react-router-dom";

import priceData from "../../../../public/price.json";

export default function Women() {
  const womenData = priceData.women;

  return (
    <section>
      <div>
        <Link className="link" href="/price">
          <button>Назад</button>
        </Link>
        <ul>
          <h2>Жіночі послуги</h2>
          {womenData.map((item) => (
            <li>
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
