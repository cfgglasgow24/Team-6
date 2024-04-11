import React from 'react';
import { Word } from '../components/types/Word';

const DictionaryPage: React.FC = () => {
    const words: Word[] = [
        { word: 'React', definition: 'A JavaScript library for building user interfaces' },
        { word: 'Component', definition: 'A reusable piece of code that can be used to build UI elements' },
        { word: 'State', definition: 'An object that represents the parts of the app that can change over time' },
        { word: 'Props', definition: 'Short for properties, they are inputs to a React component' },
        { word: 'JSX', definition: 'A syntax extension for JavaScript that allows writing HTML elements in JavaScript code' },
    ];
  
    return (
        <div>
            <h1>Dictionary</h1>
            <div>
                <h2>Words</h2>
                <ul>
                    {words.map((wordObj, index) => (
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