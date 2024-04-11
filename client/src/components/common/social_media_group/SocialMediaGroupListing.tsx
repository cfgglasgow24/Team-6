import { Link } from "react-router-dom";
import { SocialMediaGroup } from "../../types/SocialMediaGroup";

type SocialMediaGroupListingProps = {
    group: SocialMediaGroup;
};

export default function SocialMediaGroupListing({
    group,
}: SocialMediaGroupListingProps) {
    return (
        <Link to={group.url} target="_blank">
            <div className="bg-white shadow rounded-lg py-3 px-3">
                <h1 className="text-2xl text-black">{group.name}</h1>
                <h3>Created by {group.creator}</h3>
                <p>{group.description}</p>
            </div>
        </Link>
    );
}
