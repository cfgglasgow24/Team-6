import { useState } from "react";
import { UserType } from "../types/UserType";
import { Link } from "react-router-dom";

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
    <nav className="flex justify-between py-4 px-6 items-center">
      <div className="space-x-6">
        <Link to="/" className="text-secondary-500 hover:text-secondary-700">
          Home
        </Link>
        <Link
          to="/events"
          className="text-secondary-500 hover:text-secondary-700"
        >
          Events
        </Link>
        <Link
          to="/mentors"
          className="text-secondary-500 hover:text-secondary-700"
        >
          Mentors
        </Link>
        <Link
          to="/social-media-groups"
          className="text-secondary-500 hover:text-secondary-700"
        >
          Social Media Groups
        </Link>
      </div>
      <div>
        <button
          onClick={() => handleUserTypeSelect(UserType.COMPANY)}
          className="px-4 py-2 text-white bg-secondary-500 rounded hover:bg-secondary-700 transition-colors duration-200 ease-in-out"
        >
          Switch to company
        </button>
      </div>
    </nav>
  );
}

function CompanyNavbar({ handleUserTypeSelect }: NavBarComponentProps) {
  return (
    <nav className="flex justify-between py-4 px-6 items-center">
      <div className="space-x-6">
        <Link to="/" className="hover:text-secondary-700">
          Home
        </Link>
        <Link to="/events" className="hover:text-secondary-700">
          Events
        </Link>
        <Link to="/questionspage" className="hover:text-secondary-700">
          Interview Prep
        </Link>
        <Link to="/mentors" className="hover:text-secondary-700">
          Mentorship Opportunities
        </Link>
      </div>
      <div>
        <button
          onClick={() => handleUserTypeSelect(UserType.REFUGEE)}
          className="px-4 py-2 text-white bg-secondary-500 rounded hover:bg-secondary-700 transition-colors duration-200 ease-in-out"
        >
          Switch to refugee
        </button>
      </div>
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
