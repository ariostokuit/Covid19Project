import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';

const ThirdPage = () => {
  return (
    <Layout pageName="three">
      <Helmet>
        <title>About Us</title>
      </Helmet>

      

      <Container type="content" className="text-center">
        <h1>Page Three</h1>
        <p>Welcome to page 3</p>
      </Container>
    </Layout>
  );
};

export default ThirdPage;
