"use client";

import TitleSection from "@/components/home/TitleSection";
import AboutSection from "@/components/home/AboutSection";
import EventsSection from "@/components/home/EventSection";

export default function Home() {
    return (
        <main className="min-h-screen select-none bg-linear-to-b from-slate-900  to-slate-950 text-slate-200 selection:bg-cyan-600/40 selection:text-white">
            <TitleSection />
            <EventsSection />
            <AboutSection />
        </main>
    );
}