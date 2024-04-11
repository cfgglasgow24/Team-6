import { useState, useEffect } from "react";
import { SocialMediaGroup } from "../components/types/SocialMediaGroup";
import SocialMediaGroupForm from "../components/common/social_media_group/SocialMediaGroupForm";
import SocialMediaGroupListing from "../components/common/social_media_group/SocialMediaGroupListing";
import PageTemplate from "./PageTemplate";

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

                if (!response.ok) {
                    throw new Error("Failed to fetch groups");
                }

                const data = (await response.json()) as SocialMediaGroup[];

                setGroups(data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchSocialMediaGroups();
    }, []);

    const onFormSubmit = (group: SocialMediaGroup) => {
        setGroups([...groups, group]);
    };

    return (
        <PageTemplate title="Social Media Groups">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
                {groups &&
                    groups.map((group, index) => (
                        <SocialMediaGroupListing key={index} group={group} />
                    ))}
            </div>
            <h1 className="text-xl font-bold ">
                Add a Group for others to join!
            </h1>
            <SocialMediaGroupForm onFormSubmit={onFormSubmit} />
        </PageTemplate>
    );
}
