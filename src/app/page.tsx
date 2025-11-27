"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
    GridOverlay,
    ShapeCluster,
    BackgroundAccent,
    CircleIcon,
    ShieldIcon,
    RadarIcon,
    PolicyIcon,
    ZeroTrustIcon,
    AutomationIcon
} from "@/lib/utils";

/* --------------- Root Page ---------------- */
export default function Home() {
    return (
        <main className="bg-slate-950 text-slate-200 selection:bg-cyan-600/40 selection:text-white">
            <HeroSection />
            <InsightsSection />
            <EventsSection />
            <AboutSection />
        </main>
    );
}

/* ---------------- Hero Section ---------------- */
function HeroSection() {
    return (
        <section
            aria-label="Hero"
            className="relative flex items-center justify-center min-h-[88vh] md:min-h-[92vh] overflow-hidden"
        >
            {/* Multi-layered Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(6,182,212,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_right,rgba(99,102,241,0.12),transparent_50%)]" />
            <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.04] bg-[url('/assets/noise.png')]" />

            {/* Grid overlay from utils */}
            <GridOverlay />

            {/* Floating Ambient Shapes */}
            <div
                className="absolute top-20 left-[10%] w-96 h-96 bg-cyan-500/8 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "8s" }}
            />
            <div
                className="absolute bottom-32 right-[15%] w-[28rem] h-[28rem] bg-indigo-500/8 rounded-full blur-3xl animate-pulse"
                style={{ animationDuration: "10s", animationDelay: "2s" }}
            />

            {/* Content Container */}
            <div className="relative z-10 w-full max-w-6xl mx-auto px-6 lg:px-10">
                <div className="text-center space-y-12">
                    {/* Logo with Enhanced Animation */}
                    <div className="flex justify-center">
                        <div className="relative group">
                            <div className="absolute -inset-8 bg-gradient-to-r from-cyan-500/20 via-indigo-500/20 to-purple-500/20 rounded-full blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-700" />
                            <div className="relative">
                                <Image
                                    src="/assets/a1sberg.png"
                                    alt="A1SBERG Cybersecurity Logo"
                                    width={180}
                                    height={180}
                                    className="drop-shadow-2xl transform group-hover:scale-105 transition-transform duration-500"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center animate-fade-in">
                        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500"></span>
              </span>
                            <span className="text-xs uppercase tracking-[0.2em] text-cyan-300 font-semibold"> Future of Cybersecurity </span>
                        </div>
                    </div>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.1]">
                        <span className="block bg-clip-text text-transparent bg-gradient-to-r from-cyan-300 via-blue-400 to-indigo-400 drop-shadow-[0_0_40px_rgba(6,182,212,0.3)]"> Future-Ready </span>
                        <span className="block mt-3 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-300"> Cybersecurity </span>
                    </h1>
                    <p className="mx-auto max-w-3xl text-xl md:text-2xl text-slate-300 leading-relaxed font-light px-4">
                        Strategic intelligence, resilient architectures, and automated defense patterns engineered for modern threat surfaces.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center pt-6">
                        <Button
                            size="lg"
                            className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-semibold px-10 py-6 text-base shadow-xl shadow-cyan-600/30 hover:shadow-cyan-600/50 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-cyan-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        >
                            Explore Our Work
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="group border-2 border-slate-600/70 bg-slate-800/40 backdrop-blur-md hover:bg-slate-700/70 hover:border-cyan-500/50 text-white font-medium px-10 py-6 text-base transition-all duration-300 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950"
                        >
                            Join Community
                            <svg className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                            </svg>
                        </Button>
                    </div>

                    <div className="pt-12">
                        <p className="text-sm uppercase tracking-[0.25em] text-slate-500 font-semibold mb-6">
                            Trusted By Industry Leaders
                        </p>
                        <div className="flex flex-wrap justify-center items-center gap-8 opacity-40 hover:opacity-60 transition-opacity">
                            <div className="text-slate-400 font-mono text-xs">Trend Micro</div>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                            <div className="text-slate-400 font-mono text-xs">PUP SMB</div>
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                            <div className="text-slate-400 font-mono text-xs">DICT</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-40 h-40 border-l-[3px] border-t-[3px] border-cyan-500/20 rounded-tl-3xl"></div>
            <div className="absolute bottom-0 right-0 w-40 h-40 border-r-[3px] border-b-[3px] border-indigo-500/20 rounded-br-3xl"></div>
        </section>
    );
}

