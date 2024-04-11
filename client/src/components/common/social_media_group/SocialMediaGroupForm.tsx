import { useState } from "react";
import { SocialMediaGroup } from "../../types/SocialMediaGroup";
import CustomInput from "../input/CustomInput";

interface SocialMediaGroupFormProps {
    onFormSubmit: (group: SocialMediaGroup) => void;
}

export default function SocialMediaGroupForm({
    onFormSubmit,
}: SocialMediaGroupFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        url: "",
        description: "",
        purpose: "",
        creator: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            const response = await fetch(
                "http://localhost:5000/api/social-media-groups/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );

            if (!response.ok) {
                throw new Error("Failed to create social media group");
            }

            const responseData = (await response.json()) as SocialMediaGroup;
            onFormSubmit(responseData);

            setFormData({
                name: "",
                url: "",
                description: "",
                purpose: "",
                creator: "",
            });
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg py-8 px-8 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <CustomInput
                    value={formData.name}
                    handleInputChange={handleInputChange}
                    label="Name"
                    type="text"
                />
                <CustomInput
                    value={formData.url}
                    handleInputChange={handleInputChange}
                    label="Url"
                    type="text"
                />
                <CustomInput
                    value={formData.description}
                    handleInputChange={handleInputChange}
                    label="Description"
                    type="text"
                />
                <CustomInput
                    value={formData.purpose}
                    handleInputChange={handleInputChange}
                    label="Purpose"
                    type="text"
                />
                <CustomInput
                    value={formData.creator}
                    handleInputChange={handleInputChange}
                    label="Creator"
                    type="text"
                />
                <input
                    type="submit"
                    value="Add Social Media Group"
                    className="w-full font-medium bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg mt-5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 cursor-pointer"
                />
            </form>
        </div>
    );
}
