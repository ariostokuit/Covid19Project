import React from 'react';
import Helmet from 'react-helmet';

import Layout from 'components/Layout';
import Container from 'components/Container';
import covid19 from '../assets/images/covid19.jpeg'
import spreadImage from '../assets/images/spread.png'
import spreadImage2 from '../assets/images/spread2.jpeg'

const ThirdPage = () => {
  return (
    <Layout pageName="three">
      <Helmet>
        <title>About Us</title>
      </Helmet>


      <Container type="content" className="text-center">
        <h2>Why did we create Covid-19 Tracker?</h2>
        <p>This website was created by a team of college students.
            It is mainly for a class project but it is useful to 
            keep track of how many people are currenty infected with the virus 
            (worldwide).This website was implemented in Gatsbyjs, React, as well as 
            Chartjs.
        </p>
        <h2>Who created COVID-19 Tracker?</h2>
        <ul>
          <li>Ariosto Kuit</li>
          <li>Reeder Loveland</li>
          <li>Gabriel Rivera</li>
          <li>Mauricio Macias</li>
        </ul> 
        <img src={covid19} width="50%" height ="10%"/>
        <br />
        <h2>What is Covid-19?</h2>
        <p>Coronavirus（Covid-19) is an illness caused
          by a virus that can spread from person to person.
          The virus is a new virus that appeared around the end of 2019
          and has spread throughout the world since then.
          The symptoms can range from mild(or no symptoms)to sever illness.
        </p>
        <img src= {spreadImage} alt="spread" width="50%" height="10%"></img>
        <h2>How is COVID-19 spread?</h2>
        <p>You can become infected by coming into close
            contact (about 6 feet or two arm lengths) with a person
            who has COVID-19. COVID-19 is primarily spread from person
            to person. You can become infected from respiratory droplets
            when an infected person coughs, sneezes, or talks.
            You may also be able to get it by touching a surface
            or object that has the virus on it, and then by touching by
            your mouth, nose, or eyes.
        </p>
        <br />
        <h2>Special thank you to our professor, William McCarthy!</h2>
        <p>We also want to give a thank you to our Professor 
          William McCarthy. For providing his knowledge in CS and web 
          development. We also thank him for giving us the tools to help all his
          students to be better web developers.
        </p>
      </Container>
    </Layout>
  );
};

export default ThirdPage;
