import React from "react";
import { motion } from "framer-motion";

const TeamSection = () => {
    const teamRoles = ["Founder", "Director", "CTO"];

    // Variants for animation
    const cardVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1 },
    };

    return (
        <section className="py-20 bg-[#f0eadd] px-6">
            <motion.h2
                className="text-4xl font-extrabold text-center mb-12 text-[#ac4841]"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.3 }}
            >
                👥 Meet Our Team
            </motion.h2>

            <div className="grid md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {teamRoles.map((role, idx) => (
                    <motion.div
                        key={idx}
                        className="bg-white rounded-3xl shadow-xl p-8 text-center cursor-pointer"
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 0.2004, delay: idx * 0.2 }}
                        whileHover={{ scale: 1.08 }}
                    >
                        <img
                            src="https://images.pexels.com/photos/3184295/pexels-photo-3184295.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop"
                            alt={role}
                            className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-blue-100 shadow-md"
                        />
                        <h3 className="text-xl font-semibold text-gray-900">Name Here</h3>
                        <p className="text-gray-600">{role}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default TeamSection;