/* ---------------- Insights Section ---------------- */
type InsightCardProps = {
    title: string;
    description: string;
    accent: string;
    icon?: React.ReactNode;
    tags?: string[];
};

function InsightsSection() {
    const insights: InsightCardProps[] = [
        {
            title: "Innovation Architecture",
            description: "Operationalizing emerging defense patterns for adaptive mitigation lifecycles.",
            accent: "from-cyan-500/30 via-cyan-500/10 to-transparent",
            icon: <CircleIcon />,
            tags: ["Patterns", "Scalability"]
        },
        {
            title: "Operational Resilience",
            description: "Continuity engineering with reliability and graceful degradation pathways.",
            accent: "from-blue-500/30 via-blue-500/10 to-transparent",
            icon: <ShieldIcon />,
            tags: ["Continuity", "Reliability"]
        },
        {
            title: "Threat Intelligence",
            description: "Signal correlation and enrichment driving proactive detection logic.",
            accent: "from-violet-500/30 via-violet-500/10 to-transparent",
            icon: <RadarIcon />,
            tags: ["Signals", "Detection"]
        },
        {
            title: "Governance & Compliance",
            description: "Regulatory convergence with engineering velocity and audit transparency.",
            accent: "from-emerald-500/30 via-emerald-500/10 to-transparent",
            icon: <PolicyIcon />,
            tags: ["Audit", "Policy"]
        },
        {
            title: "Zero Trust Enablement",
            description: "Continuous identity, workload, and data path verification at scale.",
            accent: "from-indigo-500/30 via-indigo-500/10 to-transparent",
            icon: <ZeroTrustIcon />,
            tags: ["Identity", "Verification"]
        },
        {
            title: "Automation & Scaling",
            description: "Pipeline-driven enforcement reducing latency and fragmentation.",
            accent: "from-fuchsia-500/30 via-fuchsia-500/10 to-transparent",
            icon: <AutomationIcon />,
            tags: ["Pipelines", "Velocity"]
        }
    ];

    return (
        <section aria-labelledby="insights-heading" className="relative py-40 border-t border-slate-800/60 overflow-hidden">
            {/* Background layers */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(6,182,212,0.12),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.04] bg-[url('/assets/noise.png')]" />

            {/* Decorative helpers from utils */}
            <GridOverlay />
            <ShapeCluster />

            <div className="relative max-w-7xl mx-auto px-6 lg:px-10">
                <header className="max-w-3xl mx-auto text-center space-y-7">
                    <h2 id="insights-heading" className="text-3xl md:text-5xl font-semibold tracking-tight">
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400"> Strategic Capabilities </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed">Core capability domains accelerating maturity, assurance, and adaptive defense alignment.</p>
                </header>

                <ul role="list" className="mt-20 grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
                    {insights.map(item => (
                        <li key={item.title}>
                            <InsightCard {...item} />
                        </li>
                    ))}
                </ul>

                <div className="mt-24 text-center space-y-6">
                    <p className="text-slate-300 text-lg">
                        Compound value emerges from disciplined integration across capability planes.
                    </p>
                    <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 transition-colors font-medium shadow-lg shadow-cyan-600/30 focus-visible:ring-2 focus-visible:ring-cyan-400">
                        View Architecture Brief →
                    </Button>
                </div>
            </div>
        </section>
    );
}

