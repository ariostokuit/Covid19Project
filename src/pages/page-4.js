import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import Chart from 'components/Chart';
import State from 'components/State';
import Continent from 'components/Continent';
import Country from 'components/Country';

const FourthPage = () => {
  return (
    <Layout pageName="four">
      <Helmet>
        <title>Tables</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
    crossorigin="anonymous"></link>
      </Helmet>
      <Container type="content" className="text-center">
        <div className="container">
          <div className="row">
            <div className="col">
              <Country />
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  );
};

export default FourthPage;
