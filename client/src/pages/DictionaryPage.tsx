import React from 'react';
import { Word } from '../components/types/Word';

const DictionaryPage: React.FC = () => {
    const softwareEngineeringWords: Word[] = [
        { word: 'Agile', definition: ' A development approach that involves flexible planning and continuous improvement to deliver the software as fast as possible.' },
        { word: 'API (Application Programming Interface)', definition: 'A tool that provides completed building blocks with functionality that can be put together and into a software.' },
        { word: 'Backend', definition: 'A ‘server’ software that users do not interact with directly.' },
        { word: 'Beta testing', definition: 'The testing that happens using client or selected personas’ feedback.' },
        { word: 'Bug', definition: 'A program error.' },
    ];

    const dataScienceWords: Word[] = [
        { word: 'Big Data', definition: 'A term used to describe datasets that are so large and complex that traditional data processing applications are inadequate to deal with them.' },
        { word: 'Data Analysis', definition: 'The process of inspecting, cleaning, transforming, and modeling data with the goal of discovering useful information, informing conclusions, and supporting decision-making.' },
        { word: 'Data Visualization', definition: 'The graphical representation of information and data.' },
        { word: 'Deep Learning', definition: 'A subset of machine learning that uses neural networks with many layers to model and learn complex patterns in data.' },
        { word: 'Machine Learning', definition: 'A subset of artificial intelligence that focuses on the development of algorithms that allow computers to learn from and make predictions or decisions based on data.' },
    ];

    return (
        <div>
            <h1>Dictionary</h1>
            <div>
                <h2>Software Engineering Definitions</h2>
                <ul>
                    {softwareEngineeringWords.map((wordObj, index) => (
                        <li key={index}>
                            <strong>{wordObj.word}:</strong> {wordObj.definition}
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h2>Data Science Definitions</h2>
                <ul>
                    {dataScienceWords.map((wordObj, index) => (
                        <li key={index}>
                            <strong>{wordObj.word}:</strong> {wordObj.definition}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default DictionaryPage;