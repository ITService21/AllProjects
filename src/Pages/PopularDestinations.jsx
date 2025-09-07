import { ArrowLeft, ArrowRight } from "lucide-react";

const PopularDestinations = () => {
  return (
    <section className="bg-[#131424] text-white py-20 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Content */}
        <div>
          <h4 className="text-xl font-semibold text-[#d2c5a1]">
            What will you get
          </h4>
          <h2 className="text-4xl font-bold mt-2">
            <span className="text-[#b42b33]">Reliable</span> Aerospace Solutions
          </h2>
          <p className="text-gray-300 mt-6 leading-relaxed">
            Partnering with RSR Aviation means access to certified aerospace
            consumables, timely deliveries, and unmatched customer service. Our
            ISO-certified processes and government registrations ensure full
            compliance and reliability in every transaction, supporting your
            operations without delays.
          </p>
          <a
            href="#"
            className="inline-block mt-8 text-[#d2c5a1] font-bold border-b-2 border-[#d2c5a1]"
          >
            READ MORE
          </a>
        </div>

        {/* Right Cards Section spans 2 columns on large screens */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6 overflow-x-auto sm:overflow-visible no-scrollbar">
          {/* Card 1 */}
          <div
            className="relative rounded-2xl h-[400px] bg-cover bg-center"
            style={{ backgroundImage: "url('/Destination/d1.jpg')" }}
          >
            <div className="absolute bottom-6 left-6 right-6 bg-white bg-opacity-90 p-4 rounded-xl text-black">
              <h3 className="text-xl font-bold">Paris – Barcelona</h3>
              <p className="mt-2">
                Departure: <span className="font-bold">17:50</span> &nbsp;&nbsp;
                Arrival: <span className="font-bold">20:42</span>
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative rounded-2xl h-[400px] bg-cover bg-center"
            style={{ backgroundImage: "url('/Destination/d2.jpg')" }}
          >
            <div className="absolute bottom-6 left-6 right-6 bg-white bg-opacity-90 p-4 rounded-xl text-black">
              <h3 className="text-xl font-bold">London – Madrid</h3>
              <p className="mt-2">
                Departure: <span className="font-bold">17:50</span> &nbsp;&nbsp;
                Arrival: <span className="font-bold">20:42</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Arrows */}
      <div className="flex gap-4 justify-center mt-12">
        <button className="bg-[#2e2f40] hover:bg-[#3d3f55] p-4 rounded-full">
          <ArrowLeft className="text-white" />
        </button>
        <button className="bg-[#2e2f40] hover:bg-[#3d3f55] p-4 rounded-full">
          <ArrowRight className="text-white" />
        </button>
      </div>
    </section>
  );
};

export default PopularDestinations;
