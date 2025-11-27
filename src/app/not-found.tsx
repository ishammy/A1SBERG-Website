"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Terminal, ShieldAlert, Home, MoveLeft } from "lucide-react";
import { GridOverlay } from "@/lib/utils";

export default function NotFound() {
  return (
    <div className="min-h-screen relative flex flex-col items-center justify-center p-6 bg-slate-950 overflow-hidden font-mono text-slate-300">
      <GridOverlay />
      <div className="relative z-10 w-full max-w-lg space-y-8 text-center">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-600">
                    404
                </span>
            </h1>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-red-950/30 border border-red-500/30 text-red-400 text-xs tracking-widest uppercase">
                <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-ping" />
                Error: Flag_Not_Found
            </div>
        </div>

        <p className="text-slate-400">
            It seems you've ventured into the void. The page you are looking for has been moved, deleted, or captured by another team.
        </p>
        <div className="opacity-0 hover:opacity-100 transition-opacity duration-500 text-[10px] text-slate-800 select-all cursor-text selection:bg-cyan-500 selection:text-white">
            A1S&#123;h0w_d1d_y0u_g3t_h3r3&#125;
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
                <Button size="lg" className="w-full sm:w-auto bg-cyan-600 hover:bg-cyan-500 text-white font-bold tracking-wide shadow-lg shadow-cyan-900/20">
                    <Home className="w-4 h-4 mr-2" />
                    RETURN TO ROOT
                </Button>
            </Link>
            
            <Button variant="outline" size="lg" className="w-full sm:w-auto border-slate-700 bg-transparent text-slate-300 hover:bg-slate-800 hover:text-white" onClick={() => window.history.back()}>
                <MoveLeft className="w-4 h-4 mr-2" />
                GO BACK
            </Button>
        </div>
      </div>
    </div>
  );
}