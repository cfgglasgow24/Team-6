import React from 'react';
import Header from '../components/common/homepage/header';
import HeroSection from '../components/common/homepage/hero';
import FeaturesSection from '../components/common/homepage/features';

const HomePage: React.FC = () => {
    return (
        <div>
            <Header />
            <HeroSection />
            <FeaturesSection />
        </div>
    );
};

export default HomePage;