import React from 'react';
import Header from '../components/common/homepage/header';
import HeroSection from '../components/common/homepage/hero';
import ServicesSection from '../components/common/homepage/services';
import PageTemplate from "./PageTemplate";

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <ServicesSection />
        </div>
    );
};

export default HomePage;