import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  font-size: 20px;
  font-weight: 900;
  border-radius: 4px;
  text-decoration: none;
  color: #d3678a;

  &.active {
    color: #d80e4f;
  }
`;
