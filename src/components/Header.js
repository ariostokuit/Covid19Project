import React from 'react';
import { Link } from 'gatsby';

import Container from 'components/Container';

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>COVID-19 Tracker</p>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2/">Graphs</Link>
          </li>
          <li>
            <Link to="/page-4/">Tables</Link>
          </li>
          <li>
            <Link to="/page-3/">About Us</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
