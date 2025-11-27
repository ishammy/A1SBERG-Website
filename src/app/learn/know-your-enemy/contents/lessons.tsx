import { Shield, CheckCircle, Globe, AlertOctagon, UserX, AlertTriangle, Smartphone, Users, XCircle, BrainCircuit, Eye, Lock } from "lucide-react";
// Hardcoded Lessons just for now - to be replaced latedr
export const lessons = [
  {
    id: 'fundamentals',
    title: 'Fundamentals & Risk',
    icon: <Shield className="w-5 h-5" />,
    checkQuestion: {
        question: "Which part of the CIA Triad ensures data is not altered by unauthorized people?",
        options: ["Confidentiality", "Integrity", "Availability"],
        correct: 1 
    },
    content: (
      <div className="space-y-8 animate-in fade-in duration-500">
        <div>
          <h2 className="text-3xl font-bold text-cyan-400 font-mono mb-4">The CIA Triad</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Cybersecurity is a life skill operating in the newest domain: <strong className="text-white">Cyberspace</strong>. 
            At its core is the CIA Triad, which governs how we protect data vs. information.
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { title: 'Confidentiality', desc: 'Only authorized individuals can access information.', icon: <Lock className="w-5 h-5 mb-2 text-cyan-400"/> },
              { title: 'Integrity', desc: 'Information remains consistent and correct; no unauthorized changes.', icon: <CheckCircle className="w-5 h-5 mb-2 text-cyan-400"/> },
              { title: 'Availability', desc: 'Information is accessible when and where it is needed.', icon: <Globe className="w-5 h-5 mb-2 text-cyan-400"/> }
            ].map((item, idx) => (
              <div key={idx} className="bg-slate-900 p-5 rounded-lg border border-slate-700 hover:border-cyan-500 transition-colors">
                {item.icon}
                <div className="text-white font-bold mb-2">{item.title}</div>
                <p className="text-sm text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-slate-800/50 p-6 rounded-xl border-l-4 border-blue-500">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
            <AlertOctagon className="w-5 h-5 text-blue-400"/> Risk Management Strategies
          </h3>
          <p className="text-slate-300 mb-4 text-sm">
            You deal with risk every day (like crossing a street). In cybersecurity, we handle risk in four ways:
          </p>
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-900 p-3 rounded border border-slate-700">
              <span className="text-blue-400 font-bold block">1. Avoid</span>
              <span className="text-slate-400 text-sm">Eliminate the risk entirely (e.g., Don't visit suspicious sites).</span>
            </div>
            <div className="bg-slate-900 p-3 rounded border border-slate-700">
              <span className="text-blue-400 font-bold block">2. Mitigate</span>
              <span className="text-slate-400 text-sm">Reduce the impact (e.g., Use Antivirus, MFA, Strong Passwords).</span>
            </div>
            <div className="bg-slate-900 p-3 rounded border border-slate-700">
              <span className="text-blue-400 font-bold block">3. Transfer</span>
              <span className="text-slate-400 text-sm">Pass the risk to a third party (e.g., Insurance, Cloud Providers).</span>
            </div>
            <div className="bg-slate-900 p-3 rounded border border-slate-700">
              <span className="text-blue-400 font-bold block">4. Accept</span>
              <span className="text-slate-400 text-sm">Acknowledge low risk and proceed carefully (e.g., Minor popup ads).</span>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'web-layers',
    title: 'The Web Iceberg',
    icon: <Globe className="w-5 h-5" />,
    checkQuestion: {
        question: "Which layer of the web requires special software like TOR to access?",
        options: ["Deep Web", "Surface Web", "Dark Web"],
        correct: 2 
    },
    content: (
      <div className="space-y-6 animate-in fade-in duration-500">
        <h2 className="text-3xl font-bold text-cyan-400 font-mono">Layers of the Web</h2>
        <p className="text-slate-300">
          The internet is like an iceberg. What you see is only a fraction of what exists.
        </p>

        <div className="relative w-full max-w-2xl mx-auto mt-8 space-y-2">
   
          <div className="bg-blue-400/20 p-6 rounded-t-xl border border-blue-400 text-center relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-1 bg-blue-400"></div>
            <h3 className="text-blue-300 font-bold text-xl uppercase tracking-widest">Surface Web</h3>
            <p className="text-sm text-blue-100 mt-2">
              Accessible via Google, Yahoo, Bing. The "visible" internet.
            </p>
          </div>

          <div className="bg-indigo-600/30 p-10 border border-indigo-500 text-center mx-4 relative group">
             <h3 className="text-indigo-300 font-bold text-xl uppercase tracking-widest">Deep Web</h3>
            <p className="text-sm text-indigo-100 mt-2">
              <strong>90%+ of the internet.</strong> Databases, password-protected sites, bank accounts, academic journals. 
              Search engine crawlers cannot index this.
            </p>
          </div>

          <div className="bg-slate-900 p-12 rounded-b-xl border border-red-900/60 text-center mx-8 relative shadow-[0_0_30px_rgba(220,38,38,0.1)]">
            <h3 className="text-red-500 font-bold text-xl uppercase tracking-widest">Dark Web</h3>
            <p className="text-sm text-slate-400 mt-2">
              Requires special software (TOR). Contains illegal marketplaces (drugs, weapons), hired hackers, and anonymity networks.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'phishing',
    title: 'Social Engineering',
    icon: <UserX className="w-5 h-5" />,
    checkQuestion: {
        question: "Targeting a 'Big Fish' executive (CEO/CFO) is known as:",
        options: ["Spear Phishing", "Whaling", "Vishing"],
        correct: 1 
    },
    content: (
      <div className="space-y-8 animate-in fade-in duration-500">
        <div>
           <h2 className="text-3xl font-bold text-red-400 font-mono mb-4">Hacking Humans</h2>
          <p className="text-slate-300">
            <strong>Social Engineering</strong> attacks manipulate psychology rather than technology. 
            Criminals use urgency, fear, and curiosity to trick you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-slate-800 p-5 rounded-lg border-t-4 border-yellow-500">
            <h3 className="text-lg font-bold text-white mb-2">Mass-Scale Phishing</h3>
            <p className="text-slate-400 text-sm">
              Generic, wide-net attacks. Usually emails with "Dear Customer" and generic attachments containing malware.
            </p>
          </div>
          <div className="bg-slate-800 p-5 rounded-lg border-t-4 border-orange-500">
            <h3 className="text-lg font-bold text-white mb-2">Spear Phishing</h3>
            <p className="text-slate-400 text-sm">
              Highly targeted. Hackers research specific individuals to steal sensitive info.
            </p>
          </div>
          <div className="bg-slate-800 p-5 rounded-lg border-t-4 border-red-600 md:col-span-2 flex flex-col md:flex-row gap-4 items-center">
             <div className="flex-1">
              <h3 className="text-lg font-bold text-white mb-2">Whaling</h3>
              <p className="text-slate-400 text-sm">
                Targeting the "Big Fish" (CEOs, CFOs). High stakes, high reward for criminals.
              </p>
            </div>
            <div className="bg-slate-900 p-3 rounded border border-red-900/50 text-xs text-red-300">
              Also common: <br/>
              <strong>Smishing:</strong> Phishing via SMS text.<br/>
              <strong>Vishing:</strong> Phishing via Voice calls.
            </div>
          </div>
        </div>

        <div className="bg-red-950/30 border border-red-500/30 p-4 rounded-lg flex items-start gap-4">
          <AlertTriangle className="w-6 h-6 text-red-500 shrink-0 mt-1" />
          <div>
            <h4 className="text-white font-bold">The Golden Rule</h4>
            <p className="text-slate-400 text-sm mt-1">
              Banks and legitimate organizations will <strong>NEVER</strong> ask for your password via email, SMS, or call. 
              Be skeptical of "Account Disabled" or "Verify Now" links.
            </p>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'social-media',
    title: 'Social Media & Privacy',
    icon: <Smartphone className="w-5 h-5" />,
    checkQuestion: {
        question: "Posting your location in real-time tells criminals:",
        options: ["You are cool", "Where you aren't (your home is empty)", "Your phone model"],
        correct: 1 
    },
    content: (
      <div className="space-y-8 animate-in fade-in duration-500">
        <div>
          <h2 className="text-3xl font-bold text-pink-400 font-mono mb-4">You Are The Product</h2>
          <p className="text-slate-300">
             Treating social media as a diary creates a "Digital Footprint" that criminals can exploit.
             Oversharing provides data for Identity Theft.
          </p>
        </div>

        <div className="space-y-4">
          <div className="bg-slate-800 p-5 rounded-lg flex items-start gap-4 hover:bg-slate-750 transition">
            <div className="bg-pink-500/20 p-2 rounded text-pink-400"><Globe className="w-5 h-5"/></div>
            <div>
              <h3 className="text-white font-bold">The Danger of "Check-Ins"</h3>
              <p className="text-slate-400 text-sm mt-1">
                Posting your location in real-time tells criminals two things: where you are, and <strong>where you aren't</strong> (leaving your home vulnerable to burglary).
              </p>
            </div>
          </div>

          <div className="bg-slate-800 p-5 rounded-lg flex items-start gap-4 hover:bg-slate-750 transition">
            <div className="bg-pink-500/20 p-2 rounded text-pink-400"><UserX className="w-5 h-5"/></div>
            <div>
              <h3 className="text-white font-bold">The Maiden Name Trap</h3>
              <p className="text-slate-400 text-sm mt-1">
                Putting your Middle Name (Mother's Maiden Name) on your profile gives away a common <strong>security question answer</strong> for banking and password resets.
              </p>
            </div>
          </div>

          <div className="bg-slate-800 p-5 rounded-lg flex items-start gap-4 hover:bg-slate-750 transition">
            <div className="bg-pink-500/20 p-2 rounded text-pink-400"><Lock className="w-5 h-5"/></div>
            <div>
              <h3 className="text-white font-bold">Password Sharing</h3>
              <p className="text-slate-400 text-sm mt-1">
                Relationships should be trust-centric, not surveillance-centric. Never share passwords with partners. 
                If they break up with you, they still have your digital life.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 'bullying-news',
    title: 'Bullying & Fake News',
    icon: <Users className="w-5 h-5" />,
    checkQuestion: {
        question: "Disinformation is different from Misinformation because:",
        options: ["It has intent to harm", "It is longer", "It uses videos"],
        correct: 0 
    },
    content: (
      <div className="space-y-8 animate-in fade-in duration-500">

        <section>
          <h2 className="text-3xl font-bold text-orange-400 font-mono mb-4">Cyberbullying</h2>
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div className="bg-slate-900 p-4 rounded border-l-4 border-slate-500">
              <h4 className="text-white font-bold">Traditional Bullying</h4>
              <ul className="text-sm text-slate-400 list-disc pl-4 mt-2">
                <li>Physical / Intimidating presence</li>
                <li>Limited audience</li>
                <li>Limited to specific times (e.g., school hours)</li>
              </ul>
            </div>
            <div className="bg-slate-900 p-4 rounded border-l-4 border-orange-500">
              <h4 className="text-white font-bold">Cyberbullying</h4>
              <ul className="text-sm text-slate-400 list-disc pl-4 mt-2">
                <li><strong>Anonymous</strong> & Impulsive</li>
                <li>Wide/Infinite audience</li>
                <li>24/7 Harassment (No escape)</li>
                <li>Less sense of guilt for the bully</li>
              </ul>
            </div>
          </div>
          <div className="bg-orange-900/20 p-4 rounded text-center">
            <p className="text-orange-200 font-bold">
              Statistic: Cyberbullying victims are 2x more likely to attempt suicide.
            </p>
          </div>
        </section>

        <div className="h-px bg-slate-700"></div>

        <section>
          <h2 className="text-3xl font-bold text-yellow-400 font-mono mb-4">Disinformation</h2>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            <div className="flex-1 space-y-4">
              <div className="bg-slate-800 p-4 rounded">
                <h3 className="text-white font-bold flex items-center gap-2"><XCircle className="w-4 h-4 text-slate-400"/> Misinformation</h3>
                <p className="text-sm text-slate-400">False information spread <strong>regardless of intent</strong> (an honest mistake).</p>
              </div>
              <div className="bg-slate-800 p-4 rounded border border-yellow-500/50">
                <h3 className="text-white font-bold flex items-center gap-2"><AlertTriangle className="w-4 h-4 text-yellow-500"/> Disinformation</h3>
                <p className="text-sm text-slate-400">False information spread <strong>knowingly</strong> with intent to mislead or harm.</p>
              </div>
            </div>
            <div className="flex-1 bg-slate-900 p-6 rounded-lg text-sm text-slate-300">
              <h4 className="text-white font-bold mb-2">Common Scams:</h4>
              <ul className="space-y-2">
                <li><strong>Investment Scams:</strong> Offers "too good to be true" returns (e.g., Earn 8% daily).</li>
                <li><strong>Debt Shaming:</strong> Apps that access your contacts and shame you publicly for unpaid loans.</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    )
  },
  {
    id: 'ai-threats',
    title: 'AI Threats',
    icon: <BrainCircuit className="w-5 h-5" />,
    checkQuestion: {
        question: "How long does it take AI to crack a simple 8-character password?",
        options: ["1 year", "1 hour", "Under 10 seconds"],
        correct: 2 
    },
    content: (
      <div className="space-y-6 animate-in fade-in duration-500">
        <h2 className="text-3xl font-bold text-purple-400 font-mono">The AI Era</h2>
        <p className="text-slate-300">
          AI has weaponized cyberspace. Attacks are faster, smarter, and harder to detect.
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          <div className="bg-slate-900 p-6 rounded-xl border border-purple-500/30">
            <div className="text-4xl font-bold text-white mb-1">54%</div>
            <div className="text-purple-400 text-sm font-bold uppercase tracking-wider">Click-Through Rate</div>
            <p className="text-slate-400 text-sm mt-2">
              For AI-generated phishing emails, compared to only 12% for traditional phishing.
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-purple-500/30">
            <div className="text-4xl font-bold text-white mb-1">680%</div>
            <div className="text-purple-400 text-sm font-bold uppercase tracking-wider">Deepfake Increase</div>
            <p className="text-slate-400 text-sm mt-2">
               Rise in AI-generated fake videos/audio (Year-over-Year).
            </p>
          </div>
          <div className="bg-slate-900 p-6 rounded-xl border border-purple-500/30 md:col-span-2">
             <div className="text-4xl font-bold text-white mb-1">&lt; 10 Seconds</div>
             <div className="text-purple-400 text-sm font-bold uppercase tracking-wider">Password Cracking</div>
             <p className="text-slate-400 text-sm mt-2">
               85.6% of common passwords can be cracked by AI in under 10 seconds. Length and complexity are your only defense.
            </p>
          </div>
        </div>

        <div className="bg-purple-900/20 p-4 rounded-lg border-l-4 border-purple-500 mt-4">
          <h3 className="text-white font-bold flex items-center gap-2">
            <Eye className="w-5 h-5"/> Privacy Warning
          </h3>
          <p className="text-slate-300 italic mt-2 text-sm">
            "If it is free, you are the product."
          </p>
          <p className="text-slate-400 text-sm mt-1">
             Uploading your photo to AI apps for "enhancement" or "cartoon filters" grants them ownership of your biometric data.
          </p>
        </div>
      </div>
    )
  }
];