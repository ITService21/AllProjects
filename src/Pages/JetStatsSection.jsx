import React from "react";
import CountUp from "react-countup";
import CounterSection from "../Components/CounterSection";
const stats = [
    { number: 95, label: "Professional Pilots" },
    { number: 68, label: "Jet Airplanes" },
    { number: 290, label: "World Airports" },
    { number: 195, label: "Directions" },
];

function JetStatsSection() {
    return (
 <>        
 {/* <section className="py-16 px-4 bg-white">
 <div className="container mx-auto max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
     {stats.map((item, index) => (
         <div key={index} className="flex flex-col items-center">
             <h3 className="text-4xl font-bold text-blue-600 mb-2">
                 <CountUp end={item.number} duration={2} />
             </h3>
             <p className="text-gray-700 text-base">{item.label}</p>
         </div>
     ))}
 </div>
</section> */}
<div><CounterSection/></div>
</>
    );
}

export default JetStatsSection;

// Install :- npm install react-countup

