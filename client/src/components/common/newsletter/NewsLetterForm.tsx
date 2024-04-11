import { useState } from "react";
import { Mentor } from "../../types/Mentor";
import CustomInput from "../input/CustomInput";

export default function NewsLetterForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        skills: "",
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
                "http://localhost:5000/api/newsletter-users/",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            if (!response.ok) {
                throw new Error("Failed to create mentor");
            }
            setFormData({
                name: "",
                email: "",
                skills: "",
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
                />
                <CustomInput
                    value={formData.email}
                    handleInputChange={handleInputChange}
                    label="Email"
                />
                <CustomInput
                    value={formData.skills}
                    handleInputChange={handleInputChange}
                    label="Skills"
                />
                <input
                    type="submit"
                    value="Sign Up"
                    className="w-full font-medium bg-primary-600 hover:bg-primary-700 text-white py-3 px-6 rounded-lg mt-5 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 cursor-pointer"
                />
            </form>
        </div>
    );
}
