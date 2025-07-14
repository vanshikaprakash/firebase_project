
"use client";

import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";
import React, { useEffect, useState } from "react";
import AuthButton from "./AuthButton";

const MindBloomIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg {...props} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z" fill="currentColor" fillOpacity="0.1"/>
        <path d="M12 6C9.24 6 7 8.24 7 11C7 12.76 7.85 14.31 9.25 15.26C9.42 15.77 9.64 16.26 9.9 16.7C10.15 17.14 10.45 17.55 10.79 17.9C11.13 17.55 11.43 17.14 11.68 16.7C11.94 16.26 12.16 15.77 12.33 15.26C13.73 14.31 14.58 12.76 14.58 11C14.58 8.24 12.34 6 12 6Z" fill="currentColor"/>
    </svg>
)

export default function Header() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <MindBloomIcon className="h-6 w-6 text-primary" />
            <span className="font-bold sm:inline-block">MindBloom</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-2 text-sm">
            <Link
              href="/check-in"
              className="transition-colors text-foreground/60 rounded-md px-3 py-2 hover:bg-primary/20 hover:text-foreground font-medium hover:font-bold"
            >
              Check-in
            </Link>
            <Link
              href="/calm-corner"
              className="transition-colors text-foreground/60 rounded-md px-3 py-2 hover:bg-primary/20 hover:text-foreground font-medium hover:font-bold"
            >
              Calm Corner
            </Link>
            <Link
              href="/resources"
              className="transition-colors text-foreground/60 rounded-md px-3 py-2 hover:bg-primary/20 hover:text-foreground font-medium hover:font-bold"
            >
              Resources
            </Link>
            <Link
              href="/forum"
              className="transition-colors text-foreground/60 rounded-md px-3 py-2 hover:bg-primary/20 hover:text-foreground font-medium hover:font-bold"
            >
              Forum
            </Link>
             <Link
              href="/about"
              className="transition-colors text-foreground/60 rounded-md px-3 py-2 hover:bg-primary/20 hover:text-foreground font-medium hover:font-bold"
            >
              About
            </Link>
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-end space-x-4">
          {isClient ? (
            <>
              <ThemeToggle />
              <AuthButton />
            </>
          ) : (
            <div className="h-10 w-24" /> // Placeholder for server render
          )}
        </div>
      </div>
    </header>
  );
}
