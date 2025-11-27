// src/lib/utils.tsx
import React from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/* ---------------- Decorative Helpers ---------------- */
export function GridOverlay(): JSX.Element {
    return (
        <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
                backgroundImage: `
          linear-gradient(rgba(6,182,212,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.12) 1px, transparent 1px)
        `,
                backgroundSize: "60px 60px"
            }}
        />
    );
}

export function ShapeCluster(): JSX.Element {
    return (
        <div className="pointer-events-none absolute inset-0">
            <div className="absolute top-12 left-12 w-32 h-32 rounded-xl bg-cyan-600/10 blur-xl animate-pulse" />
            <div className="absolute bottom-16 right-24 w-40 h-40 rounded-full bg-indigo-500/10 blur-2xl" />
            <div className="absolute top-1/3 right-8 w-24 h-24 border border-cyan-500/40 rotate-45" />
        </div>
    );
}

export function BackgroundAccent({ position }: { position: string }): JSX.Element {
    return (
        <div
            className="absolute inset-0 pointer-events-none"
            style={{
                background: `radial-gradient(circle at ${position}, rgba(6,182,212,0.12), transparent 65%)`
            }}
        />
    );
}

/* ---------------- Icons ---------------- */
export function CircleIcon(): JSX.Element {
    return (
        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-600 shadow-cyan-500/40 shadow" />
    );
}

export function ShieldIcon(): JSX.Element {
    return (
        <div className="w-4 h-4 rounded-sm border-2 border-blue-400 shadow-[0_0_0_3px_rgba(59,130,246,0.15)]" />
    );
}

export function RadarIcon(): JSX.Element {
    return (
        <div className="relative w-4 h-4 rounded-full border border-violet-400">
            <span className="absolute inset-0 rounded-full animate-ping bg-violet-500/40" />
        </div>
    );
}

export function PolicyIcon(): JSX.Element {
    return <div className="w-4 h-4 rotate-45 border border-emerald-400" />;
}

export function ZeroTrustIcon(): JSX.Element {
    return (
        <div className="w-4 h-4 rounded-full border-2 border-indigo-400 shadow-[0_0_0_3px_rgba(99,102,241,0.18)]" />
    );
}

export function AutomationIcon(): JSX.Element {
    return (
        <div className="w-4 h-4 border border-fuchsia-400 shadow-[0_0_0_3px_rgba(217,70,239,0.18)]" />
    );
}
