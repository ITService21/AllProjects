import React from "react";

const AwardPage = () => {
    return (
        <section className="py-16 bg-white px-6">
            <h2 className="text-4xl font-extrabold text-center mb-12 text-gray-900">
                🏆 Awards & Recognition
            </h2>

            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
                {/* Award 1 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="flex flex-col items-center md:flex-row">
                        {/* Left Image */}
                        <img
                            src="./image/award.jpg"
                            alt="Award 1"
                            className="w-full md:w-1/2 h-72 object-cover"
                        />

                        {/* Right Content */}
                        <div className="p-6 flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Honored for MSME Support
                            </h3>
                            <p className="text-gray-700">
                                By{" "}
                                <span className="font-bold text-red-600">Shri. Piyush Goyal</span>
                                <br />
                                <span className="text-sm text-gray-500">
                                    Minister of Commerce and Industry
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                {/* Award 2 */}
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden border">
                    <div className="flex flex-col items-center md:flex-row">
                        {/* Left Image */}
                        <img
                            src="./image/award.jpg"
                            alt="Award 2"
                            className="w-full md:w-1/2 h-72 object-cover"
                        />

                        {/* Right Content */}
                        <div className="p-6 flex-1 text-center md:text-left">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                Excellence in Building the MSME Ecosystem
                            </h3>
                            <p className="text-gray-700">
                                By{" "}
                                <span className="font-bold text-red-600">
                                    Shri Bhupendrabhai Patel
                                </span>
                                <br />
                                <span className="text-sm text-gray-500">
                                    Chief Minister of Gujarat
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AwardPage;
