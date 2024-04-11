import { useState } from "react";
import { UserType } from "../types/UserType";

interface NavBarComponentProps {
    handleUserTypeSelect: (userType: UserType) => void;
}

export default function Navbar() {
    const [userType, setUserType] = useState<UserType>(() => {
        const storedUserType = localStorage.getItem("userType");
        return storedUserType ? JSON.parse(storedUserType) : null;
    });

    function handleUserTypeSelect(userType: UserType) {
        setUserType(userType);
        localStorage.setItem("userType", JSON.stringify(userType));
    }

    if (userType === UserType.REFUGEE) {
        return <RefugeeNavbar handleUserTypeSelect={handleUserTypeSelect} />;
    } else if (userType === UserType.COMPANY) {
        return <CompanyNavbar handleUserTypeSelect={handleUserTypeSelect} />;
    } else {
        return <GetUserTypePopup handleUserTypeSelect={handleUserTypeSelect} />;
    }
}

function RefugeeNavbar({ handleUserTypeSelect }: NavBarComponentProps) {
    return (
        <nav>
            <div>Refugee Navbar</div>
            <button onClick={() => handleUserTypeSelect(UserType.COMPANY)}>
                Switch to Company
            </button>
        </nav>
    );
}

function CompanyNavbar({ handleUserTypeSelect }: NavBarComponentProps) {
    return (
        <nav>
            <div>Company Navbar</div>
            <button onClick={() => handleUserTypeSelect(UserType.REFUGEE)}>
                Switch to Company
            </button>
        </nav>
    );
}

function GetUserTypePopup({ handleUserTypeSelect }: NavBarComponentProps) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <UserTypePopUpButton
                    userType={UserType.REFUGEE}
                    setUserType={handleUserTypeSelect}
                />
                <UserTypePopUpButton
                    userType={UserType.COMPANY}
                    setUserType={handleUserTypeSelect}
                />
            </div>
        </div>
    );
}

interface UserTypePopUpButtonProps {
    userType: UserType;
    setUserType: (userType: UserType) => void;
}

function UserTypePopUpButton({
    userType,
    setUserType,
}: UserTypePopUpButtonProps) {
    return (
        <button
            onClick={() => setUserType(userType)}
            className="bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-2 px-4 mr-2 rounded focus:outline-none focus:shadow-outline"
        >
            {userType}
        </button>
    );
}
