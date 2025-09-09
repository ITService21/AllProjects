// SimpleTeamPage.ResponsiveCols.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * SimpleTeamPage.ResponsiveCols
 * - mobile: 1 col
 * - pad/tablet (sm): 2 cols
 * - laptop/desktop (lg): 3 cols
 *
 * Props:
 *  - members: array of member objects (optional; sample used by default)
 *  - pageTitle: optional string
 */

const sampleMembers = Array.from({ length: 12 }).map((_, i) => {
  const idx = i + 1;
  const names = ["Priya Sharma", "Ravi Patel", "Ananya Singh", "Karthik Rao", "Sana Iqbal", "Liam Chen"];
  const roles = ["Engineer", "Designer", "Product", "Marketing", "People", "DevOps"];
  const depts = ["Engineering", "Design", "Product", "Growth", "People Ops", "Platform"];
  return {
    id: `m-${idx}`,
    name: `${names[i % names.length]} ${idx}`,
    role: roles[i % roles.length],
    department: depts[i % depts.length],
    avatar: `https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${30 + idx}.jpg`,
    location: ["Bangalore, IN", "Remote", "New York, USA", "London, UK"][i % 4],
    bio: "Experienced product leader with a passion for building delightful customer experiences. Background in startups and scale-ups.",
    email: `person${idx}@example.com`,
    socials: { linkedin: `https://www.linkedin.com/in/fake${idx}/` },
  };
});

const roleColors = {
  Engineer: "bg-indigo-100 text-indigo-800",
  Designer: "bg-pink-100 text-pink-800",
  Product: "bg-emerald-100 text-emerald-800",
  Marketing: "bg-amber-100 text-amber-800",
  People: "bg-rose-100 text-rose-800",
  DevOps: "bg-sky-100 text-sky-800",
  default: "bg-gray-100 text-gray-800",
};

