interface CustomInputProps {
    value: string;
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
    type: string;
}

export default function CustomInput({
    value,
    handleInputChange,
    label,
    type,
}: CustomInputProps) {
    const id = label.toLowerCase().replace(" ", "");
    return (
        <div>
            <label
                htmlFor={id}
                className="block text-sm font-medium text-gray-700"
            >
                {label}
            </label>
            <input
                type={type}
                name={id}
                id={id}
                value={value}
                onChange={handleInputChange}
                className="mt-1 block w-full px-4 py-2 bg-secondary-50 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
            />
        </div>
    );
}
