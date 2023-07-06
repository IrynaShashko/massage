import { NavLink, Outlet } from "react-router-dom";

const PricePage = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/price/women">Послуги для жінок</NavLink>
        </li>
        <li>
          <NavLink to="/price/men">Послуги для чоловіків</NavLink>
        </li>
        <li>
          <NavLink to="/price/children">Послуги для дітей</NavLink>
        </li>
        <li>
          <NavLink to="/price/body">Догляд за тілом</NavLink>
        </li>
        <li>
          <NavLink to="/price/else">Додаткові послуги</NavLink>
        </li>
      </ul>
      <Outlet />
    </div>
  );
};

export default PricePage;
