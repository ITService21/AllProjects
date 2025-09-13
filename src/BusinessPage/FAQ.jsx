import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      question: "What services do you offer for MSMEs and startups?",
      answer:
        "We provide comprehensive business solutions including business registration, funding assistance, MSME certification, compliance management, digital marketing, and strategic business growth consulting. Our services cover everything from startup inception to business expansion.",
    },
    {
      question: "How long does it take to get MSME certification?",
      answer:
        "MSME certification typically takes 7-15 working days from the date of application submission, provided all required documents are complete and accurate. We ensure a smooth and fast process for our clients.",
    },
    {
      question: "What funding options are available for startups?",
      answer:
        "We assist with various funding options including government grants, equity-based funding, NBFC business loans, Startup India scheme benefits, angel investments, and venture capital connections. We help you identify the best funding route for your business.",
    },
    {
      question: "Do you provide business registration services?",
      answer:
        "Yes, we offer complete business registration services including Private Limited Company, LLP, Partnership Firm, One Person Company, and Sole Proprietorship registration. We handle all legal formalities and documentation.",
    },
    {
      question: "What is the cost of your consultation services?",
      answer:
        "Our consultation fees vary based on the services required. We offer free initial consultation to understand your needs. Our pricing is competitive and transparent, with no hidden charges. Contact us for a detailed quote.",
    },
    {
      question: "Can you help with digital marketing for my business?",
      answer:
        "Absolutely! We provide comprehensive digital marketing services including SEO, social media marketing, Google Ads, content marketing, email marketing, and website development to help your business grow online.",
    },
    {
      question: "What documents are required for business registration?",
      answer:
        "Required documents include PAN card, Aadhaar card, address proof, bank statements, business plan, and identity verification documents. The exact requirements may vary based on the type of business registration you choose.",
    },
    {
      question: "Do you offer compliance and legal support?",
      answer:
        "Yes, we provide ongoing compliance management including GST registration, tax filing, labor law compliance, and annual returns. Our legal experts ensure your business stays compliant with all regulations.",
    },
    {
      question: "How can I get ZED certification for my business?",
      answer:
        "ZED (Zero Defect Zero Effect) certification helps improve product quality and environmental impact. We guide you through the entire process, from application to certification, including quality improvement strategies.",
    },
    {
      question: "What makes your consultancy different from others?",
      answer:
        "We offer end-to-end business solutions with 24/7 support, experienced team of experts, customized strategies, proven track record, and commitment to client success. We're based in Ahmedabad and understand the local business ecosystem.",
    },
    {
      question: "Do you provide support after business setup?",
      answer:
        "Yes, we provide ongoing support including business growth strategies, compliance management, funding assistance, and strategic guidance. We're committed to your long-term success and growth.",
    },
    {
      question: "How can I contact your team for consultation?",
      answer:
        "You can reach us through our contact form, email, phone, or visit our office in Ahmedabad. We offer free initial consultation and respond to all inquiries within 2 hours during business hours.",
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
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.68, -0.55, 0.265, 1.55],
      },
    },
  };

  const questionVariants = {
    closed: {
      rotate: 0,
      transition: { duration: 0.3 },
    },
    open: {
      rotate: 45,
      transition: { duration: 0.3 },
    },
  };

  return (
    <section
      className="relative py-20 px-4 overflow-hidden"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Background */}
        <motion.div
          className="absolute inset-0 opacity-5"
          animate={{
            background: [
              "radial-gradient(circle at 20% 20%, rgba(253, 87, 16, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 80% 20%, rgba(255, 107, 53, 0.1) 0%, transparent 50%), radial-gradient(circle at 20% 80%, rgba(253, 87, 16, 0.08) 0%, transparent 50%)",
              "radial-gradient(circle at 20% 20%, rgba(253, 87, 16, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 107, 53, 0.08) 0%, transparent 50%)",
            ],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-4 h-4 bg-gradient-to-r from-orange-400 to-red-400 rounded-full opacity-20"
            animate={{
              x: [0, 100, -50, 0],
              y: [0, -80, 40, 0],
              scale: [0.5, 1.2, 0.8, 0.5],
              opacity: [0.2, 0.5, 0.3, 0.2],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            ease: [0.68, -0.55, 0.265, 1.55],
          }}
          viewport={{ amount: 0.3 }}
        >
          <motion.h2
            className="gap-2 text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.2,
              ease: [0.68, -0.55, 0.265, 1.55],
            }}
            viewport={{ amount: 0.3 }}
          >
            <div className="text-center flex flex-col gap-2 md:gap-4" >
              {" "}
              <span className="text-gray-800">Frequently Asked</span>
              <span className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent">
                Questions
              </span>
            </div>
          </motion.h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ amount: 0.3 }}
          >
            Find answers to common questions about our MSME and startup services
          </motion.p>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          className="space-y-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2 }}
        >
          {faqData.map((faq, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
            >
              <motion.button
                className="w-full px-6 py-6 text-left flex items-center justify-between focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <h3
                  className="text-lg md:text-xl font-bold text-gray-800 pr-4"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {faq.question}
                </h3>
                <motion.div
                  className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white"
                  variants={questionVariants}
                  animate={openIndex === index ? "open" : "closed"}
                >
                  <span className="text-xl font-bold">+</span>
                </motion.div>
              </motion.button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <motion.div
                        className="border-t border-gray-100 pt-4"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        <p
                          className="text-gray-600 leading-relaxed"
                          style={{ fontFamily: "Inter, sans-serif" }}
                        >
                          {faq.answer}
                        </p>
                      </motion.div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ amount: 0.3 }}
        >
          <motion.div
            className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Outfit, sans-serif" }}
            >
              Still have questions?
            </h3>
            <p
              className="text-gray-600 mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
            >
              Our expert team is here to help you with any queries about our
              services
            </p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(253, 87, 16, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Us Now
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
