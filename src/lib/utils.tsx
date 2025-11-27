
import { JSX } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function GridOverlay(): JSX.Element {
    return (
        <div
            className="absolute inset-0 opacity-[0.12]"
            style={{
                backgroundImage: `
          linear-gradient(rgba(6,182,212,0.12) 1px, transparent 1px),
          linear-gradient(90deg, rgba(6,182,212,0.12) 1px, transparent 1px)
        `,
                backgroundSize: "60px 60px"
            }}
        />
    );
}
