import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: center;
  li:not(:last-child) {
    margin-right: 20px;
  }
`;

export const Item = styled(NavLink)`
  color: #000;
  font-size: 16px;

  &.active {
    color: #007586;
    border-bottom: 2px solid #007586;
    padding: 10px 10px;
  }
  @media screen and (min-width: 767px) {
    font-weight: 600;
  }
  @media screen and (min-width: 1440px) {
  }
`;
