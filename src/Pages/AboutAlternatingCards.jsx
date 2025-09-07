import React from "react";
import aboutInfo from "../Data/AboutInfo";

const AboutAlternatingCards = () => {
    return (
        <section className="bg-[#fff2d9] py-16 px-4">
            <div className="space-y-20 max-w-7xl mx-auto">
                {aboutInfo.map((item, index) => (
                    <div
                        key={index}
                        className={`flex flex-col-reverse lg:flex-row ${index % 2 !== 0 ? "lg:flex-row-reverse" : ""
                            } items-center gap-10 bg-[#fee0a8] p-6 rounded-2xl shadow-md`}
                    >
                        {/* Text Content */}
                        <div className="w-full lg:w-1/2">
                            <h3 className="text-2xl font-bold text-blue-600 mb-4">
                                {item.title}
                            </h3>
                            {item.title === "Vision & Values" ? (
                                <div className="text-gray-700 whitespace-pre-line">{item.content}</div>
                            ) : (
                                <p className="text-gray-700">{item.content}</p>
                            )}
                        </div>

                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <img
                                src={item.img}
                                alt={item.title}
                                className="rounded-xl shadow-md object-cover w-full h-[300px] lg:h-[400px]"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default AboutAlternatingCards;
