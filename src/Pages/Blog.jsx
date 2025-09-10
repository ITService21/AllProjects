import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import demoPosts from "../Data/Blog";

export default function BlogPage({ initialPosts = null }) {
    const posts = initialPosts || demoPosts;

    // UI state
    const [query, setQuery] = useState("");
    const [debouncedQuery, setDebouncedQuery] = useState("");
    const [activeCategory, setActiveCategory] = useState("All");
    const [activeTag, setActiveTag] = useState("");
    const [visibleCount, setVisibleCount] = useState(6); // load more step
    const [selectedPost, setSelectedPost] = useState(null);

    // debounce query
    useEffect(() => {
        const t = setTimeout(() => setDebouncedQuery(query.trim().toLowerCase()), 300);
        return () => clearTimeout(t);
    }, [query]);

    // derive categories and tags
    const categories = useMemo(() => {
        const s = new Set(posts.map((p) => p.category).filter(Boolean));
        return ["All", ...Array.from(s)];
    }, [posts]);

    const tags = useMemo(() => {
        const s = new Set();
        posts.forEach((p) => (p.tags || []).forEach((t) => s.add(t)));
        return Array.from(s).sort();
    }, [posts]);

    // filtered posts
    const filtered = useMemo(() => {
        let arr = posts.slice().sort((a, b) => new Date(b.date) - new Date(a.date));
        if (activeCategory !== "All") arr = arr.filter((p) => p.category === activeCategory);
        if (activeTag) arr = arr.filter((p) => (p.tags || []).includes(activeTag));
        if (debouncedQuery) {
            arr = arr.filter(
                (p) =>
                    p.title.toLowerCase().includes(debouncedQuery) ||
                    (p.excerpt || "").toLowerCase().includes(debouncedQuery) ||
                    (p.author || "").toLowerCase().includes(debouncedQuery)
            );
        }
        return arr;
    }, [posts, activeCategory, activeTag, debouncedQuery]);

    // featured post is first post or latest in filtered list
    const featured = filtered[0] || posts[0];
    const gridPosts = filtered.slice(1, visibleCount); // exclude featured from grid

    // reset visibleCount when filters change
    useEffect(() => {
        setVisibleCount(6);
    }, [activeCategory, activeTag, debouncedQuery]);

    // modal/reader focus
    const closeRef = useRef(null);
    useEffect(() => {
        if (selectedPost) setTimeout(() => closeRef.current?.focus(), 50);
    }, [selectedPost]);

    // helper format
    const formatDate = (d) => {
        try {
            return new Date(d).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
        } catch {
            return d;
        }
    };

    // animations
    const cardAnim = { hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } };

    return (
        <div className="bg-slate-50 min-h-screen">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {/* Header */}
                <header className="mb-8 text-center">
                    <h1 className="text-3xl sm:text-4xl font-extrabold">Insights & Resources</h1>
                    <p className="mt-2 text-slate-600 max-w-2xl mx-auto">
                        Articles, guides and best practices for startups and growing businesses.
                    </p>

                    {/* search + categories row */}
                    <div className="mt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                        <div className="flex-1 max-w-xl mx-auto md:mx-0">
                            <label className="relative block">
                                <span className="sr-only">Search posts</span>
                                <input
                                    value={query}
                                    onChange={(e) => setQuery(e.target.value)}
                                    placeholder="Search articles, authors, keywords..."
                                    className="w-full rounded-full border px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
                                />
                            </label>
                        </div>

                        <div className="flex items-center gap-2 flex-wrap justify-center md:justify-end">
                            {categories.map((c) => (
                                <button
                                    key={c}
                                    onClick={() => {
                                        setActiveCategory(c);
                                        setActiveTag("");
                                    }}
                                    className={`text-sm px-3 py-1 rounded-full transition ${activeCategory === c ? "bg-indigo-600 text-white shadow" : "bg-white text-slate-700 border"
                                        }`}
                                >
                                    {c}
                                </button>
                            ))}
                        </div>
                    </div>
                </header>

                {/* Featured */}
                {featured && (
                    <article className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8 items-stretch">
                        <div className="lg:col-span-2 bg-white rounded-2xl overflow-hidden shadow">
                            <img src={featured.image} alt={featured.title} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <div className="flex items-center justify-between gap-4">
                                    <div className="text-xs text-slate-500">{featured.category}</div>
                                    <div className="text-xs text-slate-400">{formatDate(featured.date)} • {featured.author}</div>
                                </div>

                                <h2 className="mt-3 text-2xl font-bold text-slate-900">{featured.title}</h2>
                                <p className="mt-3 text-slate-700 max-w-prose">{featured.excerpt}</p>

                                <div className="mt-6 flex items-center gap-3">
                                    <button
                                        onClick={() => setSelectedPost(featured)}
                                        className="px-4 py-2 rounded-full bg-indigo-600 text-white"
                                    >
                                        Read full story
                                    </button>

                                    <div className="flex gap-2">
                                        {(featured.tags || []).slice(0, 4).map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <aside className="bg-white rounded-2xl p-6 shadow flex flex-col">
                            <h3 className="font-semibold text-slate-900">Quick Picks</h3>
                            <ul className="mt-4 space-y-3">
                                {posts.slice(0, 4).map((p) => (
                                    <li key={p.id} className="flex items-start gap-3">
                                        <img src={p.image} alt={p.title} className="w-16 h-12 object-cover rounded-md flex-shrink-0" />
                                        <div>
                                            <button onClick={() => setSelectedPost(p)} className="text-sm font-semibold text-slate-900 hover:underline">
                                                {p.title}
                                            </button>
                                            <div className="text-xs text-slate-500">{formatDate(p.date)}</div>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </aside>
                    </article>
                )}

                {/* tags filter */}
                <div className="mb-6 flex items-center gap-2 flex-wrap">
                    <button
                        onClick={() => setActiveTag("")}
                        className={`text-sm px-3 py-1 rounded-full ${activeTag === "" ? "bg-indigo-600 text-white" : "bg-white border"}`}
                    >
                        All tags
                    </button>
                    {tags.map((t) => (
                        <button
                            key={t}
                            onClick={() => setActiveTag((s) => (s === t ? "" : t))}
                            className={`text-sm px-3 py-1 rounded-full ${activeTag === t ? "bg-indigo-600 text-white" : "bg-white border"}`}
                        >
                            #{t}
                        </button>
                    ))}
                </div>

                {/* posts grid */}
                <section aria-labelledby="articles" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {gridPosts.map((p) => (
                        <motion.article
                            key={p.id}
                            className="bg-white rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
                            initial="hidden"
                            animate="visible"
                            variants={cardAnim}
                        >
                            <img src={p.image} alt={p.title} className="w-full h-44 object-cover" />
                            <div className="p-4">
                                <div className="flex items-center justify-between text-xs text-slate-500">
                                    <div>{p.category}</div>
                                    <div>{formatDate(p.date)}</div>
                                </div>
                                <h4 className="mt-2 font-semibold text-slate-900 line-clamp-2">{p.title}</h4>
                                <p className="mt-2 text-sm text-slate-700 line-clamp-3">{p.excerpt}</p>

                                <div className="mt-4 flex items-center justify-between">
                                    <div className="flex gap-2">
                                        {(p.tags || []).slice(0, 3).map((t) => (
                                            <span key={t} className="text-xs px-2 py-1 rounded-full bg-indigo-50 text-indigo-700">{t}</span>
                                        ))}
                                    </div>

                                    <button onClick={() => setSelectedPost(p)} className="text-sm text-indigo-600 font-semibold">Read →</button>
                                </div>
                            </div>
                        </motion.article>
                    ))}

                    {filtered.length <= 1 && <div className="col-span-full text-center py-12 text-slate-500">No articles found.</div>}
                </section>

                {/* load more */}
                {filtered.length > gridPosts.length + 1 && (
                    <div className="mt-8 text-center">
                        <button
                            onClick={() => setVisibleCount((c) => c + 6)}
                            className="px-5 py-2 rounded-full bg-white border shadow"
                        >
                            Load more
                        </button>
                    </div>
                )}

                {/* footer small */}
                <div className="mt-12 text-center text-sm text-slate-500">© {new Date().getFullYear()} Your Company — Insights</div>
            </div>

            {/* Article modal / reader */}
            <AnimatePresence>
                {selectedPost && (
                    <motion.div
                        className="fixed inset-0 z-50 flex items-center justify-center p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <div className="absolute inset-0 bg-black/60" onClick={() => setSelectedPost(null)} />

                        <motion.div
                            className="relative z-10 max-w-3xl w-full bg-white rounded-2xl shadow-2xl overflow-auto max-h-[90vh]"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                        >
                            <div className="p-4 sm:p-6 flex items-start gap-4">
                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold">{selectedPost.title}</h2>
                                    <div className="text-sm text-slate-500 mt-1">{selectedPost.author} • {formatDate(selectedPost.date)}</div>
                                </div>
                                <button
                                    onClick={() => setSelectedPost(null)}
                                    aria-label="Close"
                                    className="p-2 rounded-md text-slate-500 hover:bg-slate-100"
                                    ref={closeRef}
                                >
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                        <path strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            {selectedPost.image && <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-48 object-cover" />}

                            <div className="p-6 prose max-w-none">
                                {/* demo body — replace with sanitized HTML or markdown renderer */}
                                <p>{selectedPost.body}</p>
                                <p className="text-sm text-slate-500 mt-6">Tags: {(selectedPost.tags || []).join(", ")}</p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}