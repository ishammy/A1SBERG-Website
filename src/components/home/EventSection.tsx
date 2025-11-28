import EventCarousel from "@/components/home/EventCarousel";
import { CalendarClock } from "lucide-react";
import { EventProps } from "@/types/Event";
import {Button} from "@/components/ui/button";
import Image from "next/image";
export default function EventsSection() {
    return (
        <section aria-labelledby="events-heading" id="events" className="relative py-32 overflow-hidden bg-slate-950">
            

            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950" />

            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] animate-pulse mix-blend-screen" style={{ animationDuration: "8s" }} />
            <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] animate-pulse mix-blend-screen" style={{ animationDuration: "10s", animationDelay: "1s" }} />
         
            <div className="relative max-w-360 mx-auto px-6 lg:px-12 z-10">

                <header className="max-w-3xl mx-auto text-center mb-20 space-y-6">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono">
                        <CalendarClock className="w-3 h-3" />
                        SCHEDULE_SYNC
                    </div>

                    <h2 id="events-heading" className="text-4xl md:text-5xl font-black tracking-tight text-white flex flex-col items-center gap-2">
                        <span className="block text-white drop-shadow-[0_2px_0_rgba(0,0,0,1)]">
                            INCOMING
                        </span>
                        <span className="bg-clip-text text-transparent bg-linear-to-r from-cyan-400 via-blue-400 to-cyan-200 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                            TRANSMISSIONS
                        </span>
                    </h2>
                    
                    <p className="text-slate-400 text-lg font-light max-w-lg mx-auto">
                        Join us for live CTF workshops, red team webinars, and community gatherings.
                    </p>
                </header>
                
                <EventCarousel />
            </div>

            <div className="absolute bottom-0 left-0 w-full h-24 bg-linear-to-t from-slate-950 to-transparent pointer-events-none" />
        </section>
    );
}
export function EventCard({ title, date, displayDate, location, category, status, description, image }: EventProps) {
    return (
        <article
            className="group relative rounded-2xl overflow-hidden border-2 border-slate-700/40 bg-linear-to-br from-slate-900/70 to-slate-900/40 backdrop-blur-xl shadow-xl shadow-black/40 hover:shadow-indigo-600/30 hover:border-indigo-500/50 transition-all duration-500 flex flex-col h-full"
            aria-labelledby={title.replace(/\s+/g, "-").toLowerCase()}
        >
            <div className="relative h-48 overflow-hidden">
                <Image src={image} alt={title} fill className="object-cover object-center transition-transform duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/60 to-transparent" />
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
