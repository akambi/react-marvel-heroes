import React from 'react';
import { FormattedMessage } from 'react-intl';

import Img from './Img';
import HeaderLink from './HeaderLink';
import Banner from './marvel-banner.jpg';
import messages from './messages';
import LocaleToggle from 'containers/LocaleToggle';
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
