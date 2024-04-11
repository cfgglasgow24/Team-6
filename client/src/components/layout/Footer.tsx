import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faFacebook,
    faTwitter,
    faInstagram,
    faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import React from "react";

const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    const CodeDivisionFooterLogoBase64 =
        "data:image/webp;base64,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";

    return (
        <footer className="bg-background-800 text-gray-300 py-8 mt-auto">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
                <div className="mb-4 md:mb-0 flex items-center">
                    <a
                        href="https://codedivision.co.uk/index"
                        className="hover:text-white"
                    >
                        <img
                            src={CodeDivisionFooterLogoBase64}
                            alt="Code Division Logo"
                            className="h-8 mr-2"
                        />
                    </a>
                    <span>
                        &copy; {currentYear} Code Division. All rights reserved.
                    </span>
                </div>
                <div className="flex space-x-4">
                    <a
                        href="https://www.facebook.com/codedivision.uk/"
                        className="hover:text-white flex items-center"
                    >
                        <FontAwesomeIcon icon={faFacebook} className="mr-1" />
                        Facebook
                    </a>
                    <a
                        href="https://twitter.com/codedivision_uk?lang=en"
                        className="hover:text-white flex items-center"
                    >
                        <FontAwesomeIcon icon={faTwitter} className="mr-1" />
                        Twitter
                    </a>
                    <a
                        href="https://www.instagram.com/codedivision.uk/"
                        className="hover:text-white flex items-center"
                    >
                        <FontAwesomeIcon icon={faInstagram} className="mr-1" />
                        Instagram
                    </a>
                    <a
                        href="https://www.linkedin.com/company/codedivision-uk/"
                        className="hover:text-white flex items-center"
                    >
                        <FontAwesomeIcon icon={faLinkedin} className="mr-1" />
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
