import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

import ScrollingText from "../BusinessPage/ScrollingText";
import BusinessPage from "../BusinessPage/BusinessPage";
import CounterSection from "../Components/CounterSection";

const banners = [
  {
    src1: "/image/company.jpg",
    alt: "About Our MSME Advisory",
    title: "Empowering MSMEs in India",
    description:
      "Your trusted partner in MSME registration, compliance, and growth consulting. We help businesses unlock government benefits and scale efficiently.",
  },
  {
    src1: "/image/company.jpg",
    alt: "MSME Registration Services",
    title: "MSME Registration Simplified",
    description:
      "Quick and hassle-free registration under the Udyam portal with complete documentation support and expert guidance.",
  },
  {
    src1: "/image/company.jpg",
    alt: "Government Schemes",
    title: "Access Government Schemes",
    description:
      "Get assistance in availing subsidies, incentives, and loans under government-backed MSME schemes tailored to your business needs.",
  },
  {
    src1: "/image/company.jpg",
    alt: "Business Compliance",
    title: "End-to-End Compliance Support",
    description:
      "From GST and income tax filing to licensing and audits, we ensure your business stays fully compliant and stress-free.",
  },
  {
    src1: "/image/company.jpg",
    alt: "Growth & Funding Support",
    title: "Grow Your Business with Confidence",
    description:
      "Our experts help you create business plans, secure funding, and develop strategies to expand in domestic and global markets.",
  },
];


function AnimatedBanner() {
  const navigate = useNavigate();

  const handleClick = () => navigate("/contact");

  return (
    <>
      <section className="w-full relative ">
        <Swiper
          modules={[Autoplay, EffectFade, Navigation]}
          effect="fade"
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          autoplay={{ delay: 2400, disableOnInteraction: false }}
          speed={500}
          loop
          className="w-full h-[80vh]"
        >
          {banners?.map((item, index) => (
            <SwiperSlide key={index} className="w-full h-full relative">
              <img
                src={item.src1}
                alt={item.alt}
                className="hidden md:block w-full h-full object-cover"
              />
              <img
                src={item.src2}
                alt={item.alt}
                className="md:hidden block w-full h-full object-cover"
              />
              <div className="-mt-[100px] md:-mt-[40px] absolute inset-0 flex flex-col items-center justify-center bg-black/50 backdrop-blur-[0.0px] text-white px-6 text-center">
                <div className=" animate-fade-in-up opacity-0 animate-delay-300 flex lg:gap-[1.6vw]">
                  <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tight leading-tight drop-shadow-2xl animate-fade-in-up opacity-0 animate-delay-300 text-center">
                    <span className="text-[#d9a374]">
                      {item?.title?.split(" ")[0] || ""}
                    </span>{" "}
                    <span className="text-white">
                      {item?.title?.split(" ")[1] || ""}
                    </span>
                  </h2>
                </div>
                <div className="animate-fade-in-up opacity-0 animate-delay-500 mt-4">
                  <p className="text-lg sm:text-xl md:text-xl font-serif line-clamp-5 max-w-3xl mx-auto leading-relaxed opacity-90">
                    {item?.description}
                  </p>
                </div>
                <div className="animate-fade-in-up opacity-0 animate-delay-700 mt-8 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
                  {/* Book Now Button */}
                  <button
                    onClick={handleClick}
                    className="bg-[#d2c5a1] text-black font-semibold px-8 py-4 rounded-full flex items-center gap-2 hover:bg-[#c8b98d] transition"
                  >
                    BOOK NOW →
                  </button>
                  {/* Read More Button with Left Arrow */}
                  <button className="group relative inline-flex items-center text-xl md:text-xl font-semibold px-6 py-3 md:py-3 hover:bg-white/50 border-2 border-white rounded-full text-white overflow-hidden transition-all duration-300 gap-2 md:gap-4">
                    <span className="relative z-10">Read More →</span>
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        {/* For md and above: left/right fixed position */}
        <div className="hidden md:flex justify-between items-center absolute inset-0 z-50 pointer-events-none">
          <button className="custom-prev pointer-events-auto absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition">
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button className="custom-next pointer-events-auto absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition">
            <ArrowRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>

        {/* For mobile: bottom centered */}
        <div className="flex md:hidden -mt-[90px] justify-center gap-6 relative   left-1/2 transform -translate-x-1/2 z-10">
          <button className="custom-prev bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition">
            <ArrowLeft className="w-6 h-6 text-gray-800" />
          </button>
          <button className="custom-next bg-white/80 hover:bg-white p-3 rounded-full shadow-md transition">
            <ArrowRight className="w-6 h-6 text-gray-800" />
          </button>
        </div>
      </section>
      <ScrollingText />
      <BusinessPage />
      <CounterSection />
    </>
  );
}

export default AnimatedBanner;
