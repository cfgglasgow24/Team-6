import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import SocialMediaGroups from "./pages/SocialMediaGroups";
import EventsPage from "./pages/EventsPage";
import MentorsPage from "./pages/MentorsPage";


export default function App() {
    return (
        <div className="flex flex-col min-h-[98vh]">
            <Navbar />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/mentors" Component={MentorsPage} />
                    <Route path="/events" Component={EventsPage} />
                    <Route path="*" Component={NotFoundPage} />
                    <Route
                        path="/social-media-groups"
                        Component={SocialMediaGroups}
                    />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
