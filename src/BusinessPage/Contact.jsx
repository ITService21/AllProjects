import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    // Enhanced animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const bounceIn = {
        hidden: {
            opacity: 0,
            y: -150,
            scale: 0.3,
            rotateZ: -15
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateZ: 0,
            transition: {
                duration: 1.5,
                ease: [0.68, -0.55, 0.265, 1.55],
                type: "spring",
                stiffness: 120,
                damping: 12
            }
        }
    };

    const slideInLeft = {
        hidden: {
            opacity: 0,
            x: -200,
            scale: 0.5,
            rotateY: -30
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 1.8,
                ease: [0.68, -0.55, 0.265, 1.55],
                type: "spring",
                stiffness: 90,
                damping: 18
            }
        }
    };

    const slideInRight = {
        hidden: {
            opacity: 0,
            x: 200,
            scale: 0.5,
            rotateY: 30
        },
        visible: {
            opacity: 1,
            x: 0,
            scale: 1,
            rotateY: 0,
            transition: {
                duration: 1.8,
                ease: [0.68, -0.55, 0.265, 1.55],
                type: "spring",
                stiffness: 90,
                damping: 18
            }
        }
    };

    return (
        <section className="relative py-20 px-4 overflow-hidden" style={{backgroundColor: '#FFFFFF'}}>
            {/* Unique Animated Background */}
            <div className="absolute inset-0">
                {/* Animated Mesh Background */}
                <motion.div
                    className="absolute inset-0 opacity-8"
                    animate={{
                        background: [
                            'radial-gradient(circle at 25% 25%, rgba(253, 87, 16, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)',
                            'radial-gradient(circle at 75% 25%, rgba(255, 107, 53, 0.08) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(253, 87, 16, 0.06) 0%, transparent 50%)',
                            'radial-gradient(circle at 25% 25%, rgba(253, 87, 16, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)'
                        ]
                    }}
                    transition={{
                        duration: 7,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                />

                {/* Floating Triangles */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute opacity-12"
                        style={{
                            width: `${30 + i * 8}px`,
                            height: `${30 + i * 8}px`,
                            background: `linear-gradient(45deg, #F85710, #FF6B35)`,
                            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                            left: `${8 + i * 11}%`,
                            top: `${15 + i * 8}%`,
                        }}
                        animate={{
                            x: [0, 70, -35, 0],
                            y: [0, -50, 25, 0],
                            rotate: [0, 120, 240, 360],
                            scale: [1, 1.3, 0.7, 1.1, 1],
                            opacity: [0.12, 0.25, 0.08, 0.18, 0.12]
                        }}
                        transition={{
                            duration: 8 + i * 1.2,
                            repeat: Infinity,
                            delay: i * 1.1,
                            ease: "easeInOut"
                        }}
                    />
                ))}

                {/* Animated Dots Pattern */}
                <motion.div 
                    className="absolute inset-0 opacity-5"
                    animate={{
                        backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(253, 87, 16, 0.3) 1px, transparent 0)`,
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Floating Squares with Bounce */}
                {[...Array(15)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 opacity-40"
                        animate={{
                            y: [0, -40, 0],
                            x: [0, 20, -10, 0],
                            scale: [0.8, 1.2, 0.9, 1.1, 0.8],
                            opacity: [0.4, 0.7, 0.2, 0.5, 0.4],
                            rotate: [0, 90, 180, 270, 360]
                        }}
                        transition={{
                            duration: 4 + i * 0.5,
                            repeat: Infinity,
                            delay: i * 0.4,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${2 + i * 6}%`,
                            top: `${10 + i * 5}%`,
                        }}
                    />
                ))}

                {/* Animated Zigzag Lines */}
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={`zigzag-${i}`}
                        className="absolute w-32 h-1 bg-gradient-to-r from-orange-400/20 to-red-400/20 opacity-0"
                        animate={{
                            opacity: [0, 0.6, 0],
                            scaleX: [0, 1, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.8,
                            ease: "easeInOut"
                        }}
                        style={{
                            left: `${15 + i * 20}%`,
                            top: `${20 + i * 15}%`,
                            transformOrigin: 'left center'
                        }}
                    />
                ))}
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Header Section */}
                <motion.div 
                    className="text-center mb-16"
                    variants={bounceIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ amount: 0.3 }}
                >
                    <motion.h2
                        className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
                        style={{fontFamily: 'Montserrat, sans-serif'}}
                        initial={{ opacity: 0, scale: 0.2, rotateZ: -20 }}
                        whileInView={{
                            opacity: 1,
                            scale: 1,
                            rotateZ: 0
                        }}
                        transition={{
                            duration: 1.8,
                            delay: 0.3,
                            ease: [0.68, -0.55, 0.265, 1.55],
                            type: "spring",
                            stiffness: 150,
                            damping: 10
                        }}
                        viewport={{ amount: 0.3 }}
                    >
                        <span className="text-gray-800">Get In</span>
                        <br />
                        <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
                        style={{fontFamily: 'Inter, sans-serif'}}
                        initial={{ opacity: 0, y: 30, scale: 0.8 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ 
                            duration: 1.2, 
                            delay: 0.6,
                            ease: [0.68, -0.55, 0.265, 1.55]
                        }}
                        viewport={{ amount: 0.3 }}
                    >
                        Ready to transform your business? Let's discuss how we can help you achieve your goals.
                    </motion.p>
                </motion.div>

            <motion.div
                    className="grid lg:grid-cols-2 gap-12"
                    variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                    viewport={{ amount: 0.2 }}
            >
                {/* Left Content */}
                    <motion.div 
                        variants={slideInLeft}
                        className="space-y-8"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            viewport={{ amount: 0.3 }}
                        >
                            <h3 className="text-3xl md:text-4xl font-black mb-6" style={{color: '#000000', fontFamily: 'Outfit, sans-serif'}}>
                                Let's Build Something 
                                <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent"> Amazing</span>
                    </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8" style={{fontFamily: 'Inter, sans-serif'}}>
                                We're here to support your business journey with comprehensive solutions, 
                                expert guidance, and 24/7 assistance. Reach out to us and let's create 
                                something extraordinary together.
                            </p>
                        </motion.div>

                                {/* Contact Information Cards - Smaller & More Animated */}
                                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                                    {[
                                        {
                                            icon: "📍",
                                            title: "Location",
                                            details: ["Ahmedabad, Gujarat"],
                                            color: "from-orange-500 to-red-500"
                                        },
                                        {
                                            icon: "📧",
                                            title: "Email",
                                            details: ["info@company.com"],
                                            color: "from-red-500 to-pink-500"
                                        },
                                        {
                                            icon: "📞",
                                            title: "Call",
                                            details: ["+91 98765 43210"],
                                            color: "from-pink-500 to-orange-500"
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-white rounded-xl p-4 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 group cursor-pointer relative overflow-hidden"
                                            whileHover={{
                                                scale: 1.1,
                                                y: -8,
                                                rotateZ: 2,
                                                transition: { 
                                                    duration: 0.4,
                                                    ease: [0.68, -0.55, 0.265, 1.55]
                                                }
                                            }}
                                            initial={{ opacity: 0, y: 100, scale: 0.5 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ 
                                                duration: 0.8, 
                                                delay: 0.4 + index * 0.15,
                                                ease: [0.68, -0.55, 0.265, 1.55]
                                            }}
                                            viewport={{ amount: 0.3 }}
                                        >
                                            {/* Animated Background */}
                                            <motion.div 
                                                className="absolute inset-0 rounded-xl"
                                                initial={{ 
                                                    background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)'
                                                }}
                                                whileHover={{
                                                    background: [
                                                        `linear-gradient(135deg, rgba(253,87,16,0.05) 0%, rgba(255,107,53,0.03) 50%, rgba(255,255,255,1) 100%)`,
                                                        `linear-gradient(135deg, rgba(255,107,53,0.05) 0%, rgba(253,87,16,0.03) 50%, rgba(255,255,255,1) 100%)`,
                                                        `linear-gradient(135deg, rgba(253,87,16,0.05) 0%, rgba(255,107,53,0.03) 50%, rgba(255,255,255,1) 100%)`
                                                    ]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    ease: "easeInOut"
                                                }}
                                            />
                                            
                                            <div className="relative z-10 text-center">
                                                <motion.div
                                                    className={`w-10 h-10 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center text-white text-lg shadow-lg mx-auto mb-3`}
                                                    animate={{
                                                        rotate: [0, 10, -10, 0],
                                                        scale: [1, 1.1, 1],
                                                        boxShadow: [
                                                            '0 4px 15px rgba(253, 87, 16, 0.3)',
                                                            '0 8px 25px rgba(253, 87, 16, 0.4)',
                                                            '0 4px 15px rgba(253, 87, 16, 0.3)'
                                                        ]
                                                    }}
                                                    transition={{
                                                        duration: 2.5,
                                                        repeat: Infinity,
                                                        delay: index * 0.3
                                                    }}
                                                >
                                                    {item.icon}
                                                </motion.div>
                                                <h4 className="text-sm font-bold text-gray-800 mb-1" style={{fontFamily: 'Outfit, sans-serif'}}>
                                                    {item.title}
                                                </h4>
                                                {item.details.map((detail, i) => (
                                                    <p key={i} className="text-xs text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                                                        {detail}
                                                    </p>
                                                ))}
                                            </div>
                                            
                                            {/* Decorative Corner */}
                                            <motion.div 
                                                className="absolute top-2 right-2 w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-0 group-hover:opacity-100"
                                                animate={{
                                                    scale: [0, 1, 0],
                                                    opacity: [0, 1, 0]
                                                }}
                                                transition={{
                                                    duration: 2,
                                                    repeat: Infinity,
                                                    delay: index * 0.5
                                                }}
                                            />
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Helpful Information Section */}
                                <motion.div
                                    className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
                                    initial={{ opacity: 0, y: 50 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 0.6 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    {[
                                        {
                                            icon: "🕐",
                                            title: "24/7 Available",
                                            description: "Round the clock support"
                                        },
                                        {
                                            icon: "⚡",
                                            title: "Quick Response",
                                            description: "Within 2 hours"
                                        },
                                        {
                                            icon: "🎯",
                                            title: "Expert Guidance",
                                            description: "Professional consultation"
                                        },
                                        {
                                            icon: "🔒",
                                            title: "Secure & Private",
                                            description: "Your data is safe"
                                        }
                                    ].map((item, index) => (
                                        <motion.div
                                            key={index}
                                            className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-4 border border-orange-100 hover:border-orange-200 transition-all duration-300 group"
                                            whileHover={{
                                                scale: 1.05,
                                                y: -3,
                                                transition: { duration: 0.3 }
                                            }}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            whileInView={{ opacity: 1, scale: 1 }}
                                            transition={{ 
                                                duration: 0.6, 
                                                delay: 0.8 + index * 0.1,
                                                ease: [0.68, -0.55, 0.265, 1.55]
                                            }}
                                            viewport={{ amount: 0.3 }}
                                        >
                                            <div className="text-center">
                                                <motion.div
                                                    className="text-2xl mb-2"
                                                    animate={{
                                                        rotate: [0, 10, -10, 0],
                                                        scale: [1, 1.1, 1]
                                                    }}
                                                    transition={{
                                                        duration: 3,
                                                        repeat: Infinity,
                                                        delay: index * 0.5
                                                    }}
                                                >
                                                    {item.icon}
                                                </motion.div>
                                                <h4 className="text-sm font-bold text-gray-800 mb-1" style={{fontFamily: 'Outfit, sans-serif'}}>
                                                    {item.title}
                                                </h4>
                                                <p className="text-xs text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                                                    {item.description}
                                                </p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </motion.div>

                                {/* Additional Information */}
                                <motion.div
                                    className="mt-6 bg-gradient-to-r from-gray-50 to-orange-50 rounded-xl p-6 border border-gray-200"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.8, delay: 1.2 }}
                                    viewport={{ amount: 0.3 }}
                                >
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-3" style={{fontFamily: 'Outfit, sans-serif'}}>
                                                🌟 Why Choose Us?
                                            </h4>
                                            <ul className="space-y-2 text-sm text-gray-600" style={{fontFamily: 'Inter, sans-serif'}}>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                    Free initial consultation
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                    Experienced team of experts
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                    Customized solutions
                                                </li>
                                                <li className="flex items-center">
                                                    <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                                                    Proven track record
                                                </li>
                    </ul>
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-gray-800 mb-3" style={{fontFamily: 'Outfit, sans-serif'}}>
                                                📞 Get Started Today
                                            </h4>
                                            <p className="text-sm text-gray-600 mb-4" style={{fontFamily: 'Inter, sans-serif'}}>
                                                Ready to take your business to the next level? Contact us now for a free consultation and let's discuss your requirements.
                                            </p>
                                            <div className="flex flex-wrap gap-2">
                                                <span className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-xs font-semibold">
                                                    Free Consultation
                                                </span>
                                                <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-semibold">
                                                    Quick Response
                                                </span>
                                                <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-semibold">
                                                    Expert Support
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    variants={slideInRight}
                    className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100 relative overflow-hidden"
                    whileHover={{
                        scale: 1.02,
                        y: -5,
                        transition: { 
                            duration: 0.5,
                            ease: [0.68, -0.55, 0.265, 1.55]
                        }
                    }}
                >
                    {/* Form Background Effect */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl"
                        initial={{
                            background: 'linear-gradient(135deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 100%)'
                        }}
                        whileHover={{
                            background: [
                                'linear-gradient(135deg, rgba(253,87,16,0.03) 0%, rgba(255,107,53,0.02) 50%, rgba(255,255,255,1) 100%)',
                                'linear-gradient(135deg, rgba(255,107,53,0.03) 0%, rgba(253,87,16,0.02) 50%, rgba(255,255,255,1) 100%)',
                                'linear-gradient(135deg, rgba(253,87,16,0.03) 0%, rgba(255,107,53,0.02) 50%, rgba(255,255,255,1) 100%)'
                            ]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                    />
                        
                        <div className="relative z-10">
                            <motion.h3 
                                className="text-2xl md:text-3xl font-black mb-8" 
                                style={{color: '#000000', fontFamily: 'Outfit, sans-serif'}}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ amount: 0.3 }}
                            >
                                Send Us a Message
                            </motion.h3>
                            
                            <form className="space-y-6">
                                        {[
                                            { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
                                            { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter your email' },
                                            { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter your phone number' },
                                            { name: 'company', label: 'Company Name', type: 'text', placeholder: 'Enter your company name' }
                                        ].map((field, index) => (
                                            <motion.div
                                                key={field.name}
                                                whileHover={{ 
                                                    scale: 1.05,
                                                    y: -2,
                                                    transition: { 
                                                        duration: 0.3,
                                                        ease: [0.68, -0.55, 0.265, 1.55]
                                                    }
                                                }}
                                                initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                                transition={{ 
                                                    duration: 0.8, 
                                                    delay: 0.3 + index * 0.1,
                                                    ease: [0.68, -0.55, 0.265, 1.55]
                                                }}
                                                viewport={{ amount: 0.3 }}
                                            >
                                                <label className="block text-gray-700 text-sm font-semibold mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                                                    {field.label}
                            </label>
                                                <motion.input
                                                    type={field.type}
                                                    name={field.name}
                                                    value={formData[field.name]}
                                                    onChange={handleInputChange}
                                                    placeholder={field.placeholder}
                                                    className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:ring-0 focus:border-orange-500 focus:outline-none transition-all duration-300 bg-gradient-to-r from-gray-50 to-white focus:from-white focus:to-orange-50 shadow-sm focus:shadow-lg relative"
                                                    whileFocus={{
                                                        scale: 1.02,
                                                        boxShadow: "0 0 0 4px rgba(253, 87, 16, 0.15), 0 0 20px rgba(253, 87, 16, 0.1)",
                                                        transition: { duration: 0.2 }
                                                    }}
                                                    whileHover={{
                                                        borderColor: "#F85710",
                                                        boxShadow: "0 4px 12px rgba(253, 87, 16, 0.1), 0 0 0 2px rgba(253, 87, 16, 0.1)",
                                                        transition: { duration: 0.2 }
                                                    }}
                            />
                        </motion.div>
                                        ))}

                                        <motion.div
                                            whileHover={{ 
                                                scale: 1.05,
                                                y: -2,
                                                transition: { 
                                                    duration: 0.3,
                                                    ease: [0.68, -0.55, 0.265, 1.55]
                                                }
                                            }}
                                            initial={{ opacity: 0, x: 50, scale: 0.8 }}
                                            whileInView={{ opacity: 1, x: 0, scale: 1 }}
                                            transition={{ 
                                                duration: 0.8, 
                                                delay: 0.7,
                                                ease: [0.68, -0.55, 0.265, 1.55]
                                            }}
                                            viewport={{ amount: 0.3 }}
                                        >
                                            <label className="block text-gray-700 text-sm font-semibold mb-2" style={{fontFamily: 'Inter, sans-serif'}}>
                                Message
                            </label>
                                            <motion.textarea
                                                name="message"
                                                value={formData.message}
                                                onChange={handleInputChange}
                                                placeholder="Tell us about your project or requirements..."
                                rows="4"
                                                className="w-full px-4 py-3 rounded-xl border-2 border-orange-300 focus:ring-0 focus:border-orange-500 focus:outline-none transition-all duration-300 bg-gradient-to-r from-gray-50 to-white focus:from-white focus:to-orange-50 shadow-sm focus:shadow-lg resize-none relative"
                                                whileFocus={{
                                                    scale: 1.02,
                                                    boxShadow: "0 0 0 4px rgba(253, 87, 16, 0.15), 0 0 20px rgba(253, 87, 16, 0.1)",
                                                    transition: { duration: 0.2 }
                                                }}
                                                whileHover={{
                                                    borderColor: "#F85710",
                                                    boxShadow: "0 4px 12px rgba(253, 87, 16, 0.1), 0 0 0 2px rgba(253, 87, 16, 0.1)",
                                                    transition: { duration: 0.2 }
                                                }}
                                            />
                        </motion.div>

                        <motion.button
                            type="submit"
                                            whileHover={{
                                                scale: 1.1,
                                                y: -3,
                                                boxShadow: "0 25px 50px rgba(253, 87, 16, 0.4)",
                                                transition: { 
                                                    duration: 0.4,
                                                    ease: [0.68, -0.55, 0.265, 1.55]
                                                }
                                            }}
                                            whileTap={{ 
                                                scale: 0.9,
                                                y: 0
                                            }}
                                            className="w-full py-4 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-bold rounded-xl shadow-lg transition-all duration-300 text-lg relative overflow-hidden"
                                            style={{fontFamily: 'Inter, sans-serif'}}
                                            initial={{ opacity: 0, y: 50, scale: 0.5 }}
                                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                                            transition={{ 
                                                duration: 1, 
                                                delay: 0.8,
                                                ease: [0.68, -0.55, 0.265, 1.55]
                                            }}
                                            viewport={{ amount: 0.3 }}
                                        >
                                            <motion.span
                                                animate={{
                                                    x: [0, 5, 0],
                                                    transition: {
                                                        duration: 2,
                                                        repeat: Infinity,
                                                        ease: "easeInOut"
                                                    }
                                                }}
                                            >
                                                Send Message →
                                            </motion.span>
                        </motion.button>
                    </form>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default ContactSection;
