import React from 'react'
import { Mentor } from '../../types/Mentor'

interface MentorCardProps {
    mentor: Mentor
}

export default function MentorCard({mentor}:MentorCardProps) {

    
  return (
    <div className="bg-white shadow rounded-lg py-3 px-3">
        <h1 className="text-2xl">{mentor.name}</h1>
        <h3 className="text-secondary-500">{mentor.email}</h3>
        <h3 className="font-medium">Technologies</h3>
        <h3>{mentor.bio}</h3>
        <h3 className="font-medium">Bio</h3>
        <h3>{mentor.bio}</h3>
    </div>

  )
}
