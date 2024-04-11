import { useState, useEffect } from "react";
import { SocialMediaGroup } from "../components/types/SocialMediaGroup";
import SocialMediaGroupForm from "../components/common/social_media_group/SocialMediaGroupForm";
import SocialMediaGroupListing from "../components/common/social_media_group/SocialMediaGroupListing";

export default function SocialMediaGroups() {
    const [groups, setGroups] = useState<SocialMediaGroup[]>([]);
    useEffect(() => {
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

    const onFormSubmit = (group: SocialMediaGroup) => {
        setGroups([...groups, group]);
    }

    return (
        <div className="bg-white py-5 px-5">
        <h2>Social Media Groups</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
            {/* <ul> */}
                {groups &&
                    groups.map((group, index) => (
                        // <li key={index}>
                        //     Group number {index}: {group.name}
                        // </li>
                        <SocialMediaGroupListing key={index} group={group} />
                    ))}
            {/* </ul> */}
        </div>
        <SocialMediaGroupForm onFormSubmit={onFormSubmit}/>
            // <button type="submit" className="btn btn-primary">
            //     Add a social media group
            // </button>
            
        </div>
    );
}
