import { motion } from "framer-motion";
import { useState } from "react";

const ServicePage = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const serviceCategories = [
    {
      id: 0,
      name: "ARTHA",
      title: "Funding & Grants",
      icon: "💰",
      color: "from-orange-500 to-orange-600",
      services: [
        {
          name: "PMEGP Loan",
          amount: "Up to ₹25L",
          description: "Prime Minister's scheme",
        },
        {
          name: "MUDRA Loan",
          amount: "Up to ₹10L",
          description: "Micro enterprise funding",
        },
        {
          name: "Startup India Seed Fund",
          amount: "Up to ₹1Cr",
          description: "Early stage funding",
        },
        {
          name: "NAIFF Scheme",
          amount: "Up to ₹2Cr",
          description: "New age funding",
        },
        {
          name: "Government Grants",
          amount: "Up to ₹50L",
          description: "Various schemes",
        },
        {
          name: "Venture Capital",
          amount: "Up to ₹5Cr",
          description: "Growth capital",
        },
      ],
    },
    {
      id: 1,
      name: "SURAKSHA",
      title: "Protection & Compliance",
      icon: "🛡️",
      color: "from-green-500 to-green-600",
      services: [
        {
          name: "Trademark Registration",
          amount: "₹4,500",
          description: "Brand protection",
        },
        {
          name: "Shram Suvidha",
          amount: "₹2,000",
          description: "Labor compliance",
        },
        {
          name: "Patent Registration",
          amount: "₹25,000",
          description: "Intellectual property",
        },
        {
          name: "Copyright Registration",
          amount: "₹5,000",
          description: "Content protection",
        },
        {
          name: "ISO Certification",
          amount: "₹15,000",
          description: "Quality standards",
        },
        {
          name: "GST Registration",
          amount: "₹1,500",
          description: "Tax compliance",
        },
      ],
    },
    {
      id: 2,
      name: "NISHTHA",
      title: "Certification & Recognition",
      icon: "🏆",
      color: "from-purple-500 to-purple-600",
      services: [
        {
          name: "Startup India Certificate",
          amount: "₹5,000",
          description: "Government recognition",
        },
        {
          name: "MSME Registration",
          amount: "₹1,000",
          description: "Udyog Aadhar",
        },
        {
          name: "ZED Certification",
          amount: "₹10,000",
          description: "Zero defect export",
        },
        {
          name: "GeM Registration",
          amount: "₹3,000",
          description: "Government e-marketplace",
        },
        {
          name: "FSSAI Certificate",
          amount: "₹2,500",
          description: "Food safety",
        },
        {
          name: "IEC Certificate",
          amount: "₹2,000",
          description: "Import export code",
        },
      ],
    },
    {
      id: 3,
      name: "UTTHAN",
      title: "Business Setup & Registration",
      icon: "🚀",
      color: "from-blue-500 to-blue-600",
      services: [
        {
          name: "Private Limited Company",
          amount: "₹15,000",
          description: "Complete company incorporation",
        },
        {
          name: "One Person Company",
          amount: "₹12,000",
          description: "Solo entrepreneur setup",
        },
        {
          name: "Limited Liability Partnership",
          amount: "₹8,000",
          description: "LLP registration",
        },
        {
          name: "Partnership Firm",
          amount: "₹5,000",
          description: "Partnership registration",
        },
        {
          name: "Section 8 Company",
          amount: "₹20,000",
          description: "Non-profit organization",
        },
        {
          name: "12A & 80G Registration",
          amount: "₹15,000",
          description: "Tax exemption certificates",
        },
      ],
    },

    {
      id: 4,
      name: "PRAGATI",
      title: "Business Growth",
      icon: "📈",
      color: "from-red-500 to-red-600",
      services: [
        {
          name: "Digital Marketing",
          amount: "₹25,000",
          description: "Online presence",
        },
        {
          name: "Website Development",
          amount: "₹15,000",
          description: "Professional websites",
        },
        {
          name: "Logo Design",
          amount: "₹5,000",
          description: "Brand identity",
        },
        {
          name: "Business Growth Programs",
          amount: "₹50,000",
          description: "Strategic planning",
        },
        {
          name: "Merger & Acquisition",
          amount: "₹1,00,000",
          description: "Business expansion",
        },
        {
          name: "CRM Solutions",
          amount: "₹30,000",
          description: "Customer management",
        },
      ],
    },
    {
      id: 5,
      name: "DISHA",
      title: "Expansion & Marketing",
      icon: "🌐",
      color: "from-indigo-500 to-indigo-600",
      services: [
        {
          name: "Affordable Land",
          amount: "₹5,000/sq ft",
          description: "Business premises",
        },
        {
          name: "Export Documentation",
          amount: "₹3,000",
          description: "International trade",
        },
        {
          name: "Market Research",
          amount: "₹20,000",
          description: "Business insights",
        },
        {
          name: "Brand Development",
          amount: "₹40,000",
          description: "Complete branding",
        },
        {
          name: "E-commerce Setup",
          amount: "₹35,000",
          description: "Online selling",
        },
        {
          name: "Social Media Marketing",
          amount: "₹15,000",
          description: "Digital presence",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <div className="relative py-20 px-4 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-r from-orange-400/20 to-red-400/20 rounded-full blur-lg animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-r from-green-400/20 to-blue-400/20 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-40 right-1/3 w-28 h-28 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-lg animate-bounce"></div>

        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.15) 1px, transparent 0)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        {/* Floating Particles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-60"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              delay: i * 0.8,
            }}
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16 relative"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Decorative Elements */}
          <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent rounded-full"></div>

          <motion.div
            className="relative inline-block -mt-[10px] md:mt-0"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h2
              className="text-4xl flex gap-[10px] md:gap-[14px] lg:gap-[18px] text-normal md:text-6xl lg:text-7xl font-extrabold mb-6 relative"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="text-gray-800">Our</span>
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Services
              </span>
            </h2>

            {/* Animated Underline */}
            {/* <motion.div 
              className="absolute -top-[1px] md:mt-0 -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-orange-500 to-red-500 rounded-full"
              animate={{ 
                scaleX: [0.8, 1.2, 0.8],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity
              }}
            ></motion.div> */}
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            {[
              { icon: "🚀", text: "Business Setup" },
              { icon: "💰", text: "Funding Support" },
              { icon: "📜", text: "Compliance" },
              { icon: "📈", text: "Growth Strategy" },
            ].map((item, index) => (
              <motion.span
                key={index}
                className="bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-white/50 text-sm font-semibold hover:shadow-xl transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  y: -2,
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="mr-2">{item.icon}</span>
                {item.text}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>

        {/* Category Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {serviceCategories.map((category, index) => (
            <motion.button
              key={category.id}
              variants={itemVariants}
              onClick={() => setActiveCategory(index)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeCategory === index
                  ? `bg-gradient-to-r ${category.color} text-white shadow-lg transform scale-105`
                  : "bg-white text-gray-700 border border-gray-200 hover:shadow-md"
              }`}
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              <span className="mr-2">{category.icon}</span>
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* Active Category Content */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <div className="text-center mb-8">
            <h3
              className="text-3xl font-bold mb-2"
              style={{ color: "#000000", fontFamily: "Poppins, sans-serif" }}
            >
              {serviceCategories[activeCategory].title}
            </h3>
            <p
              className="text-gray-600"
              style={{ fontFamily: "Poppins, sans-serif" }}
            >
              {serviceCategories[activeCategory].name} - Your gateway to
              business success
            </p>
          </div>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {serviceCategories[activeCategory].services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                scale: 1.05,
                y: -5,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              {/* Animated Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-r ${serviceCategories[activeCategory].color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
              ></div>

              {/* Floating Animation for Icon */}
              <motion.div
                className="flex items-start justify-between mb-4 relative z-10"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${serviceCategories[activeCategory].color} flex items-center justify-center text-white text-xl shadow-lg`}
                  animate={{
                    rotate: [0, 5, -5, 0],
                    scale: [1, 1.05, 1],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: index * 0.2,
                  }}
                >
                  {serviceCategories[activeCategory].icon}
                </motion.div>
                <div className="text-right">
                  <motion.div
                    className="text-lg font-bold"
                    style={{ color: "#F85710" }}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                  >
                    {service.amount}
                  </motion.div>
                  <div className="text-xs text-gray-500">Starting from</div>
                </div>
              </motion.div>

              <motion.h4
                className="text-xl font-bold mb-2 relative z-10"
                style={{ color: "#000000", fontFamily: "Poppins, sans-serif" }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {service.name}
              </motion.h4>

              <motion.p
                className="text-gray-600 mb-4 relative z-10"
                style={{ fontFamily: "Poppins, sans-serif" }}
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                {service.description}
              </motion.p>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
                }}
                whileTap={{ scale: 0.95 }}
                className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r ${serviceCategories[activeCategory].color} shadow-lg hover:shadow-xl relative z-10`}
              >
                <motion.span
                  animate={{ x: [0, 3, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                >
                  Get Started →
                </motion.span>
              </motion.button>

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-4 left-4 w-1 h-1 bg-orange-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-16 relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-gray-800 to-slate-900 rounded-3xl">
            {/* Floating Orbs */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-2xl animate-bounce"></div>

            {/* Animated Grid */}
            <div className="absolute inset-0 opacity-10">
              <div
                className="absolute inset-0"
                style={{
                  backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(-45deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
                  backgroundSize: "30px 30px",
                }}
              ></div>
            </div>
          </div>

          <div className="relative z-10 text-center p-8 md:p-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h3
                className="text-[28px] md:text-5xl font-extrabold text-white mb-6"
                style={{ fontFamily: "Poppins, sans-serif" }}
              >
                <span className="bg-gradient-to-r from-white via-orange-200 to-white bg-clip-text text-transparent">
                  Ready to Grow Your Business?
                </span>
              </h3>

              <motion.p
                className="text-gray-300 text-xl mb-10 max-w-3xl mx-auto leading-relaxed"
                style={{ fontFamily: "Poppins, sans-serif" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                Get expert consultation and take your MSME to the next level
                with our
                <span className="text-orange-400 font-semibold">
                  {" "}
                  comprehensive services
                </span>
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(249, 115, 22, 0.4)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 text-white font-bold rounded-full shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 relative overflow-hidden"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    🚀 Book Free Consultation
                  </motion.span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>

                <motion.button
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white/10 backdrop-blur-sm border border-white/20 text-white font-bold rounded-full shadow-2xl hover:bg-white/20 transition-all duration-300 relative overflow-hidden"
                  style={{ fontFamily: "Poppins, sans-serif" }}
                >
                  <motion.span
                    className="relative z-10"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    📋 View All Services
                  </motion.span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ServicePage;