function InsightCard({ title, description, accent, icon, tags = [] }: InsightCardProps) {
    const ref = useRef<HTMLDivElement | null>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const obs = new IntersectionObserver(([e]) => e.isIntersecting && setVisible(true), { threshold: 0.35 });
        obs.observe(el);
        return () => obs.disconnect();
    }, []);

    return (
        <div
            ref={ref}
            className={`group relative rounded-2xl transition-all duration-700 will-change-transform ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
            <div className={`rounded-2xl p-[1.5px] bg-gradient-to-br ${accent} group-hover:p-[2px] transition-all`}>
                <div className="relative h-full rounded-[14px] bg-slate-900/70 backdrop-blur-md border border-slate-700/50 shadow-[0_4px_30px_-8px_rgba(0,0,0,0.6)] overflow-hidden group-hover:border-cyan-500/40 transition">
                    <div className="absolute -top-24 -left-24 w-48 h-48 rounded-full bg-cyan-500/10 blur-2xl group-hover:opacity-80 opacity-0 transition" />
                    <div className="absolute -bottom-24 -right-24 w-48 h-48 rounded-full bg-indigo-500/10 blur-2xl group-hover:opacity-80 opacity-0 transition" />
                    <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
                    </div>
                    <div className="relative z-10 p-7 flex flex-col gap-5">
                        <div className="flex items-center gap-3">
                            {icon}
                            <h3 className="text-white font-semibold tracking-tight group-hover:text-cyan-400 transition-colors">
                                {title}
                            </h3>
                        </div>
                        <p className="text-sm text-slate-300 leading-relaxed">{description}</p>
                        {tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 pt-2">
                                {tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 rounded-md bg-slate-800/60 text-[10px] text-slate-400 font-medium tracking-wide">
                    {tag}
                  </span>
                                ))}
                            </div>
                        )}
                    </div>
                    <div className="absolute inset-0 rounded-[14px] ring-1 ring-transparent group-focus-within:ring-cyan-500/40 pointer-events-none transition" />
                </div>
            </div>
        </div>
    );
}

/* ---------------- Events Section ---------------- */
type EventCardProps = {
    title: string;
    date: string;
    displayDate: string;
    location: string;
    category: string;
    status: string;
    description: string;
    image: string;
};

function EventsSection() {
    return (
        <section aria-labelledby="events-heading" className="relative py-40 border-t border-slate-800/60 overflow-hidden">
            {/* Multi-layered Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_70%_30%,rgba(99,102,241,0.12),transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.04] bg-[url('/assets/noise.png')]" />

            {/* Grid overlay from utils */}
            <GridOverlay />

            {/* Floating Ambient Shapes */}
            <div className="absolute top-40 left-[8%] w-80 h-80 bg-indigo-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "10s" }} />
            <div className="absolute bottom-32 right-[10%] w-96 h-96 bg-purple-500/6 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "12s", animationDelay: "2s" }} />
            <div className="absolute top-[50%] left-[40%] w-64 h-64 bg-pink-500/4 rounded-full blur-3xl animate-pulse" style={{ animationDuration: "14s", animationDelay: "4s" }} />

            <div className="relative max-w-[90rem] mx-auto px-6 lg:px-12">
                <header className="max-w-3xl mx-auto text-center space-y-6">
                    <h2 id="events-heading" className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 drop-shadow-[0_0_30px_rgba(99,102,241,0.3)]">
              Upcoming Events
            </span>
                    </h2>
                    <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                        Workshops, labs, and strategic exchanges advancing defensive depth and operational clarity.
                    </p>
                </header>
                <EventCarousel />
                <div className="mt-16 text-center space-y-5">
                    <p className="text-slate-300 text-lg">Engage with practitioner networks accelerating measurable impact.</p>
                    <Button size="lg" className="bg-cyan-600 hover:bg-cyan-500 transition-colors font-medium focus-visible:ring-2 focus-visible:ring-cyan-400">
                        View Full Calendar →
                    </Button>
                </div>
            </div>
        </section>
    );
}

/* ---------------- Event Carousel ---------------- */
function EventCarousel() {
    const events: EventCardProps[] = [
        {
            title: "Cloud Security Summit 2025",
            date: "2025-02-12",
            displayDate: "Feb 12, 2025",
            location: "Virtual",
            category: "Conference",
            status: "Open",
            description: "Distributed workload trust models, identity fabrics, and advanced data flow containment.",
            image: "/assets/events/cloud-security.jpg"
        },
        {
            title: "Zero Trust Architecture Workshop",
            date: "2025-03-05",
            displayDate: "Mar 5, 2025",
            location: "Berlin, DE",
            category: "Workshop",
            status: "Limited",
            description: "Hands-on continuous verification patterns applied to segmentation and session assurance.",
            image: "/assets/events/zero-trust.jpg"
        },
        {
            title: "Threat Hunting Live Lab",
            date: "2025-03-22",
            displayDate: "Mar 22, 2025",
            location: "Austin, TX",
            category: "Lab",
            status: "Early",
            description: "Adversary emulation streams and telemetry fusion driving adaptive detection engineering.",
            image: "/assets/events/threat-hunting.jpg"
        },
        {
            title: "Regulatory Compliance Roundtable",
            date: "2025-04-04",
            displayDate: "Apr 4, 2025",
            location: "London, UK",
            category: "Roundtable",
            status: "Invite",
            description: "Converging evolving regulatory baselines with platform integrity and delivery velocity.",
            image: "/assets/events/compliance.jpg"
        },
        {
            title: "AI-Driven Defense Symposium",
            date: "2025-04-18",
            displayDate: "Apr 18, 2025",
            location: "Virtual",
            category: "Symposium",
            status: "Open",
            description: "Model-centric anomaly detection pipelines and autonomous response governance patterns.",
            image: "/assets/events/ai-defense.jpg"
        },
        {
            title: "Secure Automation Ops Forum",
            date: "2025-05-02",
            displayDate: "May 2, 2025",
            location: "Toronto, CA",
            category: "Forum",
            status: "Upcoming",
            description: "Scaling enforcement logic and orchestration maturity across hybrid operational estates.",
            image: "/assets/events/automation.jpg"
        }
    ];

    const perPageDesktop = 3;
    const perPageTablet = 2;
    const perPageMobile = 1;

    const [page, setPage] = useState(0);
    const [visible, setVisible] = useState(perPageDesktop);
    const [autoPlay, setAutoPlay] = useState(true);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        const update = () => {
            const w = window.innerWidth;
            if (w < 640) setVisible(perPageMobile);
            else if (w < 1024) setVisible(perPageTablet);
            else setVisible(perPageDesktop);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const pages = Math.max(1, Math.ceil(events.length / visible));

    const go = useCallback(
        (d: number) => {
            setPage(p => (p + d + pages) % pages);
        },
        [pages]
    );

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!autoPlay || prefersReduced) return;
        intervalRef.current = window.setInterval(() => go(1), 5000);
        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, [autoPlay, go]);

    const pause = () => setAutoPlay(false);
    const resume = () => setAutoPlay(true);

    const sliceForPage = (i: number) => events.slice(i * visible, i * visible + visible);

    return (
        <div className="relative mt-16" aria-roledescription="carousel" aria-label="Upcoming events carousel">
            <div className="flex items-center justify-between mb-8">
                <div className="flex gap-3">
                    <Button size="sm" aria-label="Previous slide" onClick={() => go(-1)} className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40" disabled={pages <= 1}>
                        ←
                    </Button>
                    <Button size="sm" aria-label="Next slide" onClick={() => go(1)} className="bg-slate-800 hover:bg-slate-700 disabled:opacity-40" disabled={pages <= 1}>
                        →
                    </Button>
                </div>
                <div className="flex items-center gap-4">
                    <p className="text-xs text-slate-400 font-mono">{page + 1}/{pages}</p>
                    <Button size="sm" variant="outline" onClick={() => setAutoPlay(a => !a)} className="border-slate-600/70 bg-slate-800/50 hover:bg-slate-700/60 text-xs" aria-pressed={autoPlay}>
                        {autoPlay ? "Pause" : "Play"}
                    </Button>
                </div>
            </div>

            <div className="overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/40 backdrop-blur-sm" onMouseEnter={pause} onMouseLeave={resume} onFocus={pause} onBlur={resume}>
                <div className="flex transition-transform duration-600 ease-out will-change-transform" style={{ width: `${pages * 100}%`, transform: `translateX(-${page * (100 / pages)}%)` }}>
                    {Array.from({ length: pages }).map((_, i) => {
                        const group = sliceForPage(i);
                        return (
                            <div key={i} className="flex gap-6 p-6" style={{ width: `${100 / pages}%` }}>
                                {group.map(evt => (
                                    <EventCard key={evt.title} {...evt} />
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>

            <div className="mt-8 flex justify-center gap-3">
                {Array.from({ length: pages }).map((_, i) => (
                    <button
                        key={i}
                        aria-label={`Go to slide ${i + 1}`}
                        onClick={() => setPage(i)}
                        className={`h-3 w-3 rounded-full transition-all ${i === page ? "bg-cyan-500 w-10 shadow-lg shadow-cyan-500/50" : "bg-slate-600 hover:bg-slate-500"}`}
                    />
                ))}
            </div>
        </div>
    );
}

/* ---------------- Event Card ---------------- */
function EventCard({ title, date, displayDate, location, category, status, description, image }: EventCardProps) {
    return (
        <article
            className="group relative rounded-2xl overflow-hidden border-2 border-slate-700/40 bg-gradient-to-br from-slate-900/70 to-slate-900/40 backdrop-blur-xl shadow-xl shadow-black/40 hover:shadow-indigo-600/30 hover:border-indigo-500/50 transition-all duration-500 flex flex-col h-full"
            aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
        >
            <div className="relative h-48 overflow-hidden">
                <Image src={image} alt={title} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1.5 rounded-lg bg-indigo-600/90 backdrop-blur-sm text-xs font-bold text-white tracking-wide shadow-lg">
            {category}
          </span>
                    <span className="px-3 py-1.5 rounded-lg bg-slate-800/90 backdrop-blur-sm text-xs text-slate-200 tracking-wide font-medium">
            {status}
          </span>
                </div>
            </div>
            <div className="p-6 space-y-4 flex-1 flex flex-col">
                <time dateTime={date} className="text-xs font-mono text-cyan-300/80">{displayDate}</time>
                <h3 id={title.replace(/\s+/g, "-").toLowerCase()} className="text-white font-semibold text-lg tracking-tight group-hover:text-cyan-400 transition-colors">{title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed line-clamp-3">{description}</p>
                <div className="flex items-center justify-between pt-3 mt-auto">
                    <p className="text-xs text-slate-400 flex items-center gap-1">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {location}
                    </p>
                    <Button size="sm" className="bg-cyan-600/80 hover:bg-cyan-500 text-white text-xs font-medium">Learn More</Button>
                </div>
            </div>
        </article>
    );
}

/* ---------------- About Section ---------------- */
function AboutSection() {
    return (
        <section aria-labelledby="about-heading" className="relative py-40 border-t border-slate-800/60 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/40 to-slate-950" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.12),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(139,92,246,0.10),transparent_50%)]" />
            <div className="pointer-events-none absolute inset-0 mix-blend-overlay opacity-[0.03] bg-[url('/assets/noise.png')]" />

            <GridOverlay />

            <div className="relative max-w-[90rem] mx-auto px-6 lg:px-12">
                <header className="max-w-4xl mx-auto text-center space-y-7 mb-28">
                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-slate-700/50 bg-slate-800/30 backdrop-blur-sm">
                        <span className="w-2 h-2 rounded-full bg-indigo-400 animate-pulse" />
                        <span className="text-xs uppercase tracking-widest text-slate-400 font-medium">Our Organization</span>
                    </div>

                    <h2 id="about-heading" className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-tight">About A1SBERG</h2>

                    <div className="flex justify-center">
                        <div className="h-1.5 w-24 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full" />
                    </div>

                    <p className="text-xl md:text-2xl text-slate-300 leading-relaxed max-w-3xl mx-auto font-light">
                        Pioneering cybersecurity excellence through competitive innovation and collaborative learning
                    </p>
                </header>

                <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                    <div className="lg:col-span-5 space-y-8">
                        <div className="relative group">
                            <div className="absolute -inset-6 bg-gradient-to-br from-indigo-500/20 via-purple-500/15 to-pink-500/10 rounded-3xl blur-3xl opacity-70 group-hover:opacity-100 transition-all duration-700" />
                            <div className="relative rounded-3xl overflow-hidden border border-slate-700/40 bg-gradient-to-br from-slate-900/90 to-slate-900/50 backdrop-blur-xl shadow-2xl shadow-black/40">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] via-transparent to-transparent" />
                                <div className="absolute top-0 left-0 w-24 h-24 border-l-[3px] border-t-[3px] border-indigo-400/40 rounded-tl-3xl" />
                                <div className="absolute bottom-0 right-0 w-24 h-24 border-r-[3px] border-b-[3px] border-purple-400/40 rounded-br-3xl" />

                                <div className="relative p-12 lg:p-16">
                                    <div className="flex justify-center items-center">
                                        <div className="relative">
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-full blur-2xl" />
                                            <Image src="/assets/a1sberg.png" alt="A1SBERG Logo" width={200} height={200} className="relative drop-shadow-2xl" />
                                        </div>
                                    </div>

                                    <div className="absolute inset-0 bg-gradient-to-t from-indigo-500/10 via-transparent to-transparent blur-2xl pointer-events-none" />
                                </div>
                            </div>
                        </div>

                        <div className="relative group/badge">
                            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 rounded-2xl blur-xl group-hover/badge:blur-2xl transition-all" />
                            <div className="relative rounded-2xl border border-slate-700/40 bg-slate-900/40 backdrop-blur-md p-6">
                                <div className="flex items-center gap-4">
                                    <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-lg shadow-indigo-500/30">
                                        <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-sm text-slate-400 font-medium mb-1">Competition Achievement</p>
                                        <p className="text-white font-semibold text-lg">Top 5 @ Trend Micro CTF</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7 space-y-10">
                        <div className="relative group/content">
                            <div className="absolute -inset-4 bg-gradient-to-br from-slate-800/40 to-slate-900/40 rounded-3xl blur-2xl" />
                            <div className="relative rounded-3xl border border-slate-700/40 bg-gradient-to-br from-slate-900/60 to-slate-900/30 backdrop-blur-xl shadow-2xl shadow-black/20 overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] via-transparent to-transparent pointer-events-none" />
                                <div className="relative p-8 lg:p-12 space-y-8">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <div className="h-1 w-16 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full" />
                                        </div>

                                        <h3 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-100 to-slate-200">A1SBERG Organization</h3>
                                        <p className="text-sm text-indigo-300/80 font-medium tracking-wide">Student-Led Cybersecurity Excellence</p>
                                    </div>

                                    <div className="h-px bg-gradient-to-r from-transparent via-slate-700/60 to-transparent" />
                                    <div className="space-y-6 text-slate-300 text-base md:text-lg leading-[1.8]">
                                        <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-white first-letter:mr-2 first-letter:float-left first-letter:leading-none first-letter:mt-1">
                                            A1SBERG is a student-led cybersecurity organization dedicated to fostering excellence in competitive cybersecurity and community education. We unite passionate students who share a commitment to advancing defensive security capabilities and threat intelligence.
                                        </p>

                                        <p>
                                            Through hands-on training, competitive engagements, and collaborative learning experiences, we empower our members to develop real-world skills in penetration testing, incident response, secure architecture design, and threat modeling.
                                        </p>

                                        <p>
                                            Our competitive achievements, including top placements in national CTF competitions, demonstrate our dedication to technical mastery and continuous improvement in the ever-evolving cybersecurity landscape.
                                        </p>
                                    </div>

                                    <div className="grid sm:grid-cols-2 gap-6 pt-6">
                                        <div className="relative group/card rounded-2xl border border-slate-700/40 bg-slate-800/30 backdrop-blur-sm p-6 hover:border-indigo-500/40 transition-all duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                            <div className="relative">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 rounded-lg bg-indigo-500/20 flex items-center justify-center">
                                                        <svg className="w-5 h-5 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="text-white font-semibold text-lg">Our Mission</h4>
                                                </div>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    Cultivate the next generation of cybersecurity professionals through competitive excellence and community-driven learning.
                                                </p>
                                            </div>
                                        </div>

                                        <div className="relative group/card rounded-2xl border border-slate-700/40 bg-slate-800/30 backdrop-blur-sm p-6 hover:border-purple-500/40 transition-all duration-300">
                                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent rounded-2xl opacity-0 group-hover/card:opacity-100 transition-opacity" />
                                            <div className="relative">
                                                <div className="flex items-center gap-3 mb-4">
                                                    <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                                                        <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                                        </svg>
                                                    </div>
                                                    <h4 className="text-white font-semibold text-lg">Our Vision</h4>
                                                </div>
                                                <p className="text-slate-400 text-sm leading-relaxed">
                                                    Become the leading student cybersecurity organization recognized for innovation, collaboration, and technical excellence.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <Button size="lg" className="w-full sm:w-auto bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white font-semibold px-8 shadow-lg shadow-indigo-600/30 hover:shadow-indigo-600/50 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-indigo-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                Join Our Community
                                <svg className="w-5 h-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </Button>

                            <Button size="lg" variant="outline" className="w-full sm:w-auto border-slate-600/70 bg-slate-800/40 backdrop-blur-sm hover:bg-slate-700/60 hover:border-slate-500 text-white font-medium px-8 transition-all duration-300 focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950">
                                Discover Events
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
