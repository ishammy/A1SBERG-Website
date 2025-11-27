
"use client";
import { BookOpen, ChevronRight, Clock, Play, Shield, Terminal , Lock} from "lucide-react";


export default function LearnPage() {
  return (
    <div className="min-h-screen pt-20 bg-slate-950 font-sans selection:bg-cyan-500/30 pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
      <main className="max-w-7xl mx-auto px-6 pt-12">
        
        <div className="mb-12">
          <div className="flex items-center gap-2 text-sm text-cyan-500 font-mono mb-3">
            <span className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse"></span>
            AVAILABLE LESSONS
          </div>
          <h1 className="text-4xl font-bold text-white mb-4">Interactive Learning With A1S</h1>
          <p className="text-slate-400 max-w-2xl text-lg">
            Learn at your own pace!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            onClick={() => window.open('/learn/know-your-enemy', '_self')}
            className="group bg-slate-900 rounded-2xl overflow-hidden border border-slate-800 hover:border-cyan-500/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] transition-all duration-300 cursor-pointer flex flex-col h-full"
          >
            <div className="h-48 bg-linear-to-br from-slate-800 to-slate-900 relative overflow-hidden">
              <div className="absolute inset-0 opacity-40 bg-[url('/assets/Know_Your_Enemy.png')] bg-cover bg-center"></div>

              <div className="absolute top-4 left-4 flex gap-2">
                <span className="px-3 py-1 bg-cyan-500/10 text-cyan-400 text-xs font-bold rounded-full border border-cyan-500/20 backdrop-blur-sm">
                  BEGINNER
                </span>
              </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
              <div className="flex items-center gap-2 text-xs text-slate-500 font-bold mb-3 uppercase tracking-wider">
                <BookOpen className="w-3 h-3" /> Fundamentals
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                Know Your Enemy
              </h3>
              
              <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                A fundamental guide to Cyber Security. Learn about the CIA Triad, the Deep Web, Phishing, and how to survive in the digital age.
              </p>

              <div className="flex items-center justify-between border-t border-slate-800 pt-4 mt-auto">
                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" /> 30 Minutes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Play className="w-3.5 h-3.5" /> 5 Modules
                  </span>
                </div>
                <button className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-300">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          <div className="group bg-slate-900/50 rounded-2xl overflow-hidden border border-slate-800 border-dashed flex flex-col h-full opacity-60 hover:opacity-100 transition-opacity">
            <div className="h-48 bg-slate-800/30 flex items-center justify-center">
               <Lock className="w-12 h-12 text-slate-700" />
            </div>
            <div className="p-6">
              <div className="h-4 w-24 bg-slate-800 rounded mb-4"></div>
              <div className="h-6 w-3/4 bg-slate-800 rounded mb-2"></div>
              <div className="h-4 w-full bg-slate-800/50 rounded mb-6"></div>
              <div className="flex items-center justify-center mt-4">
                <span className="text-xs font-bold text-slate-500 bg-slate-800 px-3 py-1 rounded-full">COMING SOON</span>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

