'use client';
export default function Footer() {
  return (
    <footer className="w-full bg-[#0f2344] text-[#d2ecff] border-t border-[#46a9ef]/40">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="flex flex-col md:w-1/3">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              <span className="text-[#46a9ef]">A1S</span>BERG
            </h2>
            <p className="text-sm text-[#d2ecff]/80 mt-2 leading-relaxed max-w-xs">
              We are A1SBERG—The tip of security innovation at PUPSMBC
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 md:w-2/3">
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm tracking-wide uppercase">
                Menu
              </h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-[#469aef] transition">Home</a></li>
                <li><a href="/about" className="hover:text-[#469aef] transition">About</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-3 text-sm tracking-wide uppercase">
                About Us
              </h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-[#469aef] transition">Vision</a></li>
                <li><a href="/about" className="hover:text-[#469aef] transition">Mission</a></li>
                <li><a href="/about" className="hover:text-[#469aef] transition">Core Values</a></li>
                <li><a href="/about" className="hover:text-[#469aef] transition">Goals</a></li>
              </ul>
            </div>
             <div>
              <h4 className="text-white font-semibold mb-3 text-sm tracking-wide uppercase">
                Eme Eme
              </h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/about" className="hover:text-[#469aef] transition">Team</a></li>
                <li><a href="/about" className="hover:text-[#469aef] transition">Achievements</a></li>
                <li><a href="/about" className="hover:text-[#469aef] transition">Interactive Learning</a></li>
            
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-[#46a9ef]/40"></div>
        <div className="text-center text-xs text-[#d2ecff]/80 mt-6">
          © {new Date().getFullYear()} <span className="font-semibold text-[#4692ef]">A1SBERG</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
