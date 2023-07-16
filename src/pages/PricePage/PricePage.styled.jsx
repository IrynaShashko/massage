import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 auto;
  li:not(:last-child) {
    margin-right: 10px;
  }
`;

export const Item = styled(NavLink)`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  padding: 5px;
  &.active {
    color: #007586;
    border-bottom: 2px solid #007586;
    text-shadow: 2px 2px 5px #007586;
  }
  @media screen and (min-width: 767px) {
    padding: 10px;
    font-size: 16px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
  }
`;

export const PriceContainer = styled.table`
  width: 300px;
  padding: 10px;
  border: 1px solid #007586;
  border-radius: 10px;
  margin: 0 auto;
  margin-top: 30px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  @media screen and (min-width: 375px) {
    width: 350px;
  }
  @media screen and (min-width: 768px) {
    padding: 20px;
    width: 650px;
  }
  @media screen and (min-width: 1440px) {
    padding: 30px;
    width: 800px;
  }
`;

export const ItemTitle = styled.td`
  font-size: 14px;
  padding: 5px;
  color: #007586;
  text-shadow: 2px 2px 5px #585858;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    padding: 10px;
  }
`;

export const ItemText = styled.td`
  font-size: 14px;
  padding: 5px;
  @media screen and (min-width: 768px) {
    font-size: 16px;
    padding: 10px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 18px;
    padding: 10px;
  }
`;
