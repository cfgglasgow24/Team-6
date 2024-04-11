import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav className="w-full py-4 px-6 mx-auto flex items-center justify-between relative">
            <div className="absolute left-6 top-1/2 transform -translate-y-1/2">
                <img
                    src="/assets/Code Division Logo.png"
                    alt="Code Division"
                    className="h-[40px]"
                ></img>
            </div>
            <div className="flex justify-center mx-auto space-x-10">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/mentors">Mentorship Opportunities</NavLink>
                <NavLink to="/materials/cv-template">CV Template</NavLink>
                <NavLink to="/materials/dictionary">Dictionary</NavLink>
                <NavLink to="/questionspage">Interview Prep</NavLink>
                <NavLink to="/social-media-groups">Social Media Groups</NavLink>
                <NavLink to="/newsletter">Newsletter</NavLink>
            </div>
        </nav>
    );
}

interface NavLinkProps {
    to: string;
    children: React.ReactNode;
}

function NavLink({ to, children }: NavLinkProps) {
    return (
        <Link to={to} className="text-gray-600 hover:text-gray-800 text-lg">
            {children}
        </Link>
    );

}
