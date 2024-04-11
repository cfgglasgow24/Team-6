import React from 'react';
import { Word } from '../components/types/Word';

const DictionaryPage: React.FC = () => {
    const softwareEngineeringWords: Word[] = [
        { word: 'Agile', definition: ' A development approach that involves flexible planning and continuous improvement to deliver the software as fast as possible.' },
        { word: 'API (Application Programming Interface)', definition: 'A tool that provides completed functionality that can be put together and into a software.' },
        { word: 'Backend', definition: 'A ‘server’ software that users do not interact with directly.' },
        { word: 'Beta testing', definition: 'The testing that happens using client’s feedback.' },
        { word: 'Bug', definition: 'A program error.' },
        { word: 'Compiler', definition: 'A program that translates a high-level program into an independent one.' },
        { word: 'Debugging', definition: 'The detection and removal of errors in a program. ' },
        { word: 'Dependencies', definition: 'Similarities between tasks that show in which order they should be executed. ' },
        { word: 'Deploy', definition: 'Inputting the code into the server so it can run.' },
        { word: 'End User', definition: 'The person that uses a particular product.' },
    ];

    const dataScienceWords: Word[] = [
        { word: 'Big Data', definition: 'A term used to describe datasets that are so large and complex that traditional data processing applications are inadequate to deal with them.' },
        { word: 'Data Analysis', definition: 'The process of inspecting, cleaning, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making.' },
        { word: 'Data Visualization', definition: 'The graphical representation of information and data.' },
        { word: 'Deep Learning', definition: 'A subset of machine learning that uses neural networks with many layers to model and learn complex patterns in data.' },
        { word: 'Machine Learning', definition: 'A subset of artificial intelligence that focuses on the development of algorithms that allow computers to learn from and make predictions or decisions based on data.' },
        { word: 'Regression', definition: 'A type of machine learning used to predict outcomes based on existing data, utilizing algorithms like linear and ridge regression.' },
        { word: 'Reinforcement Learning', definition: 'A machine learning approach that learns through interaction with its environment and feedback, applicable in autonomous vehicles.' },
        { word: 'Structured Query Language (SQL)', definition: 'A programming language used to manage and manipulate relational databases.' },
        { word: 'Supervised Learning', definition: 'A type of machine learning that uses labeled data to learn and make predictions about new datasets.' },
        { word: 'Unsupervised Learning', definition: 'A form of machine learning that identifies patterns in data without needing labeled examples, used in clustering and predictive modeling.' },
    ];

    return (
        <div className="max-w-4xl mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Business English - Simplified English Dictionary</h1>
            <div className="mb-8">
                <h2 className="text-xl font-semibold bg-primary-500 text-black px-4 py-2 mb-2">Software Engineering Definitions</h2>
                <ul className="list-disc pl-4">
                    {softwareEngineeringWords.map((wordObj, index) => (
                        <li key={index} className="text-gray-800">
                            <strong>{wordObj.word}:</strong> {wordObj.definition}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2 className="text-xl font-semibold bg-primary-500 text-black px-4 py-2 mb-2">Data Science Definitions</h2>
                <ul className="list-disc pl-4">
                    {dataScienceWords.map((wordObj, index) => (
                        <li key={index} className="text-gray-800">
                            <strong>{wordObj.word}:</strong> {wordObj.definition}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DictionaryPage;