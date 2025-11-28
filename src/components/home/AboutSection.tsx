import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Flag, Terminal, Hash, Shield, Cpu, Globe, Trophy } from "lucide-react";

export default function AboutSection() {
  const [step, setStep] = useState(0);
  const achievements = [
    {
      year: "2025",
      title: "Top 5 - TMUCTF 2025 Finals",
      description:
        "We didn't bring home the trophy this time, but standing on that stage taught us exactly what we need to work on. We'll be back stronger. (P.S. The accomodated food is way too good)",
      image: "/assets/achievements/tmuctf.jpg",
    },
    {
      year: "2025",
      title: "Top 2 - TMUCTF 2025 Qualifiers",
      description:
        "It was one of our loudest moments. We were all focused on finding the last flag and the instant our ranking appeared, we were excited for the thought of being out of town for the finals B)",
      image: "/assets/achievements/qualifiers.jpg",
    },
    {
      year: "2025",
      title: "CHAMPION - SEENCTF 2025",
      description:
        "This goes to show that Overthinking is the best strategy when it comes to CTF",
      image: "/assets/achievements/SEENCTF.jpg",
    },
    {
      year: "2024",
      title: "1st Runner Up - Hack4Gov Nationals Wildcard",
      description:
        "An opportunity that inspired most of us. One of our team member, Brylle Olaivar became a wildcard and placed 2nd against some of the best teams in the country.",
      image: "/assets/achievements/wildcard.jpg",
    },
    {
      year: "2024",
      title: "Top 15 - TMUCTF 2024 Finals",
      description:
        "Surrounded by the best teams in the country, we may not have reached the top this time, but making it to the finals was a huge milestone for us.",
      image: "/assets/achievements/5th.jpg",
    },
    {
      year: "2024",
      title: "Top 5 - TMUCTF 2024 Qualifiers",
      description:
        "170 teams, and somehow we made Top 5. This was the moment we looked at each other and realized: 'Wait, we can actually do this.'",
      image: "/assets/achievements/5th.jpg",
    },
  ];

  return (
    <section
      aria-labelledby="about-heading"
      id="about"
      className="relative py-24 border-t border-slate-800/60 overflow-hidden"
    >
      <GridOverlay />
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-24">
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-cyan-950/30 border border-cyan-500/20 text-cyan-400 text-xs font-mono mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                SYSTEM_STATUS: ONLINE
              </div>

              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
                WE ARE{" "}
                <span className="text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-blue-500">
                  A1SBERG
                </span>
              </h2>
            </div>

            <div className="rounded-lg bg-[#0c0c0c] border border-slate-800 overflow-hidden shadow-2xl shadow-cyan-900/10 font-mono text-sm relative group min-h-[340px]">
              <div className="bg-slate-900/50 border-b border-slate-800 px-4 py-2 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                <div className="w-3 h-3 rounded-full bg-green-500/50" />
                <div className="ml-2 text-slate-500 text-xs">
                  root@a1sberg:~/mission
                </div>
              </div>

              <div className="p-6 space-y-4 text-slate-300">
                <div>
                  <span className="text-green-500">➜</span>{" "}
                  <span className="text-cyan-400">~</span>{" "}
                  <span className="text-slate-100">
                    <TypewriterText
                      text="whoami"
                      delay={500}
                      speed={100}
                      onComplete={() => setStep(1)}
                    />
                  </span>
                  {step === 0 && (
                    <span className="animate-pulse inline-block w-2 h-4 bg-slate-500 align-middle ml-1" />
                  )}
                </div>
                {step >= 1 && (
                  <div className="pl-4 border-l-2 border-slate-800 animate-in fade-in duration-500">
                    <p>
                      <TypewriterText
                        text="What began as a small team of competitive CTF players has evolved into PUP SMB's official cybersecurity organization. Today, we are a growing community of enthusiasts dedicated to mastering offensive security and spreading digital awareness."
                        speed={15}
                        onComplete={() => setStep(2)}
                      />
                    </p>
                  </div>
                )}
                {step >= 2 && (
                  <div className="mt-4">
                    <span className="text-green-500">➜</span>{" "}
                    <span className="text-cyan-400">~</span>{" "}
                    <span className="text-slate-100">
                      <TypewriterText
                        text="./list_objectives.sh"
                        delay={300}
                        speed={80}
                        onComplete={() => setStep(3)}
                      />
                    </span>
                    {step === 2 && (
                      <span className="animate-pulse inline-block w-2 h-4 bg-slate-500 align-middle ml-1" />
                    )}
                  </div>
                )}
                {step >= 3 && (
                  <ul className="pl-4 space-y-1 text-slate-400 list-disc list-inside animate-in fade-in duration-500">
                    <li>Dominate regional Capture The Flag events</li>
                    <li>Develop custom exploit scripts & defense tools</li>
                    <li>
                      Bridge the gap between theory and{" "}
                      <span className="text-white bg-cyan-900/20 px-1">
                        real-world ops
                      </span>
                    </li>
                  </ul>
                )}

                {step >= 3 && (
                  <div className="mt-4">
                    <span className="text-green-500">➜</span>{" "}
                    <span className="text-cyan-400">~</span>{" "}
                    <span className="animate-pulse inline-block w-2 h-4 bg-cyan-500 align-middle ml-1" />
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="relative flex flex-col justify-center h-full">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-6 relative z-10">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <h3 className="text-sm font-mono text-cyan-400 font-bold tracking-wider">
                  // ACTIVE_DIRECTIVES
                </h3>
                <div className="flex gap-1">
                  <div className="w-1.5 h-1.5 bg-cyan-500 rounded-full animate-pulse" />
                  <div className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
                  <div className="w-1.5 h-1.5 bg-slate-700 rounded-full" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="group flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all cursor-default">
                  <div className="p-2 rounded-md bg-indigo-500/10 text-indigo-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-white font-bold font-mono text-sm">
                        WEB_EXPLOITATION
                      </h4>
                      <span className="text-[10px] text-slate-500 font-mono">
                        MOD_01
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Injection attacks, XSS, and server-side vulnerability
                      analysis.
                    </p>
                  </div>
                </div>
                <div className="group flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all cursor-default">
                  <div className="p-2 rounded-md bg-purple-500/10 text-purple-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    <Hash className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-white font-bold font-mono text-sm">
                        CRYPTOGRAPHY
                      </h4>
                      <span className="text-[10px] text-slate-500 font-mono">
                        MOD_02
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Breaking ciphers, analyzing algorithms, and blockchain
                      security.
                    </p>
                  </div>
                </div>

                <div className="group flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all cursor-default">
                  <div className="p-2 rounded-md bg-pink-500/10 text-pink-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-white font-bold font-mono text-sm">
                        DIGITAL_FORENSICS
                      </h4>
                      <span className="text-[10px] text-slate-500 font-mono">
                        MOD_03
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Memory dump analysis, steganography, and packet tracing.
                    </p>
                  </div>
                </div>
                <div className="group flex items-center gap-4 p-4 rounded-lg bg-slate-900/50 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900 transition-all cursor-default">
                  <div className="p-2 rounded-md bg-emerald-500/10 text-emerald-400 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-colors">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="text-white font-bold font-mono text-sm">
                        REVERSE_ENGINEERING
                      </h4>
                      <span className="text-[10px] text-slate-500 font-mono">
                        MOD_04
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">
                      Binary disassembly, malware analysis, and patch
                      development.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-800 grid grid-cols-3 gap-4 text-center">
              <div>
                <div className="text-xl font-bold text-white font-mono">
                  999+
                </div>
                <div className="text-[10px] text-slate-500 uppercase">
                  CTFs Pwned
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-cyan-400 font-mono">
                  100%
                </div>
                <div className="text-[10px] text-slate-500 uppercase">
                  Dedication
                </div>
              </div>
              <div>
                <div className="text-xl font-bold text-white font-mono">
                  NaN
                </div>
                <div className="text-[10px] text-slate-500 uppercase">
                  Sleep
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-12 border-t border-slate-800/60 pt-16 " id="achievements">
          <div className="text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white flex flex-col md:flex-row items-center gap-3">
              <span className="flex items-center gap-3">
                <Trophy className="w-8 h-8 text-[#46a9ef]" />
                Mission <span className="text-cyan-400">Accomplished</span>
              </span>
            </h2>
            <p className="text-slate-400 max-w-2xl">
             Here is a list of our achievements!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((ach, index) => (
              <AchievementsCard key={index} {...ach} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const GridOverlay = () => (
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-slate-900/90 via-slate-950 to-slate-950" />
   
  </div>
);

const TypewriterText = ({
  text,
  delay = 0,
  speed = 30,
  onComplete,
}: {
  text: string;
  delay?: number;
  speed?: number;
  onComplete?: () => void;
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const startTimeout = setTimeout(() => {
      setStarted(true);
    }, delay);
    return () => clearTimeout(startTimeout);
  }, [delay]);

  useEffect(() => {
    if (!started) return;
    if (displayedText.length < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText(text.slice(0, displayedText.length + 1));
      }, speed);
      return () => clearTimeout(timeoutId);
    } else if (onComplete) {
      onComplete();
    }
  }, [started, displayedText, text, speed, onComplete]);

  return <span>{displayedText}</span>;
};

const AchievementsCard = ({
  title,
  description,
  year,
  image,
}: {
  title: string;
  description: string;
  year: string;
  image: string;
}) => {
  return (
    <div className="group relative flex flex-col rounded-xl bg-slate-900 border border-slate-800 overflow-hidden hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300 h-full">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80" />
        <div className="absolute top-3 right-3 bg-cyan-500/90 backdrop-blur-md text-slate-950 text-xs font-bold px-3 py-1 rounded-sm border border-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.5)]">
          {year}
        </div>
      </div>

      <div className="flex flex-col flex-1 p-6 relative border-t border-slate-800">
        <h3 className="text-lg font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-4">
          {description}
        </p>
      </div>
    </div>
  );
};