export default function SimpleTeamPageResponsiveCols({ members = sampleMembers, pageTitle = "Our Team" }) {
  const [modalMember, setModalMember] = useState(null);
  const lastFocusedRef = useRef(null);
  const modalCloseRef = useRef(null);

  const openModal = (member) => {
    lastFocusedRef.current = document.activeElement;
    setModalMember(member);
  };

  const closeModal = () => {
    setModalMember(null);
    if (lastFocusedRef.current && typeof lastFocusedRef.current.focus === "function") {
      lastFocusedRef.current.focus();
    }
  };

  useEffect(() => {
    const onKey = (ev) => { if (ev.key === "Escape") closeModal(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const handleImgError = (ev) => {
    ev.currentTarget.src =
      "data:image/svg+xml;utf8," +
      encodeURIComponent(
        `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='400'><rect width='100%' height='100%' fill='#f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-size='18'>No image</text></svg>`
      );
  };

  const item = { hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } };
  const modalVariant = { hidden: { opacity: 0, scale: 0.98 }, visible: { opacity: 1, scale: 1 }, exit: { opacity: 0, scale: 0.98 } };

  const total = Array.isArray(members) ? members.length : 0;

  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-indigo-50 to-white/60 pt-[75px] pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <header className="mb-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-indigo-500 via-pink-500 to-amber-400 flex items-center justify-center shadow-md">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2l3 6 6 .5-4.5 3.8L19 20l-7-4-7 4 1.5-7.7L3 8.5 9 8 12 2z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{pageTitle}</h1>
              <p className="text-sm text-slate-600 mt-1">Meet the colorful team — <span className="font-semibold">{total}</span> member{total !== 1 ? "s" : ""}.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow hover:scale-[1.02] transition text-sm"
            >
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M3 8l7.5 5L18 8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M21 15V7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v8" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Contact team
            </a>

            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" })}
              className="inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-md bg-white border shadow-sm text-sm hover:shadow-md"
            >
              Scroll to end
            </button>
          </div>
        </header>

        {/* Grid: 1 / 2 / 3 columns */}
        <section aria-labelledby="team-grid" className="pb-6">
          <motion.ul
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8"
            role="list"
          >
            <AnimatePresence>
              {members.map((m) => (
                <motion.li
                  key={m.id}
                  variants={item}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  layout
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="relative bg-white rounded-2xl p-5 sm:p-6 md:p-7 shadow-md hover:shadow-xl transition transform min-h-[200px] md:min-h-[240px]"
                >
                  {/* left accent stripe */}
                  <div className="absolute -left-2 top-8 h-16 w-2 rounded-r-xl bg-gradient-to-b from-indigo-400 to-pink-400 opacity-90" />

                  <div className="flex items-start gap-4">
                    <div className="p-0.5 rounded-full bg-gradient-to-tr from-indigo-500 via-pink-500 to-amber-400">
                      <img
                        src={m.avatar}
                        alt={m.name}
                        onError={handleImgError}
                        loading="lazy"
                        className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full object-cover block border-2 border-white"
                      />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="truncate">
                          <div className="font-semibold text-base md:text-lg text-slate-900">{m.name}</div>
                          <div className="text-xs sm:text-sm text-slate-500 truncate">{m.department}</div>
                        </div>

                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs sm:text-sm font-medium ${roleColors[m.role] || roleColors.default}`}>
                          {m.role}
                        </span>
                      </div>

                      <p className="mt-3 text-sm md:text-base text-slate-600 line-clamp-4">{m.bio}</p>

                      <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                        <div className="flex items-center gap-3">
                          {m.email && (
                            <a href={`mailto:${m.email}`} className="text-xs sm:text-sm text-indigo-600 hover:underline">Email</a>
                          )}
                          {m.socials?.linkedin && (
                            <a href={m.socials.linkedin} target="_blank" rel="noreferrer" className="text-xs sm:text-sm text-slate-600 hover:text-indigo-600">LinkedIn</a>
                          )}
                        </div>

                        <button
                          onClick={() => openModal(m)}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-3 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white text-sm shadow-sm hover:opacity-95"
                          aria-label={`View ${m.name} profile`}
                        >
                          View
                        </button>
                      </div>
                    </div>
                  </div>
                </motion.li>
              ))}
            </AnimatePresence>
          </motion.ul>
        </section>

        {/* decorative stripe */}
        <div className="h-12 rounded-xl bg-gradient-to-r from-indigo-50 to-pink-50 shadow-inner" />

        {/* Modal */}
        <AnimatePresence>
          {modalMember && (
            <motion.div
              key="team-modal"
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              aria-modal="true"
              role="dialog"
              aria-label={`${modalMember.name} profile`}
            >
              <motion.div className="absolute inset-0 bg-black/55 backdrop-blur-sm" onClick={closeModal} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />

              <motion.div
                className="relative z-10 w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5"
                variants={modalVariant}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ duration: 0.12 }}
                role="document"
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-6 items-start">
                  <div className="p-0.5 rounded-xl bg-gradient-to-tr from-indigo-500 via-pink-500 to-amber-400">
                    <img src={modalMember.avatar} alt={modalMember.name} onError={handleImgError} className="w-28 h-28 md:w-36 md:h-36 rounded-lg object-cover border-2 border-white" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div>
                        <h3 className="text-xl md:text-2xl font-semibold text-slate-900">{modalMember.name}</h3>
                        <div className="text-sm md:text-base text-slate-600 mt-1">{modalMember.role} • {modalMember.department}</div>
                        <div className="mt-3 text-sm md:text-base text-slate-700">{modalMember.bio}</div>
                      </div>

                      <div className="ml-auto hidden md:flex md:flex-col md:items-end">
                        <span className={`px-3 py-1 rounded-full text-sm md:text-base font-medium ${roleColors[modalMember.role] || roleColors.default}`}>
                          {modalMember.role}
                        </span>
                        <div className="text-sm text-slate-500 mt-3">{modalMember.location}</div>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      {modalMember.email && (
                        <a href={`mailto:${modalMember.email}`} className="px-4 py-2 rounded-md border text-sm">Email</a>
                      )}
                      {modalMember.socials?.linkedin && (
                        <a href={modalMember.socials.linkedin} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md border text-sm">LinkedIn</a>
                      )}

                      <button
                        onClick={() => { if (modalMember.email) window.location.href = `mailto:${modalMember.email}`; else alert("No email provided"); }}
                        className="ml-auto inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white"
                      >
                        Contact
                      </button>
                    </div>
                  </div>
                </div>

                <button ref={modalCloseRef} onClick={closeModal} aria-label="Close profile" className="absolute top-4 right-4 p-2 rounded-md text-slate-600 hover:bg-slate-50">
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
