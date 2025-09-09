import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const sampleData = {
  company: {
    name: "Grow StartUp",
    tagline: "Building the future through smart products",
    heroImage:
      "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=",
    email: "hello@acme.example",
  },
  vision: {
    title: "Our Vision",
    text:
      "To be a leading force in innovation, driving progress and creating opportunities for businesses worldwide.",
    image:
      "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=",
  },
  mission: {
    title: "Our Mission",
    text:
      "Empower startups and enterprises by providing innovative solutions that enhance growth, sustainability, and impact.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&s=",
  },
  stats: [
    { label: "Projects", value: 128 },
    { label: "Clients", value: 76 },
    { label: "Countries", value: 22 },
  ],
  team: [
    { name: "Priya Sharma", role: "CEO", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    { name: "Ravi Patel", role: "CTO", avatar: "https://randomuser.me/api/portraits/men/46.jpg" },
    { name: "Ananya Singh", role: "Head of Design", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
  ],
  timeline: [
    { year: "2018", text: "Founded and incubated." },
    { year: "2020", text: "First product launched." },
    { year: "2023", text: "Reached 100k monthly users." },
  ],
  testimonials: [
    { name: "S. Rao", quote: "Transformed our product roadmap — results in 3 months.", company: "FinCorp" },
    { name: "L. Gomez", quote: "Professional, reliable, and creative.", company: "Retailly" },
  ],
  values: [
    { title: "Innovation", text: "We push boundaries and experiment constantly." },
    { title: "Integrity", text: "Honesty and transparency guide our work." },
    { title: "Customer Success", text: "We measure our success by client outcomes." },
  ],
  services: [
    { title: "Product Development", text: "End-to-end software solutions." },
    { title: "Consulting", text: "Strategy and product roadmaps." },
    { title: "UI/UX Design", text: "Human-centered interfaces." },
    { title: "Cloud & DevOps", text: "Scalable infra and CI/CD." },
  ],
  faqs: [
    { q: "Do you work with startups?", a: "Yes — we help startups ship MVPs fast." },
    { q: "Where are you located?", a: "Headquartered in Bangalore; remote-first team." },
    { q: "How do we start?", a: "Contact us via the CTA — we’ll schedule a discovery call." },
  ],
  gallery: [
    { src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=", alt: "Case 1" },
    { src: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=", alt: "Case 2" },
    { src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=", alt: "Case 3" },
  ],
};

export default function CompanyVisionMission({ initialData = null, onContactClick = null }) {
  const [isMobile, setIsMobile] = useState(false);
  const [loading, setLoading] = useState(true);
  const data = initialData || sampleData;

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    const t = setTimeout(() => setLoading(false), 180); // lightweight simulated load
    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(t);
    };
  }, []);

  // Stat component: restarts when entering view
  function Stat({ label, value }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: false, margin: "-20% 0% -20% 0%" });
    const [num, setNum] = useState(0);

    useEffect(() => {
      let raf;
      let start;
      if (inView) {
        const duration = 900;
        const animate = (ts) => {
          if (!start) start = ts;
          const progress = Math.min((ts - start) / duration, 1);
          setNum(Math.floor(progress * value));
          if (progress < 1) raf = requestAnimationFrame(animate);
        };
        raf = requestAnimationFrame(animate);
      } else {
        setNum(0);
      }
      return () => cancelAnimationFrame(raf);
    }, [inView, value]);

    return (
      <div ref={ref} className="p-3 sm:p-4 bg-white/50 rounded-xl shadow text-center">
        <div className="text-2xl sm:text-3xl font-bold leading-tight">{num}</div>
        <div className="text-xs sm:text-sm text-gray-600 mt-1">{label}</div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-[40vh] flex items-center justify-center">
        <div className="text-center">
          <div className="loader mb-3" />
          <div className="text-gray-500">Loading…</div>
        </div>
      </div>
    );
  }

  // animation variants
  const slideLeft = { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } };
  const slideRight = { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } };
  const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };

  const safe = (arr) => (Array.isArray(arr) ? arr : []);

  // contact click fallback
  const handleContact = (e) => {
    if (typeof onContactClick === "function") {
      onContactClick(e);
      return;
    }
    const email = data.company?.email || "hello@example.com";
    window.location.href = `mailto:${email}?subject=${encodeURIComponent("Inquiry from website")}`;
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20">
      {/* HERO */}
      <motion.header
        id="overview"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center"
      >
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            {data.company?.name}
          </h1>
          {data.company?.tagline && (
            <p className="mt-2 text-base sm:text-lg text-gray-600">{data.company.tagline}</p>
          )}
          <p className="mt-4 text-sm sm:text-base text-gray-700 max-w-prose">
            {data.company?.description ||
              "We design, build and scale digital products that customers love."}
          </p>

          <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
            <button
              onClick={handleContact}
              aria-label="Contact us"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-md bg-blue-600 text-white font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Contact Us
            </button>

            <a
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-2 rounded-md border text-gray-700 text-sm sm:text-base text-center"
            >
              Our Services
            </a>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.25 }}
          variants={slideRight}
          transition={{ duration: 0.55 }}
          className="rounded-2xl overflow-hidden shadow-lg"
        >
          {data.company?.heroImage ? (
            <img
              src={data.company.heroImage}
              alt={`${data.company?.name || "Company"} hero`}
              className="w-full object-cover"
              loading="lazy"
              style={{
                height: isMobile ? 220 : 320,
              }}
            />
          ) : (
            <div className="w-full bg-gray-50 flex items-center justify-center" style={{ height: isMobile ? 220 : 320 }}>
              <span className="text-gray-400">No hero image</span>
            </div>
          )}
        </motion.div>
      </motion.header>

      {/* VISION / MISSION */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
          variants={slideLeft}
          transition={{ duration: 0.55 }}
          className="bg-gradient-to-br from-sky-900/85 to-indigo-900/85 text-white rounded-2xl p-4 sm:p-6 shadow-2xl"
        >
          <h2 className="text-lg sm:text-xl font-bold mb-2">{data.vision?.title}</h2>
          <p className="text-sm sm:text-base text-white/90 mb-4 leading-relaxed">{data.vision?.text}</p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {safe(data.stats).map((s) => (
              <Stat key={s.label} {...s} />
            ))}
          </div>
        </motion.article>

        <motion.article
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
          variants={slideRight}
          transition={{ duration: 0.55 }}
          className="bg-white rounded-2xl p-4 sm:p-6 shadow"
        >
          <h3 className="text-lg sm:text-xl font-semibold mb-2">{data.mission?.title}</h3>
          <p className="text-sm sm:text-base text-gray-700 mb-4">{data.mission?.text}</p>

          {data.mission?.image ? (
            <img
              src={data.mission.image}
              alt="Mission"
              className="w-full rounded-lg object-cover"
              loading="lazy"
              style={{ height: isMobile ? 160 : 220 }}
            />
          ) : null}
        </motion.article>
      </section>

      {/* TEAM + TIMELINE + TESTIMONIALS */}
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <motion.div
          id="team"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
          variants={slideLeft}
          transition={{ duration: 0.55 }}
          className="lg:col-span-2 bg-white rounded-2xl p-4 sm:p-6 shadow"
        >
          <h3 className="text-xl font-semibold mb-4">Our Team</h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {safe(data.team).map((m) => (
              <div key={m.name} className="text-center">
                {m.avatar ? (
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-full mx-auto bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-400">N/A</span>
                  </div>
                )}
                <div className="mt-2 font-medium text-sm">{m.name}</div>
                <div className="text-xs text-gray-500">{m.role}</div>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h4 className="text-lg font-bold mb-2">Timeline</h4>
            <ul className="space-y-3">
              {safe(data.timeline).map((t) => (
                <li key={t.year} className="flex items-start gap-3">
                  <div className="w-14 text-right font-mono text-xs text-indigo-600">{t.year}</div>
                  <div className="flex-1 text-sm text-gray-700">{t.text}</div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.aside
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
          variants={slideRight}
          transition={{ duration: 0.55 }}
          className="bg-white rounded-2xl p-4 sm:p-6 shadow"
        >
          <h4 className="font-semibold mb-3">What Clients Say</h4>
          <div className="space-y-4">
            {safe(data.testimonials).map((tt) => (
              <blockquote key={tt.name} className="text-sm text-gray-600 border-l-2 pl-3">
                “{tt.quote}” — <span className="font-medium">{tt.name}</span>
                {tt.company ? <span className="text-xs text-gray-500">, {tt.company}</span> : null}
              </blockquote>
            ))}
          </div>
        </motion.aside>
      </section>

      {/* GALLERY */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="bg-white rounded-2xl p-4 sm:p-6 shadow mb-8"
      >
        <h4 className="text-lg font-bold mb-4">Gallery & Case Studies</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {safe(data.gallery).length ? (
            data.gallery.map((g, i) => (
              <img
                key={i}
                src={g.src}
                alt={g.alt || `gallery-${i}`}
                className="w-full h-40 sm:h-48 md:h-56 object-cover rounded-lg"
                loading="lazy"
              />
            ))
          ) : (
            <>
              <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-50 rounded-lg flex items-center justify-center text-gray-300">No images</div>
              <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-50 rounded-lg flex items-center justify-center text-gray-300">No images</div>
              <div className="w-full h-40 sm:h-48 md:h-56 bg-gray-50 rounded-lg flex items-center justify-center text-gray-300">No images</div>
            </>
          )}
        </div>
      </motion.section>

      {/* VALUES */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={slideLeft}
        transition={{ duration: 0.55 }}
        className="bg-white rounded-2xl p-4 sm:p-6 shadow mb-8"
      >
        <h4 className="text-lg font-bold mb-4">Core Values</h4>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {safe(data.values).map((v) => (
            <div key={v.title} className="p-3 border rounded-lg text-center">
              <div className="font-semibold text-indigo-600">{v.title}</div>
              <div className="text-sm text-gray-600 mt-2">{v.text}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* SERVICES */}
      <motion.section
        id="services"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={slideRight}
        transition={{ duration: 0.55 }}
        className="bg-white rounded-2xl p-4 sm:p-6 shadow mb-8"
      >
        <h4 className="text-lg font-bold mb-4">What We Offer</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {safe(data.services).map((s) => (
            <div key={s.title} className="p-3 border rounded-lg">
              <div className="font-medium">{s.title}</div>
              <div className="text-sm text-gray-600 mt-1">{s.text}</div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* FAQ */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={fadeUp}
        transition={{ duration: 0.55 }}
        className="bg-white rounded-2xl p-4 sm:p-6 shadow mb-8"
      >
        <h4 className="text-lg font-bold mb-4">Frequently Asked Questions</h4>
        <div className="space-y-2">
          {safe(data.faqs).map((f, idx) => (
            <details key={idx} className="border rounded">
              <summary className="px-4 py-3 cursor-pointer font-medium">{f.q}</summary>
              <div className="px-4 pb-3 text-sm text-gray-600">{f.a}</div>
            </details>
          ))}
        </div>
      </motion.section>

      {/* CONTACT (single CTA button) */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.18 }}
        variants={slideLeft}
        transition={{ duration: 0.55 }}
        className="bg-white rounded-2xl p-4 sm:p-6 shadow mb-10"
      >
        <div className="max-w-xl mx-auto text-center">
          <h4 className="text-lg font-bold mb-4">Get in touch</h4>

          <button
            onClick={handleContact}
            aria-label="Contact us"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-indigo-600 text-white font-semibold text-sm sm:text-base hover:scale-[1.02] transition-transform focus:outline-none focus:ring-2 focus:ring-indigo-400"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.5 5L18 8M3 16h18" />
            </svg>
            Contact Us
          </button>

          {data.company?.email && (
            <p className="text-xs text-gray-500 mt-3">
              Or email us at <span className="font-medium">{data.company.email}</span>
            </p>
          )}
        </div>
      </motion.section>

    </div>
  );
}
