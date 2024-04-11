import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faUsers, faGlobe } from '@fortawesome/free-solid-svg-icons';

const ServicesSection: React.FC = () => {
    return (
        <section className="bg-white flex justify-center items-center pt-10 pb-20"> 
            <div className="container mx-auto px-4">
                <h1 className="text-3xl font-bold mb-8 text-center">Our Free Services</h1>
                <div className="h-1 bg-secondary-500 w-20 mx-auto my-4"></div>
                <div className="text-center mb-4">
                    <p className="text-lg text-black">Check out our materials and services!</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <a href="/questionspage" className="service-link">
                        <div className="service bg-white p-6 rounded-lg shadow-md flex items-center transition-transform duration-300 ease-in-out hover:-translate-y-1">
                            <div>
                                <h2 className="text-xl font-bold mb-2">Interview Prep Materials                               <FontAwesomeIcon icon={faBook} className="text-secondary-500 mr-4" /></h2>
                                <p className="text-lg">Access a comprehensive library of interview preparation materials including sample interview questions and a tried-and-tested CV template.</p>
                            </div>
                        </div>
                    </a>
                    <a href="/mentors" className="service-link">
                        <div className="service bg-white p-6 rounded-lg shadow-md flex items-center transition-transform duration-300 ease-in-out hover:-translate-y-1">
                            <div>
                                <h2 className="text-xl font-bold mb-2">Mentors                               <FontAwesomeIcon icon={faUsers} className="text-secondary-500 mr-4" /> </h2>
                                <p className="text-lg">Connect with experienced in-industry mentors who will be able to provide tailored guidance, support, and feedback on your technology career journey.</p>
                            </div>
                        </div>
                    </a>
                    <a href="/materials/dictionary" className="service-link">
                        <div className="service bg-white p-6 rounded-lg shadow-md flex items-center transition-transform duration-300 ease-in-out hover:-translate-y-1">
                            <div>
                                <h2 className="text-xl font-bold mb-2">Dictionary                              <FontAwesomeIcon icon={faGlobe} className="text-secondary-500 mr-4" /> </h2>
                                <p className="text-lg">Access a comprehensive dictionary of software development and data science terms, concepts, and definitions in simple and easy to understand English.</p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ServicesSection;