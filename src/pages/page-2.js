import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import { render } from 'enzyme';
import Chart from 'chart.js';
import axios from 'axios';

const SecondPage = () => {

  axios.get('https://corona.lmao.ninja/v2/states').then ((response) => {
    makeChart(response.data, 'chart');
    makeChart(response.data, 'chart2');
  });

  function makeChart(players, chartName) {
    var playerLabels = players.map(function(d) {return d.state}); // country name
    var casesData = players.map(function(d) {return d.cases}); // cases of each country
    console.log(playerLabels); 
    var chart = new Chart(chartName, {
      height: 5000,
      type: 'horizontalBar',
      options: {
        scaleShowValues: true,
        maintainAspectRatio: true,
        legend: {
          display: false
        }
      },
      scales: {
        yAxes: [{
          ticks: {
            autoSkip: false
          }
        }]
      },
      data: {
        labels: playerLabels,
        datasets: [
          {
            data: casesData
          }
        ]
      }
    });
  }

  return (
    <Layout pageName="two">
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
    integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
    crossorigin="anonymous"></link>
      <Helmet>
        <title>Graphs</title>
      </Helmet>
      <div id="chartTitle">
        <h1>Number of Total Cases per U.S. State/Territory</h1>
      </div>
      <canvas id="chart"></canvas>
      <br />
      <canvas id="chart2"></canvas>

      <Container type="content" className="text-center">
        <h1>Bottom of Page 2</h1>
        <p>Welcome to page 2</p>
      </Container>
    </Layout>
  );
};

export default SecondPage;
