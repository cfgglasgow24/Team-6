import React, { useState } from "react";
import QuestionCard from "../components/common/interviewq/QuestionCard";
import { Question } from "../components/types/Question";

export default function QuestionsPage() {
  const questions: Question[] = [
    {
      id: 1,
      question: "Tell me about yourself",
    },
    // Add unique identifiers (id) to each question
    // Other questions...
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
      const isValid = inputText.length > 5;
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
    <div className="questions-page">
      <h1 className="page-title">Interview Prep Questions</h1>
      <div className="questions-grid">
        {questions.map((question, index) => (
          <div key={question.id} className="question-container">
            <QuestionCard question={question} />
            <input
              type="text"
              value={inputStates[index]}
              onChange={handleInputChange(index)}
              name={`input-${index}`}
              className={
                inputValidity[index] ? "input-field" : "input-field invalid"
              }
            />
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
