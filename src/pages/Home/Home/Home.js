import React from 'react';
import Banner from '../Banner/Banner';
import About from '../About/About';
import Services from '../Services/Services';
import Contacts from '../Contacts/Contacts';
import Products from '../Products/Products';
import Teams from '../Teams/Teams';
import Features from '../Features/Features';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Services></Services>
            <Contacts></Contacts>
            <Products></Products>
            <Teams></Teams>
            <Features></Features>
        </div>
    );
};

export default Home;