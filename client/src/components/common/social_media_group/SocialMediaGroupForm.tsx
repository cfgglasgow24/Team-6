export default function SocialMediaGroupForm() {
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

            form.reset();
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='bg-white shadow rounded-lg py-3 px-3'>
            <form onSubmit={handleSubmit} className="flex flex-col">
                <label>Name</label>
                <input
                    type="text"
                    name="name"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                
                <label>Url</label>
                <input
                    type="text"
                    name="url"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                
                <label>Type</label>
                <select
                    name="type"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                >
                    <option value="WA">WA</option>
                    <option value="TG">TG</option>
                    <option value="FB">FB</option>
                </select>
                
                <label>Description</label>
                <input
                    type="text"
                    name="description"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                
                <label>Purpose</label>
                <input
                    type="text"
                    name="purpose"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                
                <label>Creator</label>
                <input
                    type="text"
                    name="creator"
                    className="bg-secondary-50 mx-4 rounded-lg my-1"
                />
                <br></br>
                
                <input
                    type="submit"
                    value="Sign Up"
                    className="font-medium bg-primary-500 py-3 px-6 rounded-lg my-5"
                />
            </form>
        </div>
    );
}
