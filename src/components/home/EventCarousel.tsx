import { useState, useRef, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";

import { EventProps } from "@/types/Event";
import { ChevronLeft, ChevronRight, Lock, CalendarClock } from "lucide-react"; // Assuming you have lucide-react or similar icons
import { EventCard } from "./EventSection";


type ExtendedEventProps = EventProps & { isPlaceholder?: boolean };

export default function EventCarousel() {

    const realEvents: EventProps[] = [
        {
            title: "Know Your Enemy: A Fundamental Guide to Cybersecurity",
            date: "2025-11-27",
            displayDate: "November 28, 2025",
            location: "Zoom",
            category: "Webinar",
            status: "Open",
            description: "Uncover how attacks happen — and how you can protect yourself in the digital world.",
            image: "https://scontent-sin2-2.xx.fbcdn.net/v/t39.30808-6/587903445_122109974835064173_915205949638570940_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=127cfc&_nc_eui2=AeGQntR7ZTORfO08GWQI3N5-AGIrzzdO6AoAYivPN07oCq51zZix95I29TEA_UvTTJrfWoRqbbEOQnEWx7C1q0PB&_nc_ohc=1c_qyGL1MA0Q7kNvwHM8WCB&_nc_oc=AdkdsN3oElwYWcdtX0llT1hxsgQ2HMg8HZ4xUbjAqQrMR1fiAD4BnXBd4_Chujl099CXwB5F8zAPi5wlw6cRBO28&_nc_zt=23&_nc_ht=scontent-sin2-2.xx&_nc_gid=YrmO1JuRuQ0eRNSoinNoQQ&oh=00_AfhquvAs-9siNiaadgLuxHpKdUsGKgWhIWAZdv6MNiw2aw&oe=692E3B47",
            href: "https://www.facebook.com/photo/?fbid=122109989571064173&set=pb.61581925217582.-2207520000"
        },
    ];

    const MIN_ITEMS = 3;
    const itemsNeeded = Math.max(0, MIN_ITEMS - realEvents.length);
    
    const placeholders: ExtendedEventProps[] = Array.from({ length: itemsNeeded }).map((_, i) => ({
        title: "Event TBA",
        date: "",
        displayDate: "Coming Soon",
        location: "TBA",
        category: "Upcoming",
        status: "Closed",
        description: "Stay tuned for our next announcement.",
        image: "",
        href: "#",
        isPlaceholder: true, 
    }));

    const allEvents = [...realEvents, ...placeholders];
    const perPageDesktop = 3;
    const perPageTablet = 2;
    const perPageMobile = 1;

    const [page, setPage] = useState(0);
    const [visible, setVisible] = useState(perPageDesktop);
    const [autoPlay, setAutoPlay] = useState(false);
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
    const pages = Math.ceil(allEvents.length / visible);
    const canScroll = pages > 1;
    const go = useCallback(
        (d: number) => {
            if (!canScroll) return;
            setPage(p => (p + d + pages) % pages);
        },
        [pages, canScroll]
    );

    useEffect(() => {
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (!autoPlay || prefersReduced || !canScroll) return;
        intervalRef.current = window.setInterval(() => go(1), 6000);
        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, [autoPlay, go, canScroll]);

    const pause = () => setAutoPlay(false);
    const resume = () => setAutoPlay(true);

    const sliceForPage = (i: number) => allEvents.slice(i * visible, i * visible + visible);

    return (
        <div 
            className="relative" 
            aria-roledescription="carousel" 
            aria-label="Upcoming events carousel"
            onMouseEnter={pause} 
            onMouseLeave={resume} 
            onFocus={pause} 
            onBlur={resume}
        >
            {canScroll && (
                <div className="flex items-center justify-end gap-3 mb-6 px-2">
                     <div className="flex gap-2">
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => go(-1)}
                            className="h-9 w-9 rounded-full border-slate-700 bg-slate-900/50 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </Button>
                        <Button
                            size="icon"
                            variant="outline"
                            onClick={() => go(1)}
                            className="h-9 w-9 rounded-full border-slate-700 bg-slate-900/50 hover:bg-indigo-500 hover:text-white hover:border-indigo-500 transition-all duration-300"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </Button>
                    </div>
                </div>
            )}
            <div className="overflow-hidden rounded-3xl ring-1 ring-slate-800/60 bg-slate-900/20 backdrop-blur-sm">
                <div 
                    className="flex transition-transform duration-700 cubic-bezier(0.25, 1, 0.5, 1) will-change-transform" 
                    style={{ width: `${pages * 100}%`, transform: `translateX(-${page * (100 / pages)}%)` }}
                >
                    {Array.from({ length: pages }).map((_, i) => {
                        const group = sliceForPage(i);
                        return (
                            <div key={i} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6" style={{ width: `${100 / pages}%` }}>
                                {group.map((evt, idx) => {
                                
                                    if (evt.isPlaceholder) {
                                        return (
                                            <div 
                                                key={`placeholder-${idx}`} 
                                                className="group relative h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 rounded-xl border-2 border-dashed border-slate-800 bg-slate-900/40 hover:bg-slate-900/60 transition-colors duration-300 select-none"
                                            >
                                                <div className="mb-4 p-4 rounded-full bg-slate-800/50 text-slate-500 group-hover:text-indigo-400 group-hover:scale-110 transition-all duration-300">
                                                    <Lock className="w-8 h-8" />
                                                </div>
                                                <h3 className="text-xl font-semibold text-slate-300 mb-2">To Be Announced</h3>
                                                <p className="text-sm text-slate-500 max-w-[200px]">
                                                    We are planning something exciting. Check back soon!
                                                </p>

                                                <div className="absolute inset-0 bg-linear-to-t from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl pointer-events-none" />
                                            </div>
                                        );
                                    }
                                    return (
                                        <div key={evt.title} onClick={() => window.open(evt.href, "_blank")} className="cursor-pointer h-full transition-transform duration-300 hover:-translate-y-1">
                                            <EventCard {...evt} />
                                        </div>
                                    );
                                })}
                            </div>
                        );
                    })}
                </div>
            </div>
            {canScroll && (
                <div className="mt-8 flex justify-center gap-2">
                    {Array.from({ length: pages }).map((_, i) => (
                        <button
                            key={i}
                            aria-label={`Go to slide ${i + 1}`}
                            onClick={() => setPage(i)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${
                                i === page 
                                    ? "bg-indigo-500 w-8 shadow-[0_0_10px_rgba(99,102,241,0.5)]" 
                                    : "bg-slate-700 w-2 hover:bg-slate-600"
                            }`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}