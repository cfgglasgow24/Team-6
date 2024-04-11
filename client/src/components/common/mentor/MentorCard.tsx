import React from 'react'
import { Mentor } from '../../types/Mentor'

interface MentorCardProps {
    mentor: Mentor
    
}

export default function MentorCard({mentor}:MentorCardProps) {

    
  return (
    <div>
        <h1>{mentor.name}</h1>
        <h3>{mentor.email}</h3>
        <h3>{mentor.bio}</h3>
    </div>
  )
}
