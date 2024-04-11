import React from 'react';

const HeroSection: React.FC = () => {
    return (
        <section className="bg-white py-8 h-1/2 flex justify-center items-center pt-20 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-black">Success Stories</h1>
                    <div className="h-1 bg-primary-500 w-20 mx-auto my-4"></div>
                    <p className="text-lg text-black">Read about the success stories of our community members.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="success-story bg-box-bg-color p-6 rounded-lg shadow-md h-full transition duration-300 ease-in-out transform hover:scale-105">
                        <div className="success-story-content h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-black">From Military to Tech</h2>
                                <p className="text-lg text-black">Meet Abdul, a former military officer who transitioned into the tech industry. Through our mentorship program, he gained the necessary skills and confidence to land a job as a software developer.</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-500">Read more...</p>
                            </div>
                        </div>
                    </div>
                    <div className="success-story bg-box-bg-color p-6 rounded-lg shadow-md h-full transition duration-300 ease-in-out transform hover:scale-105">
                        <div className="success-story-content h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-black">Tech Career After Police Service</h2>
                                <p className="text-lg text-black">Sara served as a police officer for many years. After retiring, she decided to pursue a career in technology. With our support and resources, she successfully transitioned into a role as a cybersecurity analyst.</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-500">Read more...</p>
                            </div>
                        </div>
                    </div>
                    <div className="success-story bg-box-bg-color p-6 rounded-lg shadow-md h-full transition duration-300 ease-in-out transform hover:scale-105">
                        <div className="success-story-content h-full flex flex-col justify-between">
                            <div>
                                <h2 className="text-2xl font-bold mb-2 text-black">From Combat to Coding</h2>
                                <p className="text-lg text-black">Ahmad, a former combat medic, found a new mission in the tech world. With our training programs, he honed his programming skills and secured a position as a frontend developer at a leading tech company.</p>
                            </div>
                            <div className="mt-4">
                                <p className="text-sm text-gray-500">Read more...</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;