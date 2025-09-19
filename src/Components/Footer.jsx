import { Link } from "react-router-dom";
import { useState } from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedinIn,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        // Simple email validation
        if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
            setErrorMsg('Please enter a valid email address.');
            setIsSubscribed(false);
            return;
        }
        try {
            await fetch('http://194.164.150.8:5000/send-form-mail', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    smtp: {
                        host: "mail.piwebtechnology.com",
                        port: 587,
                        secure: false,
                        user: "admin@piwebtechnology.com",
                        pass: "751821@Ss"
                    },
                    to: "admin@piwebtechnology.com",
                    subject: "Newsletter signup",
                    fields: {
                        email: email
                    }
                })
            });
            setIsSubscribed(true);
            setEmail('');
            setTimeout(() => setIsSubscribed(false), 10000); // Show message for 10 seconds
        } catch {
            setErrorMsg('Subscription failed. Please try again later.');
            setIsSubscribed(false);
        }
    };

    return (
        <footer className="bg-gray-900 text-white py-10">
            {/* Newsletter Subscription Section */}
            <div className="max-w-6xl mx-auto px-4 mb-8">
                <div className="rounded-2xl p-6 md:p-8 border border-white/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                        <div className="flex-1">
                            <h3 className="text-xl md:text-2xl font-bold mb-2 flex items-center gap-2 text-white">
                                <FaEnvelope className="text-[#F85710]" />
                                Stay Updated with Our Newsletter
                            </h3>
                            <p className="text-white/80 text-sm">
                                Subscribe to our newsletter and get monthly updates on MSME schemes, funding opportunities, and business growth tips.
                            </p>
                        </div>
                        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                            <div className="relative flex-1">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email address"
                                    className="w-full px-4 py-3 pr-12 rounded-lg border-0 text-gray-900 placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-[#F85710]"
                                    required
                                />
                                <FaEnvelope className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm" />
                            </div>
                            <button
                                type="submit"
                                className="bg-[#F85710] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#E04A0E] transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl"
                            >
                                {isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
                            </button>
                        </form>
                    </div>
                    {errorMsg && (
                        <div className="mt-4 text-center">
                            <p className="text-red-400 text-sm">{errorMsg}</p>
                        </div>
                    )}
                    {isSubscribed && (
                        <div className="mt-4 text-center">
                            <p className="text-white/90 text-sm">
                                        Thank you for subscribing! We&apos;ll send you monthly updates on our offers and MSME opportunities.
                            </p>
                        </div>
                    )}
                </div>
            </div>

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
