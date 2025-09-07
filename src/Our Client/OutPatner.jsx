import React from "react";
import ourpatner from "../Data/OutPatner";

const OurPatner = () => {
    return (
        <section className="bg-[#f5efe3] bg-gradient-to-br py-20 px-4">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-16 tracking-tight">
                    Our Partners
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                    {ourpatner.map((client, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition-all transform hover:-translate-y-1 duration-300 p-6 flex flex-col items-center justify-center"
                        >
                            <div className="h-32 w-full flex items-center justify-center mb-4">
                                <img
                                    src={client.image}
                                    alt={client.name}
                                    className="h-28 w-auto max-w-full object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold text-gray-700 text-center">
                                {client.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default OurPatner;
