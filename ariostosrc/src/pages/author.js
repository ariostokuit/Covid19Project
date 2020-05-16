import React from 'react';
import Layout from 'components/Layout';

const AuthorPage =()=>{
 return(
    <Layout>
        <h2>Authors</h2>
        <ul>
            <li>Ariosto Kuit</li>
            <li>Reeder Loveland</li>
            <li>Gabe Rivera</li>
            <li>Mauricio Macias</li>
        </ul>
        <h2>Professor</h2>
        <li>William McCarthy</li>
        <p>We want to give a thank you to Professor McCarthy.
            For providing his knowledge in CS and web development.
            We also thank him for giving us the tools to help all his
            students to be better web developers.
        </p>
        <p> Thank you wash your hands, practicing social distancing, and stay safe.</p>

    </Layout>
 );

};

export default AuthorPage;