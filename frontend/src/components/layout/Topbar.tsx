"use client";

import Image from "next/image";
import { useState } from "react";
import Svg from "../shared/Svg";

const navItems = [
  { label: "Works", active: true },
  { label: "Services" },
  { label: "About" },
];

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex h-16 lg:h-auto  shrink-0 items-center bg-neutral-900">
      <div className="container mx-auto flex max-w-7xl items-center justify-between bg-neutral-950 px-10 py-5 pt-11 lg:px-10 lg:py-4">
        {/* Logo */}
        <span className="text-lg font-semibold text-gray-800">
          <Image src="/images/logo.png" alt="App Logo" width={145} height={40} />
        </span>

        {/* Desktop nav */}
        <nav className="hidden items-center lg:flex">
          <span className="px-9 py-3 text-base text-neutral-25">Work</span>
          <span className="px-9 py-3 text-base text-neutral-25">Services</span>
          <span className="px-9 py-3 text-base text-neutral-25">About</span>
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:block">
          <div className="inline-flex items-center justify-end gap-2">
            <div className="flex h-11 items-center justify-center rounded">
              <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 self-stretch border-r border-neutral-25 bg-gradient-to-l from-white/20 to-white/0 px-5">
                <div className="font-inter justify-start text-sm font-semibold leading-5 text-neutral-25">EN</div>
              </div>
              <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 self-stretch px-5 hover:bg-gradient-to-l hover:from-white/20 hover:to-white/0">
                <div className="font-inter justify-start text-sm font-semibold leading-5 text-neutral-25">ET</div>
              </div>
            </div>
            <div className="group flex h-11 cursor-pointer items-center justify-center gap-2 rounded bg-neutral-900 px-4 outline outline-1 outline-offset-[-1px] outline-neutral-25 hover:bg-neutral-25">
              <div className="relative h-6 w-6 overflow-hidden">
                <Svg use="arrow" className="h-6 w-6 text-neutral-25 group-hover:text-neutral-900" />
              </div>
              <div className="font-inter cursor-pointer justify-start text-sm font-semibold leading-5 text-neutral-25 group-hover:bg-neutral-25 group-hover:text-neutral-900">
                Let&apos;s Work Together
              </div>
            </div>
          </div>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center text-neutral-25 lg:hidden"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-neutral-950 py-3 px-5 lg:hidden">
          {/* Header row — same height/padding as closed topbar */}
          <div className="flex h-16 shrink-0 items-center justify-between py-3 px-5">
            <Image src="/images/logo.png" alt="App Logo" width={145} height={40} />
            <button
              className="flex items-center justify-center text-neutral-25"
              onClick={() => setMenuOpen(false)}
              aria-label="Close menu"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <line x1="4" y1="4" x2="20" y2="20" />
                <line x1="20" y1="4" x2="4" y2="20" />
              </svg>
            </button>
          </div>

          {/* Nav items */}
          <nav className="flex flex-col py-3 px-5">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-neutral-700">
                <div className="flex items-center gap-3 py-6">
                  {item.active && (
                    <span className="text-secondary-600 font-semibold text-base">→</span>
                  )}
                  <span
                    className={`text-base font-semibold ${
                      item.active ? "text-secondary-600" : "text-neutral-25"
                    }`}
                  >
                    {item.label}
                  </span>
                </div>
              </div>
            ))}
          </nav>

          {/* Bottom actions */}
          <div className="mt-auto flex items-center gap-4">
            <div className="flex h-11 items-center justify-center rounded">
              <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 self-stretch border-r border-neutral-25 bg-gradient-to-l from-white/20 to-white/0 px-5">
                <div className="font-inter text-sm font-semibold leading-5 text-neutral-25">EN</div>
              </div>
              <div className="inline-flex cursor-pointer flex-col items-center justify-center gap-2.5 self-stretch px-5">
                <div className="font-inter text-sm font-semibold leading-5 text-neutral-400">ET</div>
              </div>
            </div>
            <div className="group flex h-11 flex-1 cursor-pointer items-center justify-center gap-2 rounded bg-neutral-900 px-4 outline outline-1 outline-offset-[-1px] outline-neutral-25 hover:bg-neutral-25">
              <Svg use="arrow" className="h-6 w-6 text-neutral-25 group-hover:text-neutral-900" />
              <div className="font-inter text-sm font-semibold leading-5 text-neutral-25 group-hover:text-neutral-900">
                Let&apos;s Work Together
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
