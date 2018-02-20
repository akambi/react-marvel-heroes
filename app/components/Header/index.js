import React from 'react';
import LocaleToggle from 'containers/LocaleToggle';

import Img from './Img';
import HeaderLink from './HeaderLink';
import Banner from './marvel-banner.jpg';
import HeaderLocale from './HeaderLocale';

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div>
        <HeaderLink to="/">
          <Img src={Banner} alt="react-marvel - Logo" />
        </HeaderLink>
        <HeaderLocale>
          <LocaleToggle />
        </HeaderLocale>
      </div>
    );
  }
}

export default Header;
