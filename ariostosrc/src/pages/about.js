import React from 'react';
import Layout from 'components/Layout';
import covid19 from '../assets/images/covid19.jpeg'
import spreadImage from '../assets/images/spread.png'
import spreadImage2 from '../assets/images/spread2.jpeg'
const AboutPage =()=>{
 return(
    <Layout>
               <img src={covid19} width="50%" height ="10%"/>

      <h2>What is Covid-19?</h2>
      <p>Coronavirus （Covid-19) is an illness caused
         by a virus that can spread from person to person.
         The virus is a new virus that appeared around the end of 2019
         and has spread throughout the world since then.
         The symptoms can range from mild(or no symptoms)to sever illness. </p>
         <img src= {spreadImage} alt="spread" width="50%" height="10%"></img>
        <h2>How is it spread?</h2>
        <p>You can become infected by coming into close
            contact (about 6 feet or two arm lengths) with a person
            who has COVID-19. COVID-19 is primarily spread from person
            to person. You can become infected from respiratory droplets
            when an infected person coughs, sneezes, or talks.
            You may also be able to get it by touching a surface
            or object that has the virus on it, and then by touching by
            your mouth, nose, or eyes.
        </p>
      <h2>Covid-19 Tracker?</h2>
      <p>This website was created by a team of college students.
          It is mainly for a class project but it is useful to 
          keep track of how many people are currenty infected with the virus 
          (worldwide).This website was implemented in Gatsbyjs, React, as well as 
          Chartjs
      </p>
    </Layout>
 );

};

export default AboutPage;