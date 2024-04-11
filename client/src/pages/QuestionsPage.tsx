import { useState } from "react";
import QuestionCard from "../components/common/interviewq/QuestionCard";
import { Question } from "../components/types/Question";
import PageTemplate from "./PageTemplate";

export default function QuestionsPage() {
    const [questions, setQuestions] = useState<Question[]>([
        {
            question: "Tell me about yourself",
        },
        {
            question: "Why do you want to work here?",
        },
        {
            question:
                "Why do you feel you are the right person for this position?",
        },
        {
            question:
                "What did you go to university for? Why did you choose that subject?",
        },
        {
            question: "Talk about a project you completed successfully",
        },
        {
            question:
                "Explain me your toughest project and the working architecture.",
        },
    ]);

    return (
        <PageTemplate title="Interview Prep Questions">
            <div className="grid grid-cols-1 gap-4 py-8">
                {questions.map((question, index) => (
                    <QuestionCard key={index} question={question} />
                ))}
            </div>
        </PageTemplate>
    );
}
