import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import { API_ENDPOINTS } from "../config/api";
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
    const [processing, setProcessing] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setErrorMsg('');
        // Simple email validation
        if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,}$/.test(email)) {
            toast.error('Please enter a valid email address.');
            setIsSubscribed(false);
            return;
        }
        setProcessing(true);
        try {
            const res = await fetch(API_ENDPOINTS.SEND_FORM_MAIL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    to: "info@growstartup.in",
                    subject: "Newsletter signup",
                    fields: {
                        Email: email
                    }
                })
            });
            if (res.ok) {
                setIsSubscribed(true);
                toast.success('Thank you for subscribing! We\'ll send you monthly updates.');
                setEmail('');
                setTimeout(() => setIsSubscribed(false), 10000); // Show message for 10 seconds
            } else {
                toast.error('An error occurred. Please try again.');
                setIsSubscribed(false);
            }
        } catch {
            toast.error('An error occurred. Please try again.');
            setIsSubscribed(false);
        } finally {
            setProcessing(false);
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
                                disabled={processing || isSubscribed}
                                className="bg-[#F85710] text-white px-6 py-3 rounded-lg font-semibold text-sm hover:bg-[#E04A0E] transition-colors duration-200 flex items-center justify-center gap-2 whitespace-nowrap shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {processing ? 'Processing...' : isSubscribed ? '✓ Subscribed!' : 'Subscribe'}
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

            <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">

                {/* About */}
                <div className="col-span-2 md:col-span-1 lg:col-span-1">
                    <h2 className="text-lg font-semibold mb-4 text-center md:text-left">📈 Growstartup Advisors</h2>
                    <p className="text-gray-400 text-sm">
                        We help small and medium businesses register, grow, and thrive with expert guidance on MSME schemes, funding, and compliance.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/" className="hover:text-indigo-400 transition-colors">Home</Link></li>
                        <li><Link to="/about-us/overview" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
                        <li><Link to="/services/all" className="hover:text-indigo-400 transition-colors">Services</Link></li>
                        {/* <li><Link to="/about-us/certifications" className="hover:text-indigo-400 transition-colors">Certifications</Link></li> */}
                        {/* <li><Link to="/about-us/partners" className="hover:text-indigo-400 transition-colors">Partners</Link></li> */}
                        <li><Link to="/contact-us" className="hover:text-indigo-400 transition-colors">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Our Services</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/services/funding" className="hover:text-indigo-400 transition-colors">Funding Consultant</Link></li>
                        <li><Link to="/services/certificate" className="hover:text-indigo-400 transition-colors">Certificate Consultant</Link></li>
                        <li><Link to="/services/marketing" className="hover:text-indigo-400 transition-colors">Marketing Services</Link></li>
                        <li><Link to="/services/legal" className="hover:text-indigo-400 transition-colors">Legal Services</Link></li>
                    </ul>
                </div>

                {/* Resources */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Resources</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li><Link to="/blog" className="hover:text-indigo-400 transition-colors">Blog</Link></li>
                        <li><Link to="/gallery/albums" className="hover:text-indigo-400 transition-colors">Gallery</Link></li>
                        {/* <li><Link to="/gallery/videos" className="hover:text-indigo-400 transition-colors">Videos</Link></li> */}
                        {/* <li><Link to="/about-us/mission-vision" className="hover:text-indigo-400 transition-colors">Mission & Vision</Link></li> */}
                        {/* <li><Link to="/about-us/ourteam" className="hover:text-indigo-400 transition-colors">Our Team</Link></li> */}
                        <li><Link to="/about-us/certifications" className="hover:text-indigo-400 transition-colors">Certifications</Link></li>
                        <li><Link to="/about-us/partners" className="hover:text-indigo-400 transition-colors">Partners</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h3 className="text-lg font-semibold mb-4">Contact</h3>
                    <ul className="space-y-2 text-gray-400 text-sm">
                        <li className="flex items-start gap-2">
                            <FaPhoneAlt className="mt-1 flex-shrink-0" /> 
                            <a href="tel:+917383930301" className="hover:text-indigo-400 transition-colors">+91 7383930301</a>
                        </li>
                        <li className="flex items-start gap-2">
                            <FaMapMarkerAlt className="mt-1 flex-shrink-0" /> 
                            <span>B1/606, The landmark, Sector 6 (Kudasan), Gandhinagar, Gujarat 382419</span>
                        </li>
                    </ul>
                    <div className="mt-4">
                        <h4 className="text-md font-semibold mb-3">Follow Us</h4>
                        <div className="flex space-x-3">
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
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} Growstartup Advisors  — All Rights Reserved
            </div>
        </footer>
    );
}
