import { Link } from "react-router-dom";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaPhoneAlt,
    FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">

                {/* About */}
                <div>
                    <h2 className="text-lg font-semibold mb-4">📈 MSME Advisors</h2>
                    <p className="text-gray-400 text-sm">
                        We help small and medium businesses register, grow, and thrive with expert guidance on MSME schemes, funding, and compliance.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/" className="hover:text-indigo-400">Home</Link></li>
                        <li><Link to="/services" className="hover:text-indigo-400">Our Services</Link></li>
                        <li><Link to="/registration" className="hover:text-indigo-400">MSME Registration</Link></li>
                        <li><Link to="/about" className="hover:text-indigo-400">About Us</Link></li>
                        <li><Link to="/contact" className="hover:text-indigo-400">Contact</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-center gap-2">
                            <FaPhoneAlt /> +91 9876543210
                        </li>
                        <li className="flex items-center gap-2">
                            <FaMapMarkerAlt /> 456 Business Park, Delhi, India
                        </li>
                    </ul>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-indigo-500 transition">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-indigo-500 transition">
                            <FaInstagram />
                        </a>
                        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-indigo-500 transition">
                            <FaTwitter />
                        </a>
                        <a href="#" className="bg-gray-700 p-2 rounded-full hover:bg-indigo-500 transition">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} MSME Advisors — All Rights Reserved
            </div>
        </footer>
    );
}
