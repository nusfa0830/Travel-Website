import React from 'react';
import AllTour from '../AllTour/AllTour';
import Bannar from '../Banner/Bannar';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ClientReview from '../ClientReview/ClientReview';

const Home = () => {



    return (
        <div>
            <Header></Header>
            <Bannar></Bannar>
            <AllTour></AllTour>
            <ClientReview></ClientReview>
            <Footer></Footer>
        </div>
    );
};

export default Home;