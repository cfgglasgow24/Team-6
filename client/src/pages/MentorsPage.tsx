import { useEffect, useState } from "react";
import MentorCard from "../components/common/mentor/MentorCard";
import { Mentor } from "../components/types/Mentor";
import MentorForm from "../components/common/mentor/MentorForm";
import PageTemplate from "./PageTemplate";

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

    function formOnSubmit(mentor: Mentor) {
        setMentors([...mentors, mentor]);
    }

    return (
        <PageTemplate title="Meet the Mentors!">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                {mentors.map((mentor, index) => (
                    <MentorCard key={index} mentor={mentor} />
                ))}
            </div>
            <h1 className="py-6 text-2xl">Sign up to become a mentor!</h1>
            <MentorForm onSubmit={formOnSubmit} />
        </PageTemplate>
    );
}
