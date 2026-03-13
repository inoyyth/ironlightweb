"use client";

import { useState } from "react";
import Svg from "../shared/Svg";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { NAV_ITEMS, ButtonNavigation } from "@/constants/navigation";

export default function Topbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // get current url path to determine active nav item
  const path = usePathname();

  const navItems = NAV_ITEMS.map((item) => ({ ...item, active: path === item.href }));

  return (
    <header className="sticky top-0 z-50 flex h-16 lg:h-auto  shrink-0 items-center bg-neutral-900">
      <div className="container mx-auto flex max-w-7xl items-center justify-between bg-neutral-950 px-10 py-5 pt-11 lg:px-10 lg:py-4">
        {/* Logo */}
        <a href="/">
          <span className="text-lg font-semibold text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" width="145" height="40" viewBox="0 0 116 32" fill="none">
              <g clip-path="url(#clip0_4266_39778)">
                <path d="M23.8824 21.4468L11.9412 0L0 21.4468L6.14118 32H18.0824L23.8824 21.4468Z" fill="white"/>
                <path d="M29.9033 26.5532V15.1149H32.1469V26.5532H29.9033ZM34.4734 26.5532V15.1149H38.7313C39.5392 15.1149 40.2543 15.2728 40.8766 15.5887C41.4989 15.9047 41.9847 16.3404 42.3341 16.896C42.6835 17.4407 42.8581 18.0779 42.8581 18.8078C42.8581 19.5268 42.6725 20.1695 42.3013 20.736C41.9411 21.2916 41.4443 21.7273 40.8111 22.0432C40.1779 22.3482 39.4573 22.5007 38.6494 22.5007H36.717V26.5532H34.4734ZM40.7783 26.5532L38.1253 21.9615L39.8449 20.736L43.3167 26.5532H40.7783ZM36.717 20.4582H38.7476C39.0861 20.4582 39.3863 20.3874 39.6483 20.2458C39.9213 20.1042 40.1342 19.9081 40.287 19.6575C40.4508 19.407 40.5327 19.1237 40.5327 18.8078C40.5327 18.3176 40.3525 17.92 39.9923 17.615C39.6429 17.3099 39.1898 17.1574 38.633 17.1574H36.717V20.4582ZM50.1053 26.7493C48.948 26.7493 47.9217 26.4987 47.0265 25.9976C46.1422 25.4856 45.4489 24.7884 44.9467 23.906C44.4445 23.0127 44.1934 21.9942 44.1934 20.8504C44.1934 19.6848 44.4445 18.6607 44.9467 17.7784C45.4489 16.8851 46.1367 16.1879 47.0101 15.6868C47.8944 15.1857 48.9098 14.9351 50.0561 14.9351C51.2134 14.9351 52.2288 15.1911 53.1022 15.7031C53.9865 16.2042 54.6798 16.9014 55.182 17.7947C55.6842 18.6771 55.9353 19.6956 55.9353 20.8504C55.9353 21.9942 55.6842 23.0127 55.182 23.906C54.6907 24.7884 54.0029 25.4856 53.1185 25.9976C52.2451 26.4987 51.2407 26.7493 50.1053 26.7493ZM50.1053 24.7067C50.804 24.7067 51.4154 24.5433 51.9394 24.2165C52.4744 23.8788 52.8893 23.4213 53.184 22.8439C53.4897 22.2665 53.6426 21.602 53.6426 20.8504C53.6426 20.0878 53.4897 19.4179 53.184 18.8405C52.8784 18.2631 52.458 17.811 51.9231 17.4842C51.3881 17.1465 50.7658 16.9777 50.0561 16.9777C49.3683 16.9777 48.7515 17.1465 48.2056 17.4842C47.6706 17.811 47.2503 18.2631 46.9446 18.8405C46.6389 19.4179 46.4861 20.0878 46.4861 20.8504C46.4861 21.602 46.6389 22.2665 46.9446 22.8439C47.2503 23.4213 47.6761 23.8788 48.222 24.2165C48.7679 24.5433 49.3956 24.7067 50.1053 24.7067ZM57.5911 26.5532V15.1149H59.9329L65.5337 22.7949V15.1149H67.7609V26.5532H65.5337L59.8347 18.7261V26.5532H57.5911ZM70.0932 26.5532V15.1149H72.3368V24.5106H77.3808V26.5532H70.0932ZM78.7257 26.5532V15.1149H80.9693V26.5532H78.7257ZM88.6178 26.7493C87.4496 26.7493 86.4124 26.4987 85.5062 25.9976C84.611 25.4856 83.9068 24.7884 83.3937 23.906C82.8805 23.0127 82.624 21.9887 82.624 20.834C82.624 19.6793 82.8805 18.6607 83.3937 17.7784C83.9068 16.8851 84.611 16.1879 85.5062 15.6868C86.4124 15.1748 87.4496 14.9188 88.6178 14.9188C89.3165 14.9188 89.9606 15.0223 90.5502 15.2293C91.1397 15.4362 91.6583 15.7249 92.1059 16.0953C92.5645 16.4548 92.9466 16.8688 93.2523 17.3372L91.4181 18.481C91.2325 18.1869 90.9869 17.9254 90.6812 17.6967C90.3864 17.4679 90.0589 17.2882 89.6986 17.1574C89.3383 17.0267 88.978 16.9613 88.6178 16.9613C87.8972 16.9613 87.2585 17.1302 86.7017 17.4679C86.1449 17.7947 85.7082 18.2468 85.3916 18.8242C85.075 19.4015 84.9167 20.0715 84.9167 20.834C84.9167 21.5857 85.0695 22.2556 85.3752 22.8439C85.6918 23.4322 86.134 23.8951 86.7017 24.2328C87.2694 24.5596 87.9245 24.723 88.6669 24.723C89.2455 24.723 89.7587 24.6087 90.2063 24.3799C90.6648 24.1511 91.0251 23.8298 91.2871 23.4158C91.5491 23.0019 91.6801 22.5225 91.6801 21.9779L93.8091 21.651C93.8091 22.7295 93.5853 23.65 93.1377 24.4126C92.701 25.1751 92.0896 25.7579 91.3035 26.161C90.5283 26.5532 89.6331 26.7493 88.6178 26.7493ZM88.9944 22.1739V20.4255H93.8091V21.8145L92.5972 22.1739H88.9944ZM102.852 26.5532V15.1149H105.095V26.5532H102.852ZM95.3021 26.5532V15.0985H97.5457V26.5532H95.3021ZM96.9725 21.7327V19.6739H103.916V21.7327H96.9725ZM109.844 26.5532V17.1574H106.405V15.1149H115.511V17.1574H112.088V26.5532H109.844Z" fill="white"/>
                <path d="M19.7886 13.9575L16.718 8.51065L7.16504 25.8724H8.18857L19.7886 13.9575Z" fill="black"/>
                <path d="M16.718 8.51065L7.16504 25.8724H8.18857L19.7886 13.9575" stroke="#FFF981" stroke-width="0.2"/>
              </g>
              <defs>
                <clipPath id="clip0_4266_39778">
                  <rect width="116" height="32" fill="white"/>
                </clipPath>
              </defs>
            </svg>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center lg:flex">
          {/* Map through nav items and apply active class based on current path */}
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={clsx("px-9 py-3 text-base text-neutral-25 hover:border-b border-secondary-600", { "border-b border-secondary-600": path === item.href })}
            >
              {item.label}
            </a>
          ))}
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
                {ButtonNavigation.buttonWork}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile hamburger / close toggle */}
        <button
          className="flex items-center justify-center text-neutral-25 lg:hidden"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          {menuOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="4" y1="4" x2="20" y2="20" />
              <line x1="20" y1="4" x2="4" y2="20" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu — clip wrapper anchored to toolbar bottom */}
      <div className={`fixed top-16 left-0 right-0 bottom-0 z-40 overflow-hidden lg:hidden ${!menuOpen ? "pointer-events-none" : ""}`}>
        <div
          className={`flex h-full flex-col bg-neutral-950 px-5 py-3 transition-transform duration-300 ease-in-out ${
            menuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {/* Nav items */}
          <nav className="flex flex-col py-3 px-5">
            {navItems.map((item) => (
              <div key={item.label} className="border-b border-neutral-700">
                <div className="flex items-center gap-3 py-6">
                  {item.active && (
                    <span className="text-secondary-600 font-semibold text-base">
                      <Svg use="arrow" className="h-6 w-6 text-secondary-600" />
                    </span>
                  )}
                  <a href={item.href} className={`text-base font-semibold ${item.active ? "text-secondary-600" : "text-neutral-25"}`}>
                    {item.label}
                  </a>
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
      </div>
    </header>
  );
}
