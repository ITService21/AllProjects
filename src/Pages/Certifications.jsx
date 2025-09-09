// Certifications.jsx
import React from "react";
import { motion } from "framer-motion";

/**
 * Certifications
 * Props:
 *  - certifications: Array of certificate objects (optional)
 *      certificate shape example:
 *      {
 *         id: "aws-123",
 *         name: "AWS Certified Solutions Architect – Associate",
 *         issuer: "Amazon Web Services",
 *         issueDate: "2023-04-15",   // ISO string or yyyy-mm-dd
 *         credentialId: "ABC-123",
 *         url: "https://example.com/cert/ABC-123",
 *         logo: "https://.../aws-logo.png",
 *         tags: ["Cloud", "Architecture"]
 *      }
 *  - title: optional string
 *  - className: optional string
 *
 * Behavior:
 *  - If certifications.length > 0 => render grid
 *  - Else render "Coming soon" UI with skeleton cards
 *
 * Requires Tailwind CSS + Framer Motion
 */

function formatDate(dateStr) {
  if (!dateStr) return "";
  try {
    const d = new Date(dateStr);
    return d.toLocaleString(undefined, { month: "short", year: "numeric" });
  } catch {
    return dateStr;
  }
}

function Logo({ src, alt }) {
  if (!src) {
    return (
      <div className="w-12 h-12 rounded-lg bg-gradient-to-tr from-slate-200 to-slate-100 flex items-center justify-center text-slate-400">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
          <path d="M3 7v10a2 2 0 0 0 2 2h14" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 7a5 5 0 1 1 10 0" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src =
          "data:image/svg+xml;utf8," +
          encodeURIComponent(
            `<svg xmlns='http://www.w3.org/2000/svg' width='80' height='80'><rect width='100%' height='100%' fill='#f3f4f6'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='#9ca3af' font-size='12'>logo</text></svg>`
          );
      }}
      className="w-12 h-12 rounded-lg object-contain bg-white/60 p-1"
    />
  );
}

export default function Certifications({
  certifications = [],
  title = "Certifications & Awards",
  className = "",
}) {
  const has = Array.isArray(certifications) && certifications.length > 0;

  const cardVariants = {
    hidden: { opacity: 0, y: 12, scale: 0.995 },
    show: (i = 1) => ({ opacity: 1, y: 0, scale: 1, transition: { delay: i * 0.05, type: "spring", stiffness: 120, damping: 14 } }),
  };

  return (
    <section className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 ${className}`}>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">{title}</h2>
          <p className="text-sm text-slate-500 mt-1">
            Verified qualifications and notable recognitions.
          </p>
        </div>

        {has && (
          <div className="text-sm text-slate-500">
            <span className="font-medium">{certifications.length}</span> items
          </div>
        )}
      </div>

      {/* WHEN EMPTY -> Coming soon */}
      {!has && (
        <div className="rounded-2xl bg-gradient-to-r from-indigo-50 to-pink-50 p-8 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 w-full md:w-1/3">
            <div className="rounded-xl bg-white p-6 shadow flex items-center justify-center">
              <svg className="w-20 h-20 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M12 2l3 6 6 .5-4.5 3.8L19 20l-7-4-7 4 1.5-7.7L3 8.5 9 8 12 2z" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900">Credentials coming soon</h3>
            <p className="text-sm text-slate-600 mt-2 max-w-prose">
              We're working on uploading verified certificates. Subscribe to be notified as soon as we post them.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => window.alert("Thanks — we'll notify you (demo).")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-600 text-white text-sm shadow hover:scale-[1.02] transition"
              >
                Notify me
              </button>

              <a href="#" className="text-sm text-slate-600 hover:underline">
                Learn about our assessment process
              </a>
            </div>

            {/* skeleton row */}
            <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="animate-pulse bg-white/40 rounded-lg p-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-md bg-white/60" />
                  <div className="flex-1">
                    <div className="h-3 bg-white/60 rounded w-3/4 mb-2" />
                    <div className="h-2 bg-white/50 rounded w-1/2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* WHEN HAVE ITEMS -> Grid */}
      {has && (
        <div className="mt-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {certifications.map((c, idx) => (
              <motion.article
                key={c.id || `${c.name}-${idx}`}
                className="bg-white rounded-2xl p-5 shadow hover:shadow-lg transition transform"
                variants={cardVariants}
                initial="hidden"
                animate="show"
                custom={idx}
                whileHover={{ translateY: -6, scale: 1.01 }}
                role="article"
                aria-labelledby={`cert-${idx}-title`}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <Logo src={c.logo} alt={c.issuer || c.name} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 id={`cert-${idx}-title`} className="text-sm font-semibold text-slate-900 truncate">
                      {c.name}
                    </h4>
                    <div className="mt-1 text-xs text-slate-500 flex items-center gap-3">
                      <span>{c.issuer}</span>
                      {c.issueDate && <span className="px-2 py-0.5 rounded bg-slate-100 text-xs">{formatDate(c.issueDate)}</span>}
                      {c.credentialId && <span className="text-xs text-slate-400">• {c.credentialId}</span>}
                    </div>

                    {/* tags */}
                    {Array.isArray(c.tags) && c.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-2">
                        {c.tags.slice(0, 5).map((t) => (
                          <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between gap-3">
                  <div className="text-xs text-slate-500">Verified credential</div>

                  <div className="flex items-center gap-2">
                    {c.url && (
                      <a
                        href={c.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs px-3 py-1 rounded-full bg-gradient-to-r from-indigo-600 to-pink-500 text-white shadow-sm"
                        aria-label={`Open certificate ${c.name}`}
                      >
                        View
                      </a>
                    )}

                    <button
                      type="button"
                      onClick={() => {
                        if (c.url) window.open(c.url, "_blank");
                        else window.alert("No URL provided for this credential.");
                      }}
                      className="text-xs px-3 py-1 rounded-full border"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
