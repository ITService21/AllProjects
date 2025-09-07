import React from "react";
import teamMembers from "../Data/OurTeam";

const TeamSection = () => {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Team</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition flex flex-col items-center text-center w-full max-w-sm mx-auto"
                        >
                            <div className="w-70 h-56 overflow-hidden flex justify-center items-center">
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                                <p className="text-sm text-blue-600 font-medium mb-2">{member.role}</p>
                                <p className="text-gray-600 text-sm">{member.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
