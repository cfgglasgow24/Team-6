import React from 'react'
import { Question } from '../../types/Question'

interface QuestionCardProps {
    question: Question
}

export default function MentorCard({question}:QuestionCardProps) {
    
    
  return (
    <div className="bg-white shadow rounded-lg py-3 px-3">
        <h3>{question.question}</h3>
        <input type="text" name="name" className="bg-secondary-50 rounded-md size-25 my-1" />
    </div>
  )
}
