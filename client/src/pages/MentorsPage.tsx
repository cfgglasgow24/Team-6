import { useState } from "react";
import MentorCard from "../components/common/mentor/MentorCard";
import { Mentor } from "../components/types/Mentor";
import MentorForm from "../components/common/mentor/MentorForm"

export default function MentorsPage() {
    const [mentors, setMentors] = useState<Mentor[]>(
        [
            {
                name: "Sophie",
                email: 'sophiemccartney2004@gmail.com',
                bio: "Love React"

            },
            {
                name: "x",
                email: 'x@gmail.com',
                bio: "x"

            }
        ]



    )



    return <body className="bg-white py-5 px-5">
        <h1 className="py-6 text-4xl">Meet the Mentors!</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
            {mentors.map((mentor, index) => (
                <MentorCard key={index} mentor={mentor} />
            ))}
        </div>
        {/* <div className="grid justify-center content-normal my-10 "> 
            <button className="bg-primary-500 rounded-lg py-5 px-5">Sign up to be a mentor</button>
        </div>*/}
        <h1 className="py-6 text-2xl">Sign up to become a mentor!</h1>

        <MentorForm></MentorForm>
    </body>
}
