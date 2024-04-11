import { useState } from "react";
import MentorCard from "../components/common/mentor/MentorCard";
import { Mentor } from "../components/types/Mentor";

export default function MentorsPage() { 
    const [mentor, setMentor] = useState<Mentor>(
        
        {
            name:"Sophie",
            email: 'sophiemccartney2004@gmail.com',
            bio:"Love React"
    
        }

    )


    return <MentorCard mentor={mentor}></MentorCard>;
}
