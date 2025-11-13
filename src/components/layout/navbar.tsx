'use client';
import * as React from 'react';
import { Button as Button } from '@/components/ui/button';

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
import { Menu } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useIsScrolled, useScrollProgress } from '@/hooks/use-scroll';
import { motion } from 'framer-motion';


const mainNavLinks = [
  { href: '/', label: 'Home', active: true },
   { href: '/about', label: 'About' },
   { href: '/about', label: 'Team' },
   { href: '/about', label: 'Achievements' },

];


export default function Navbar() {
    /*
    ------------------------------------------------------------------------

        USE STATES 

    ------------------------------------------------------------------------
    */

    const isMobile = useIsMobile();
    const progress = useScrollProgress();
    const isScrolled = useIsScrolled();
    /*
     ------------------------------------------------------------------------
     
         HANDLERS
 
     ------------------------------------------------------------------------
     */

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className={clsx(
                "fixed top-0 w-full z-100 transition-all duration-500 backdrop-blur-xl border-b",
                isScrolled
                    ? " bg-[#0f2344] border-[#153568] shadow-[0_4px_20px_rgba(217,70,239,0.25)]"
                    : "bg-linear-to-b from-[#0f2344] to-transparent border-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">

                <div className="flex items-center gap-2">
    
                    {isMobile && (
  <Popover>
    <PopoverTrigger asChild>
      <Button
        className="text-[#d2ecff] hover:text-[#53b7ff] transition-colors p-2"
        variant="ghost"
        size="icon"
      >
        <Menu size={24} />
      </Button>
    </PopoverTrigger>

    <PopoverContent
      align="start"
      className="w-56 p-4 bg-[#0f2344] rounded-xl shadow-lg border border-[#153568] mt-5"
    >
      <NavigationMenu className="max-w-none">
        <NavigationMenuList className="flex flex-col gap-2">
          {mainNavLinks.map((link, index) => (
            <NavigationMenuItem key={index} className="w-full">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={link.href}
                  className={cn(
                    "flex w-full items-center rounded-lg px-4 py-2 text-sm font-medium transition-colors cursor-pointer",
                    link.active
                      ? "bg-[#3c9de1]/20 text-[#3c9de1]"
                      : "text-gray-200 hover:text-[#46abef]/20 hover:text-[#46abef]"
                  )}
                >
                  {link.label}
                </Link>
              </motion.div>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </PopoverContent>
  </Popover>
)}

            
                    <div className="flex items-center gap-6">
                        <Link
                             href="/"
                            className="flex items-center space-x-2 text-primary hover:text-primary/90 transition-colors cursor-pointer"
                        >
                            <span className="hidden font-bold text-xl sm:inline-block">
                                <h1 className="text-2xl font-bold tracking-wide text-white select-none">
                                    <span className="text-[#3c9de1]">A1S</span>BERG
                                </h1></span>
                        </Link>
                     
                       
                    </div>
                </div>
                {!isMobile && (
                    <NavigationMenu className="flex ">
                        <NavigationMenuList className="space-x-8">
                            {mainNavLinks.map((link, index) => (
                                <NavigationMenuItem key={index}>
                                    <Link
                                        href={link.href}

                                        className={cn(
                                            "text-gray-200 hover:text-[#5e9bfc] text-sm font-semibold uppercase",
                                            link.active
                                                ? ""
                                                : ""
                                        )}
                                    >
                                        {link.label}
                                    </Link>
                                </NavigationMenuItem>
                            ))}
                        </NavigationMenuList>
                    </NavigationMenu>
                )}
               
            </div>
            <div
                className="h-[3px] bg-linear-to-r from-[#80b1ff] to-[#3c82f3]"
                style={{ width: `${progress}%` }}
            />
        </motion.nav>
    );
}



