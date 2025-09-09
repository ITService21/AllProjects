import React, { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

/* sample data; you can pass a `data` prop to override this */
const myData = {
    company: {
        name: "Acme Innovations",
        tagline: "Building the future through smart products",
        description: "We design and build delightful software experiences.",
        heroImage: "https://images.unsplash.com/photo-1496307042754-b4aa456c4a2d?q=80&w=1400&auto=format&fit=crop&ixlib=rb-4.0.3&s=",
        email: "hello@acme.example",
        website: "https://acme.example",
    },
    vision: { title: "Vision", text: "Make things better." },
    mission: { title: "Mission", text: "Ship great products fast." },
    stats: [
        { label: "Projects", value: 128 },
        { label: "Clients", value: 76 },
        { label: "Countries", value: 22 },
    ],
    links: [{ label: "Careers", href: "/careers" }],
};

export default function CompanyOverview({ data = myData, onContactClick = null, className = "" }) {
    // responsive helper (client-only)
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const onResize = () => setIsMobile(window.innerWidth < 768);
        onResize();
        window.addEventListener("resize", onResize);
        return () => window.removeEventListener("resize", onResize);
    }, []);

    // animation variants
    const fadeUp = { hidden: { opacity: 0, y: 18 }, visible: { opacity: 1, y: 0 } };
    const slideLeft = { hidden: { opacity: 0, x: -28 }, visible: { opacity: 1, x: 0 } };
    const slideRight = { hidden: { opacity: 0, x: 28 }, visible: { opacity: 1, x: 0 } };

    // Stat subcomponent: animated counter restarting on each view
    function Stat({ label, value }) {
        const ref = useRef(null);
        const inView = useInView(ref, { once: false, margin: "-25% 0% -25% 0%" });
        const [n, setN] = useState(0);

        useEffect(() => {
            let raf = null;
            let start = null;
            if (inView) {
                const duration = 800;
                const step = (timestamp) => {
                    if (!start) start = timestamp;
                    const progress = Math.min((timestamp - start) / duration, 1);
                    setN(Math.floor(progress * value));
                    if (progress < 1) raf = requestAnimationFrame(step);
                };
                raf = requestAnimationFrame(step);
            } else {
                setN(0);
            }
            return () => {
                if (raf) cancelAnimationFrame(raf);
            };
        }, [inView, value]);

        return (
            <div ref={ref} className="p-3 sm:p-4 bg-white/90 rounded-xl shadow text-center">
                <div className="text-2xl sm:text-3xl font-bold leading-tight">{n}</div>
                <div className="text-xs sm:text-sm text-gray-600 mt-1">{label}</div>
            </div>
        );
    }

    // contact handler (prefers a provided handler)
    const handleContact = (e) => {
        if (typeof onContactClick === "function") return onContactClick(e);
        const email = data?.company?.email || "hello@example.com";
        window.location.href = `mailto:${email}?subject=${encodeURIComponent("Inquiry")}`;
    };

    // safe array helper
    const safe = (arr) => (Array.isArray(arr) ? arr : []);

    if (!data || !data.company) {
        return (
            <div className="min-h-[180px] flex items-center justify-center p-6 text-center">
                <div>
                    <p className="font-semibold">No data provided</p>
                    <p className="text-sm text-gray-500">Pass a `data` prop to render the component.</p>
                </div>
            </div>
        );
    }

    return (
        <section className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 ${className}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                {/* Left: text */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={slideLeft}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight text-gray-900">
                        {data.company.name}
                    </h1>

                    {data.company.tagline && (
                        <p className="mt-2 text-sm sm:text-base text-gray-600">{data.company.tagline}</p>
                    )}

                    {data.company.description && (
                        <p className="mt-4 text-sm sm:text-base text-gray-700 max-w-prose">{data.company.description}</p>
                    )}

                    <div className="mt-5 flex flex-col sm:flex-row gap-3 sm:gap-4">
                        <button
                            onClick={handleContact}
                            className="inline-flex items-center justify-center gap-2 px-5 py-2 rounded-md bg-indigo-600 text-white font-medium text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-indigo-400"
                            aria-label="Contact company"
                        >
                            Contact
                        </button>

                        <a
                            href={data.company.website || "#"}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 rounded-md border text-gray-700 text-sm sm:text-base text-center"
                        >
                            Visit Website
                        </a>
                    </div>

                    {/* Quick links */}
                    {Array.isArray(data.links) && data.links.length > 0 && (
                        <div className="mt-4 flex flex-wrap items-center gap-3">
                            {data.links.map((l, i) => (
                                <a key={i} href={l.href} className="text-xs sm:text-sm text-indigo-600 hover:underline">
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    )}

                    {/* Vision & Mission short */}
                    <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {data.vision && (
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="text-sm font-semibold text-gray-800">{data.vision.title || "Vision"}</h4>
                                <p className="text-sm text-gray-600 mt-1">{data.vision.text}</p>
                            </div>
                        )}

                        {data.mission && (
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="text-sm font-semibold text-gray-800">{data.mission.title || "Mission"}</h4>
                                <p className="text-sm text-gray-600 mt-1">{data.mission.text}</p>
                            </div>
                        )}
                    </div>
                </motion.div>

                {/* Right: image + stats */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.25 }}
                    variants={slideRight}
                    transition={{ duration: 0.5 }}
                    className="space-y-4"
                >
                    {data.company.heroImage ? (
                        <div className="rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={data.company.heroImage}
                                alt={`${data.company.name} hero`}
                                className={`w-full object-cover h-56 sm:h-64 md:h-80 lg:h-96`}
                                loading="lazy"
                            />
                        </div>
                    ) : null}

                    {/* stats */}
                    {safe(data.stats).length > 0 && (
                        <div className="grid grid-cols-3 sm:grid-cols-3 gap-3">
                            {safe(data.stats).map((s) => (
                                <Stat key={s.label} {...s} />
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
