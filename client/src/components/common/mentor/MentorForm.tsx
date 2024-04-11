import { useState } from "react";
import { Mentor } from "../../types/Mentor";

interface MentorFormProps {
    onSubmit: (mentor: Mentor) => void;
}

export default function MentorForm({ onSubmit }: MentorFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        skills: "",
        phoneNumber: "",
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            console.log(formData);
            const response = await fetch("http://localhost:5000/api/mentors/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            const responseData = (await response.json()) as Mentor;
            onSubmit(responseData);
        } catch (error) {
            console.error("Error submitting form:", error);
        }
    };

    return (
        <div className="bg-white shadow-lg rounded-lg py-8 px-8 max-w-md mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-4 py-2 bg-secondary-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-4 py-2 bg-secondary-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="skills"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Skills
                    </label>
                    <input
                        type="text"
                        name="skills"
                        id="skills"
                        value={formData.skills}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-4 py-2 bg-secondary-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                </div>
                <div>
                    <label
                        htmlFor="phoneNumber"
                        className="block text-sm font-medium text-gray-700"
                    >
                        Phone Number
                    </label>
                    <input
                        type="text"
                        name="phoneNumber"
                        id="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        className="mt-1 block w-full px-4 py-2 bg-secondary-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
                    />
                </div>

                <input
                    type="submit"
                    value="Sign Up"
                    className="w-full font-medium bg-primary-500 text-white py-3 px-6 rounded-lg mt-5 hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 cursor-pointer"
                />
            </form>
        </div>
    );
}
