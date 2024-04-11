import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import EventsPage from "./pages/EventsPage";

export default function App() {
    return (
        <div className="flex flex-col min-h-[98vh]">
            <Navbar />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route path="/events" Component={EventsPage} />
                    <Route path="*" Component={NotFoundPage} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
