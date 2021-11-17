import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const UlWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  list-style: none;
  padding: 0.5em;
  background: ${(props) => props.theme.color.navBackground};
`;

export const Li = styled.li`
  font-weight: bold;
  text-decoration: none;
`;

export const StyledLink = styled(NavLink)`
  color: ${(props) => props.theme.color.normal};
  text-decoration: none;

  &.active,
  &:visited {
    border-bottom: 2px solid ${(props) => props.theme.color.normal};
  }

  &:focus {
    outline: none;
    border-top: 1px solid ${(props) => props.theme.color.normal};
  }
`;
