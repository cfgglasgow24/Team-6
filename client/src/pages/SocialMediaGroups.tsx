import { useState, useEffect } from "react";
import { SocialMediaGroup } from "../components/types/SocialMediaGroup";
// import axios from 'axios';

export default function SocialMediaGroups() {
    const [groups, setGroups] = useState<SocialMediaGroup[]>([]);
    useEffect(() => {
        document.title = "Social Media Groups";
        const fetchSocialMediaGroups = async () => {
            try {
                const response = await fetch(
                    "http://localhost:5000/api/social-media-groups/",
                    {
                        method: "GET",
                    }
                );
                console.log(response);
                if (!response.ok) {
                    throw new Error("Failed to fetch groups");
                }
                const data = (await response.json()) as SocialMediaGroup[];
                setGroups(data);
            } catch (error) {
                console.log(error);
            }
        };

        fetchSocialMediaGroups();
    }, []);

    return (
        <>
            <div className="text-primary-500">Social Media Groups</div>

            <ul>
                {groups &&
                    groups.map((group, index) => (
                        <li key={index}>
                            Group number {index}: {group.name}
                        </li>
                    ))}
            </ul>
        </>
    );
}