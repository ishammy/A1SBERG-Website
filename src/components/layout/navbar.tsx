'use client';
import * as React from 'react';
import { Button } from '@/components/ui/button';
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
} from '@/components/ui/navigation-menu';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';
import { cn } from '@/lib/utils';
import clsx from 'clsx';
import Link from 'next/link';
import { Menu, Shield, ChevronRight, X } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useIsScrolled } from '@/hooks/use-scroll';
import { motion } from 'framer-motion';
import Image from 'next/image';

const mainNavLinks = [
    { href: '/', label: 'Home', active: true },
    { href: '/solutions', label: 'Solutions' },
    { href: '/services', label: 'Services' },
    { href: '/resource', label: 'Resources' },
    { href: '/about', label: 'About' },
];

export default function Navbar() {
    const isMobile = useIsMobile();
    const isScrolled = useIsScrolled();
    const [open, setOpen] = React.useState(false);

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className={clsx(
                    "fixed top-0 w-full z-50 transition-all duration-300 bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50",
                    isScrolled
                        ? "bg-slate-950/95 backdrop-blur-xl border-b border-slate-800/50"
                        : "bg-slate-950/20 backdrop-blur-md"
                )}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <Link href="/" className="flex items-center space-x-3 group">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                className="relative"
                            >
                                <div className="absolute inset-0 bg-cyan-500/20 blur-xl rounded-full group-hover:bg-cyan-500/30 transition-all duration-300" />
                                <Image
                                    src="/assets/a1sberg.png"
                                    alt="A1SBERG"
                                    width={48}
                                    height={48}
                                    className="relative z-10"
                                />
                            </motion.div>
                            <div className="hidden sm:block">
                                <div className="text-xl font-bold text-white tracking-tight">
                                    A1SBERG
                                </div>
                                <div className="text-[10px] text-cyan-400 font-medium tracking-wider uppercase">
                                    Cybersecurity Solutions
                                </div>
                            </div>
                        </Link>
                        {!isMobile && (
                            <NavigationMenu>
                                <NavigationMenuList className="flex items-center gap-1">
                                    {mainNavLinks.map((link, index) => (
                                        <NavigationMenuItem key={index}>
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "relative px-4 py-2 text-sm font-medium transition-all duration-200 rounded-lg",
                                                    link.active
                                                        ? "text-cyan-400"
                                                        : "text-gray-300 hover:text-cyan-300"
                                                )}
                                            >
                                                <span className="relative z-10">{link.label}</span>
                                                {link.active && (
                                                    <motion.div
                                                        layoutId="activeTab"
                                                        className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg"
                                                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                                                    />
                                                )}
                                            </Link>
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        )}
                        <div className="flex items-center gap-3">
                            {!isMobile && (
                                <>
                                    <Button
                                        variant="ghost"
                                        className="text-gray-300 hover:text-white hover:bg-slate-800/50"
                                    >
                                        Contact Us
                                    </Button>
                                    <Button
                                        className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white shadow-lg shadow-cyan-500/25 transition-all duration-300"
                                    >
                                        Get Started
                                        <ChevronRight className="ml-1 h-4 w-4" />
                                    </Button>
                                </>
                            )}
                            {isMobile && (
                                <Popover open={open} onOpenChange={setOpen}>
                                    <PopoverTrigger asChild>
                                        <Button
                                            variant="ghost"
                                            size="icon"
                                            className="text-white hover:bg-slate-800/50"
                                        >
                                            <Menu className="h-6 w-6" />
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent
                                        align="end"
                                        className="w-screen h-screen sm:w-80 sm:h-auto bg-slate-950/98 backdrop-blur-xl border-slate-800/50 sm:rounded-lg p-0 mt-2"
                                    >
                                        <div className="flex flex-col gap-6 p-6">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-3">
                                                    <Image
                                                        src="/assets/a1sberg.png"
                                                        alt="A1SBERG"
                                                        width={40}
                                                        height={40}
                                                    />
                                                    <div>
                                                        <div className="text-lg font-bold text-white">A1SBERG</div>
                                                        <div className="text-xs text-cyan-400">Cybersecurity Solutions</div>
                                                    </div>
                                                </div>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    onClick={() => setOpen(false)}
                                                    className="text-gray-400 hover:text-white"
                                                >
                                                    <X className="h-5 w-5" />
                                                </Button>
                                            </div>
                                            <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                                            <nav className="flex flex-col gap-2">
                                                {mainNavLinks.map((link, index) => (
                                                    <Link
                                                        key={index}
                                                        href={link.href}
                                                        onClick={() => setOpen(false)}
                                                        className={cn(
                                                            "flex items-center justify-between px-4 py-3 rounded-lg transition-all duration-200",
                                                            link.active
                                                                ? "bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400"
                                                                : "text-gray-300 hover:bg-slate-800/50 hover:text-white"
                                                        )}
                                                    >
                                                        <span className="font-medium">{link.label}</span>
                                                        {link.active && <Shield className="h-4 w-4" />}
                                                    </Link>
                                                ))}
                                            </nav>
                                            <div className="h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />
                                            <div className="flex flex-col gap-3">
                                                <Button
                                                    variant="outline"
                                                    className="w-full border-slate-700 text-gray-300 hover:bg-slate-800/50"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    Contact Us
                                                </Button>
                                                <Button
                                                    className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white"
                                                    onClick={() => setOpen(false)}
                                                >
                                                    Get Started
                                                    <ChevronRight className="ml-1 h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            )}
                        </div>
                    </div>
                </div>
            </motion.nav>
            <div className="h-20 bg-transparent" />
        </>
    );
}
