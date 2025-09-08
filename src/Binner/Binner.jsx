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
import AutoCardCarousel from "../BusinessPage/CardCarousel";

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
  return (
    <>
      <AutoCardCarousel />
      <ScrollingText />
      <BusinessPage />
      <CounterSection />
    </>
  );
}

export default AnimatedBanner;
