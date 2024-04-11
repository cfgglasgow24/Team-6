import { useState } from "react";
import QuestionCard from "../components/common/interviewq/QuestionCard";
import { Question } from "../components/types/Question";

export default function QuestionsPage() {
    const [questions, setQuestions] = useState<Question[]>(
        [
            {
                question:"DDD"

            },
            {
                question:"DDD"

            }
           
        ]



    )

    return <body className="bg-white py-5 px-5">
        <h1 className="py-6 text-4xl">Interview Prep Questions</h1>
        <div className="grid grid-cols-1 gap-4 py-8">
            {questions.map((question, index) => (
                <QuestionCard key={index} question={question} />
            ))}
        </div>

    </body>
}
