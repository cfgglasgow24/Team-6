import React from 'react';

const ServicesSection: React.FC = () => {
    return (
        <section className="bg-gray-200 py-8">
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Our Free Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a href="/questionspage" className="service-link">
                        <div className="service bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-2">Interview Prep Materials</h2>
                            <p className="text-lg">Access a comprehensive library of interview preparation materials including sample interview questions and a tried-and-tested cv template.</p>
                        </div>
                    </a>
                    <a href="/mentors" className="service-link">
                        <div className="service bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-2">Mentors</h2>
                            <p className="text-lg">Connect with experienced in-industry mentors who will be able to provide tailored guidance, support, and feedback on your technology career journey.</p>
                        </div>
                    </a>
                    <a href="/materials/dictionary" className="service-link">
                        <div className="service bg-white p-6 rounded-lg shadow-md">
                            <h2 className="text-xl font-bold mb-2">Dictionary</h2>
                            <p className="text-lg">Access a comprehensive dictionary of software development and data science terms, concepts, and definitions in simple and easy to understand English.</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;