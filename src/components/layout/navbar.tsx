"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import clsx from "clsx";
import Link from "next/link";
import { Menu, Terminal, ChevronRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { useIsScrolled, useScrollProgress } from "@/hooks/use-scroll";
import { motion } from "framer-motion";

const mainNavLinks = [
  { href: "/", label: "Home" },
  { href: "/#events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#achievements", label: "Achievements" },
];

export default function Navbar() {
  const isMobile = useIsMobile();
  const progress = useScrollProgress();
  const isScrolled = useIsScrolled();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-500 border-b",
        isScrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-slate-800 shadow-xl shadow-cyan-900/15 py-3" // Using the enhanced styles from the previous iteration
          : "bg-transparent border-transparent py-5"
      )}
    >
      <div className="max-w-7xl mx-auto flex justify-between select-none items-center px-6 md:px-10">
        <div className="flex items-center gap-4">
          {isMobile && (
            <Popover
            open={isMenuOpen} 
              onOpenChange={setIsMenuOpen}>
              
              <PopoverTrigger asChild>
                <Button
                  onClick={() => setIsMenuOpen(true)}
                  className="text-slate-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg p-2"
                  variant="ghost"
                  size="icon"
                >
                  <Menu size={24} />
                </Button>
              </PopoverTrigger>

              <PopoverContent
                align="start"
         
                className="w-[calc(100vw-32px)] mx-4 p-3 bg-slate-900 border border-cyan-800/50 rounded-xl backdrop-blur-xl shadow-2xl shadow-cyan-900/40 mt-4"
              >
                <nav className="flex flex-col gap-1">
                  {mainNavLinks.map((link, index) => (
                    <Link
                      onClick={() => setIsMenuOpen(false)}
                      key={index}
                      href={link.href}
                      className="flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 border-l-4 border-transparent hover:border-cyan-500 transition-all duration-200"
                    >
                      {link.label}
                      <ChevronRight className="w-4 h-4 text-cyan-500" />
                    </Link>
                  ))}
                  <div className="h-px bg-slate-800 my-2" />
                  <Link href="/learn" className="w-full">
                  
                    <Button 
                      className="w-full bg-linear-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white font-bold py-3 rounded-lg shadow-lg shadow-cyan-900/40 transition-all duration-300 transform hover:scale-[1.01]" 
                    >
                      <Terminal className="w-4 h-4 mr-2" />
                      Start Learning
                    </Button>
                  </Link>
                </nav>
              </PopoverContent>
            </Popover>
          )}

          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-500/40 transition-all duration-500" />
              <Image
                src="/assets/a1sberg.png"
                alt="A1SBERG"
                width={42}
                height={42}
                className="relative z-10 drop-shadow-lg transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            <div className="hidden sm:block leading-tight">
              <div className="text-xl font-black text-white tracking-tight">
                <span className="text-cyan-400">A1S</span>BERG
              </div>
              <div className="text-[10px] text-slate-400 font-mono tracking-widest uppercase group-hover:text-cyan-300 transition-colors">
                PUP Sta. Maria Bulacan Campus
              </div>
            </div>
          </Link>
        </div>

        {!isMobile && (
          <div className="flex items-center gap-8">
            <NavigationMenu>
              <NavigationMenuList className="flex gap-8">
                {mainNavLinks.map((link, index) => (
                  <NavigationMenuItem key={index}>
                    <Link
                      href={link.href}
                      className="relative text-sm font-mono font-medium text-slate-400 hover:text-white transition-colors group/link py-2"
                    >
                      <span className="relative z-10">{link.label}</span>
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-500 transition-all duration-300 group-hover/link:w-full" />
                    </Link>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>

            <Link href="/learn">
              <Button className="cursor-pointer relative overflow-hidden bg-slate-900 border border-slate-700 text-cyan-400 hover:text-white group transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                <span className="absolute inset-0 w-full h-full bg-linear-to-r from-cyan-600/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2 font-mono font-bold tracking-wide">
                  <Terminal className="w-4 h-4" />
                  Interactive Learning
                  <ChevronRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </Link>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-slate-800">
        <div
          className="h-0.5 bg-linear-to-r from-transparent via-cyan-500 to-blue-500 shadow-[0_0_10px_#22d3ee]"
          style={{ width: `${progress}%`, transition: "width 0.1s linear" }}
        />
      </div>
    </motion.nav>
  );
}