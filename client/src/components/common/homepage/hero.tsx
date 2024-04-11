import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-gray-200 py-8">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold">Success Stories</h1>
                </div>
                <div className="success-story bg-white p-6 rounded-lg shadow-md mb-4">
                    <div className="success-story-content">
                        <h2 className="text-2xl font-bold mb-2">Success Story 1 Title</h2>
                        <p className="text-lg">Description of Success Story 1 goes here...</p>
                    </div>
                </div>
                <div className="success-story bg-white p-6 rounded-lg shadow-md">
                    <div className="success-story-content">
                        <h2 className="text-2xl font-bold mb-2">Success Story 2 Title</h2>
                        <p className="text-lg">Description of Success Story 2 goes here...</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;