import React from 'react';
import { Button } from '.';

const Header = ({ changeTheme }) => {
  return (
    <div>
      <Button onClick={changeTheme}>Theme</Button>
    </div>
  );
};

export default Header;
