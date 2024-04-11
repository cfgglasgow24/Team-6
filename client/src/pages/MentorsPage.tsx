import { useEffect, useState } from "react";
import MentorCard from "../components/common/mentor/MentorCard";
import { Mentor } from "../components/types/Mentor";
import MentorForm from "../components/common/mentor/MentorForm";

export default function MentorsPage() {
    const [mentors, setMentors] = useState<Mentor[]>([]);

    useEffect(() => {
        const fetchMentors = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/mentors/",
                    {
                        method: "GET",
                    }
                );
                console.log(response);
                if (!response.ok) {
                    throw new Error("Failed to fetch mentors");
                }
                const data = (await response.json()) as Mentor[];
                console.log(data);
                setMentors(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchMentors();
    }, []);

    return (
        <div className="bg-white py-5 px-5">
            <h1 className="py-6 text-4xl">Meet the Mentors!</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                {mentors.map((mentor, index) => (
                    <MentorCard key={index} mentor={mentor} />
                ))}
            </div>
            <h1 className="py-6 text-2xl">Sign up to become a mentor!</h1>
            <MentorForm />
        </div>
    );
}
