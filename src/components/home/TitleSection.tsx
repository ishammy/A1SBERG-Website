import { useState, useEffect } from "react";
import Image from "next/image";
import { Network } from "lucide-react";

const TypewriterEffect = ({ words, speed = 250, deleteSpeed = 130, waitTime = 3000 }: { words: string[]; speed?: number; deleteSpeed?: number; waitTime?: number; }) => {
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [currentText, setCurrentText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    useEffect(() => {
        const handleTyping = () => {
            const fullWord = words[currentWordIndex];
            if (isDeleting) {
                setCurrentText((prev) => prev.substring(0, prev.length - 1));
            } else {
                setCurrentText((prev) => fullWord.substring(0, prev.length + 1));
            }
            let typeSpeed = speed;
            if (isDeleting) typeSpeed = deleteSpeed;
            if (!isDeleting && currentText === fullWord) {
                typeSpeed = waitTime;
                setIsDeleting(true);
            } else if (isDeleting && currentText === "") {
                setIsDeleting(false);
                setCurrentWordIndex((prev) => (prev + 1) % words.length);
                typeSpeed = 400; 
            }
            return typeSpeed;
        };
        const timer = setTimeout(() => {
            handleTyping();
        }, isDeleting ? deleteSpeed : (currentText === words[currentWordIndex] ? waitTime : speed));
        return () => clearTimeout(timer);
    }, [currentText, isDeleting, currentWordIndex, words, speed, deleteSpeed, waitTime]);

    return (
        <span>
            {currentText}
            <span className="animate-pulse ml-1 inline-block w-[0.15em] h-[0.8em] bg-[#46a9ef] align-baseline rounded-sm" />
        </span>
    );
};

export default function TitleSection() {
    return (
        <section
            aria-label="Hero"
            className="relative pt-30 pb-20 flex items-center justify-center min-h-[90vh] overflow-hidden"
        >
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[40px_40px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-cyan-500/10 blur-[120px] rounded-full pointer-events-none" />
            <div className="absolute top-1/4 left-10 text-cyan-900/20 font-mono text-sm hidden lg:block select-none">
                01000001 01001100 01010011
                <br />
                01000010 01000101 01010010 
                <br />
                01000111
            </div>
            <div className="absolute bottom-1/4 right-10 text-indigo-900/20 font-mono text-sm hidden lg:block text-right select-none">
                x86_64_GNU/Linux
                <br />
                KERNEL_PANIC_PREVENTED
            </div>


            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10">
                <div className="text-center space-y-10">
                    <div className="flex justify-center">
                        <div className="relative group cursor-pointer">
                            <div className="absolute inset-0 border border-cyan-500/30 rounded-full scale-110 animate-[spin_10s_linear_infinite]" />
                            <div className="absolute inset-0 border border-dashed border-indigo-500/30 rounded-full scale-125 animate-[spin_15s_linear_infinite_reverse]" />
                            <div className="absolute -inset-4 bg-cyan-500/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500" />
                            <div className="relative bg-slate-950 rounded-full p-4 border border-slate-800 shadow-2xl">
                                <Image
                                    src="/assets/a1sberg.png"
                                    alt="A1SBERG Cybersecurity Logo"
                                    width={160}
                                    height={160}
                                    className="drop-shadow-2xl"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center animate-fade-in">
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-md border border-cyan-500/40 bg-slate-900/80 backdrop-blur-md font-mono text-xs md:text-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-slate-400">SYS_STATUS:</span>
                            <span className="text-cyan-400 font-bold tracking-wider">ONLINE // READY_TO_WIN</span>
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-none font-sans">
                            <span className="block text-white drop-shadow-[0_2px_0_rgba(255,0,0,0.5)]">
                                CAPTURE THE
                            </span>
                            <span className="block bg-clip-text text-transparent bg-linear-to-r from-cyan-400 [#46a9ef] to-indigo-500 drop-shadow-[0_0_30px_rgba(6,182,212,0.4)] min-h-[1.1em]">
                                <TypewriterEffect 
                                    words={["FLAG", "ROOT", "KERNEL", "CUTIE"]} 
                                    speed={100}
                                    waitTime={1500}
                                />
                            </span>
                        </h1>
                    </div>

                    <p className="mx-auto max-w-3xl text-lg md:text-xl text-slate-400 font-mono leading-relaxed border-l-2 border-cyan-500/50 pl-6 text-left md:text-center md:border-l-0 md:pl-0">
                        <span className="text-cyan-600 mr-2">$</span>
                        <span className="text-slate-300">Current status:</span> Breaking codes, patching vulnerabilities, and capturing flags.
                        <span className="block md:inline md:ml-2 text-[#46a9ef]">
                             // A1S&#123;root_access_granted&#125;
                        </span>
                    </p>

                    <div className="pt-16">
                        <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12">
                            <SchoolAffiliations label="ISITE" status="CONNECTED" />
                            <div className="hidden md:block w-px h-8 bg-slate-800" />
                            <SchoolAffiliations label="PUP SMB" status="AUTHENTICATED" />
                            <div className="hidden md:block w-px h-8 bg-slate-800" />
                            <SchoolAffiliations label="ACES" status="ENCRYPTED" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-10 left-10 w-32 h-32 border-l-2 border-t-2 border-cyan-500/30 rounded-tl-lg opacity-50" />
            <div className="absolute bottom-10 right-10 w-32 h-32 border-r-2 border-b-2 border-indigo-500/30 rounded-br-lg opacity-50" />
               <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-50 bg-size-[100%_2px,3px_100%] opacity-20"></div>
       
       </section>
        
    );
}
function SchoolAffiliations({ label, status }: { label: string; status: string }) {
    return (
        <div className="flex items-center gap-3 group cursor-default">
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-slate-400 group-hover:text-cyan-400 group-hover:border-cyan-500/50 transition-colors">
                <Network className="w-4 h-4" />
            </div>
            <div className="text-left">
                <div className="text-xs text-slate-500 font-mono tracking-wider">PROTOCOL</div>
                <div className="text-sm font-bold text-slate-300 group-hover:text-white">{label}</div>
            </div>
        </div>
    );
}