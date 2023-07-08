import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  li:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Item = styled(NavLink)`
  color: #000;
  font-size: 14px;
  &.active {
    color: #007586;
    border-bottom: 2px solid #007586;
    padding: 10px 0;
    text-shadow: 2px 2px 5px #007586;
  }
  @media screen and (min-width: 767px) {
    font-weight: 600;
  }
  @media screen and (min-width: 1440px) {
  }
`;

export const PriceContainer = styled.table`
  width: 320px;
  padding: 10px;
  border: 1px solid #007586;
  border-radius: 10px;
  margin-right: 0 auto;
  margin-top: 30px;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;
export const ItemTitle = styled.td`
  font-size: 14px;
  padding: 5px;
  color: #007586;
  text-shadow: 2px 2px 5px #585858;
`;

export const ItemText = styled.td`
  font-size: 12px;
  padding: 5px;
`;
