import { Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import DictionaryPage from "./pages/DictionaryPage";
import CVPage from "./pages/CVPage";
import SocialMediaGroups from "./pages/SocialMediaGroups";
import MentorsPage from "./pages/MentorsPage";
import QuestionsPage from "./pages/QuestionsPage";

import NewsLetterPage from "./pages/NewsLetterPage";


export default function App() {
    return (
        <div className="flex flex-col min-h-[98vh]">
            <Navbar />
            <div className="flex-grow">
                <Routes>
                    <Route path="/" Component={HomePage} />
                    <Route
                        path="/materials/dictionary"
                        Component={DictionaryPage}
                    />
                    <Route path="/materials/cv-template" Component={CVPage} />
                    <Route path="/mentors" Component={MentorsPage} />

                    <Route path="/questionspage" Component={QuestionsPage} />
                  
                    <Route
                        path="/social-media-groups"
                        Component={SocialMediaGroups}
                    />
                    <Route path="/newsletter" Component={NewsLetterPage} />
                    <Route path="*" Component={NotFoundPage} />
                </Routes>
            </div>
            <Footer />
        </div>
    );
}
