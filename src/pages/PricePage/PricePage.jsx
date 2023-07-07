import { Outlet } from "react-router-dom";
import { List, Item } from "./PricePage.styled";

const PricePage = () => {
  return (
    <div>
      <List>
        <li>
          <Item to="/price/women">Для жінок</Item>
        </li>
        <li>
          <Item to="/price/men">Для чоловіків</Item>
        </li>
        <li>
          <Item to="/price/children">Для дітей</Item>
        </li>
        <li>
          <Item to="/price/body">Догляд за тілом</Item>
        </li>
        <li>
          <Item to="/price/else">Додаткові послуги</Item>
        </li>
      </List>
      <Outlet />
    </div>
  );
};

export default PricePage;
