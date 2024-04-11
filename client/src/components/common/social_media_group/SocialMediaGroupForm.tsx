import { SocialMediaGroup } from "../../types/SocialMediaGroup";

type SocialMediaGroupFormProps = {
    onFormSubmit: (group: SocialMediaGroup) => void;
};

export default function SocialMediaGroupForm({ onFormSubmit }: SocialMediaGroupFormProps) {
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);

        const name = formData.get("name") as string;
        const url = formData.get("url") as string;
        const type = formData.get("type") as string;
        const description = formData.get("description") as string;
        const purpose = formData.get("purpose") as string;
        const creator = formData.get("creator") as string;

        try {
            const response = await fetch(
                "http://localhost:5000/api/social-media-groups/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        name,
                        url,
                        type,
                        description,
                        purpose,
                        creator,
                    }),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to create social media group");
            }

            onFormSubmit(await response.json() as SocialMediaGroup);

            form.reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bg-white shadow rounded-lg py-3 px-3 max-w-md mx-auto'>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label className="text-black">Name</label>
                <input
                    type="text"
                    name="name"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                
                <label className="text-black">Url</label>
                <input
                    type="text"
                    name="url"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                
                <label className="text-black">Type</label>
                <select
                    name="type"
                    className="bg-secondary-50 text-black mx-4 rounded-lg my-1"
                >
                    <option className="text-black" value="WA">WA</option>
                    <option className="text-black" value="TG">TG</option>
                    <option className="text-black" value="FB">FB</option>
                </select>
                
                <label className="text-black">Description</label>
                <input
                    type="text"
                    name="description"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                
                <label className="text-black">Purpose</label>
                <input
                    type="text"
                    name="purpose"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                
                <label className="text-black">Creator</label>
                <input
                    type="text"
                    name="creator"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                <br></br>
                
                <input
                    type="submit"
                    value="Add Social Media Group"
                    className="font-medium text-black bg-primary-500 py-3 px-6 rounded-lg my-5"
                />
            </form>
        </div>
    );
}
