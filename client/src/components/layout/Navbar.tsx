import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="flex justify-between py-4 px-6 items-center">
            <div className="space-x-6">
                <Link
                    to="/"
                    className="text-secondary-500 hover:text-secondary-700"
                >
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
        </nav>
    );
}
