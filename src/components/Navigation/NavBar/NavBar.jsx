import React from 'react';

import ThemeButton from '../ThemeButton';

import { UlWrapper, Li, StyledLink } from '.';

const NavBar = ({ onChangeTheme }) => {
  return (
    <UlWrapper>
      <Li>
        <StyledLink to="/all-quotes">All Quotes</StyledLink>
      </Li>
      <Li>
        <StyledLink to="/new-quote">New Quote</StyledLink>
      </Li>
      <Li>
        <ThemeButton changeTheme={onChangeTheme} />
      </Li>
    </UlWrapper>
  );
};

export default NavBar;
