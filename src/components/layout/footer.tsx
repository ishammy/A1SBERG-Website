'use client';
export default function Footer() {
  return (
    <footer className=" w-full bg-[#0f2344] text-[#d2ecff] border-t border-[#46a9ef]/40">
      <div className="max-w-7xl mx-auto px-6 py-5">
        <div className="text-center">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              <span className="text-[#46a9ef]">A1S</span>BERG
            </h2>
            <p className="text-sm text-[#d2ecff]/80 mt-2 leading-relaxed  text-center">
              We are A1SBERG—The tip of security innovation at PUPSMBC
            </p>
        </div>
        <div className="mt-10 border-t border-[#46a9ef]/40"></div>
        <div className="text-center text-xs text-[#d2ecff]/80 mt-6">
          © {new Date().getFullYear()} <span className="font-semibold text-[#4692ef]">A1SBERG</span>. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
