import React, { useState } from "react";
import QuestionCard from "../components/common/interviewq/QuestionCard";
import { Question } from "../components/types/Question";

export default function QuestionsPage() {
  const questions: Question[] = [
    {
      id: 1,
      question: "Tell me about yourself",
    },
    {
      id: 2,
      question: "Why do you want to work here?",
    },
    {
      id: 3,
      question: "Why do you feel you are the right person for this position?",
    },
    {
      id: 4,
      question:
        "What did you go to university for? Why did you choose that subject?",
    },
    {
      id: 5,
      question: "Talk about a project you completed successfully",
    },
    {
      id: 6,
      question:
        "Explain me your toughest project and the working architecture.",
    },
  ];

  const [inputStates, setInputStates] = useState<string[]>(
    Array(questions.length).fill("")
  );

  const [inputValidity, setInputValidity] = useState<boolean[]>(
    Array(questions.length).fill(true)
  );

  const handleInputChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const inputText = event.target.value;
      const isValid = inputText.length > 20;
      setInputValidity((prevValidity) => {
        const newValidity = [...prevValidity];
        newValidity[index] = isValid;
        return newValidity;
      });
      const newInputStates = [...inputStates];
      newInputStates[index] = inputText;
      setInputStates(newInputStates);
    };

  return (
    <div className="mx-3 questions-page">
      <h1 className="text-3xl">Interview Prep Questions</h1>
      <div className="grid">
        {questions.map((question, index) => (
          <div key={question.id}>
            <QuestionCard question={question} />
            <input
              type="text"
              value={inputStates[index]}
              onChange={handleInputChange(index)}
              name={`input-${index}`}
              className={`mx-2 bg-secondary-50 border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                inputValidity[index] ? "input-field" : "border-red-500"
              }`}
            />
            {inputValidity[index] && inputStates[index].length > 40 && (
              <p className="text-primary-800 success-message">
                That's a good answer.
              </p>
            )}
            {!inputValidity[index] && (
              <p className="text-red-500 error-message">
                You should add more detail about your career!
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
