import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();
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

  // Removed heavy animation variants for better mobile performance
  
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
      {/* Beautiful Animated Background from Contact */}
      <div className="absolute inset-0">
        {/* Animated Mesh Background */}
        <motion.div
          className="absolute inset-0 opacity-8"
          animate={{
            background: [
              'radial-gradient(circle at 25% 25%, rgba(253, 87, 16, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)',
              'radial-gradient(circle at 75% 25%, rgba(255, 107, 53, 0.08) 0%, transparent 50%), radial-gradient(circle at 25% 75%, rgba(253, 87, 16, 0.06) 0%, transparent 50%)',
              'radial-gradient(circle at 25% 25%, rgba(253, 87, 16, 0.08) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255, 107, 53, 0.06) 0%, transparent 50%)'
            ]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Floating Triangles */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute opacity-12"
            style={{
              width: `${30 + i * 8}px`,
              height: `${30 + i * 8}px`,
              background: `linear-gradient(45deg, #F85710, #FF6B35)`,
              clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
              left: `${8 + i * 11}%`,
              top: `${15 + i * 8}%`,
            }}
            animate={{
              x: [0, 70, -35, 0],
              y: [0, -50, 25, 0],
              rotate: [0, 120, 240, 360],
              scale: [1, 1.3, 0.7, 1.1, 1],
              opacity: [0.12, 0.25, 0.08, 0.18, 0.12]
            }}
            transition={{
              duration: 8 + i * 1.2,
              repeat: Infinity,
              delay: i * 1.1,
              ease: "easeInOut"
            }}
          />
        ))}

        {/* Animated Dots Pattern */}
        <motion.div 
          className="absolute inset-0 opacity-5"
          animate={{
            backgroundPosition: ['0px 0px', '50px 50px', '0px 0px']
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(253, 87, 16, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }}
        />

        {/* Floating Squares with Bounce */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 opacity-40"
            animate={{
              y: [0, -40, 0],
              x: [0, 20, -10, 0],
              scale: [0.8, 1.2, 0.9, 1.1, 0.8],
              opacity: [0.4, 0.7, 0.2, 0.5, 0.4],
              rotate: [0, 90, 180, 270, 360]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut"
            }}
            style={{
              left: `${2 + i * 6}%`,
              top: `${10 + i * 5}%`,
            }}
          />
        ))}

        {/* Animated Zigzag Lines */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`zigzag-${i}`}
            className="absolute w-32 h-1 bg-gradient-to-r from-orange-400/20 to-red-400/20 opacity-0"
            animate={{
              opacity: [0, 0.6, 0],
              scaleX: [0, 1, 0],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.8,
              ease: "easeInOut"
            }}
            style={{
              left: `${15 + i * 20}%`,
              top: `${20 + i * 15}%`,
              transformOrigin: 'left center'
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Fast Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <h2
            className="gap-2 text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            <div className="text-center flex flex-col gap-2 md:gap-4">
              <motion.span 
                className="text-gray-800"
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Frequently Asked
              </motion.span>
              <motion.span 
                className="bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent"
                initial={{ opacity: 0, x: 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: false, amount: 0.3 }}
              >
                Questions
              </motion.span>
            </div>
          </h2>

          <motion.p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            style={{ fontFamily: "Inter, sans-serif" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            viewport={{ once: false, amount: 0.3 }}
          >
            Find answers to common questions about our MSME and startup services
          </motion.p>
        </motion.div>

        {/* Fast FAQ Items */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: false, amount: 0.15 }}
        >
          {faqData.map((faq, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -120 : 120, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
                viewport={{ once: false, amount: 0.2 }}
                whileHover={{ scale: 1.01, y: -3, transition: { duration: 0.3 } }}
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
            );
          })}
        </motion.div>

        {/* Fast Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.div
            className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100"
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            viewport={{ once: false, amount: 0.3 }}
            whileHover={{ scale: 1.02, y: -3, transition: { duration: 0.3 } }}
          >
            <motion.h3
              className="text-2xl md:text-3xl font-bold text-gray-800 mb-4"
              style={{ fontFamily: "Outfit, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Still have questions?
            </motion.h3>
            <motion.p
              className="text-gray-600 mb-6"
              style={{ fontFamily: "Inter, sans-serif" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              Our expert team is here to help you with any queries about our
              services
            </motion.p>
            <motion.button
              className="px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ fontFamily: "Inter, sans-serif" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
              viewport={{ once: false, amount: 0.3 }}
              whileHover={{ scale: 1.02, y: -2, transition: { duration: 0.3 } }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/contact-us')}
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
