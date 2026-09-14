"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";
import {  specialtiesNav, methodsNav } from "@/lib/data";

const navLinkClass =
  "font-sans text-xs font-normal uppercase tracking-[0.22em] text-stone-700 transition-colors hover:text-teal-700";
const navLinkClassMOBILE =
  "font-sans text-3xl ml-5 font-normal uppercase tracking-[0.22em] text-stone-700 transition-colors hover:text-teal-700";

function DesktopDropdown({ label, isOpen, onEnter, onLeave, children }) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className={`${navLinkClass} flex items-center gap-1`}
        aria-expanded={isOpen}
      >
        {label}
        {/* <svg
          className={`h-3 w-3 transition-transform ${isOpen ? "rotate-180" : ""}`}
          viewBox="0 0 12 8"
          fill="none"
        >
          <path
            d="M1 1.5L6 6.5L11 1.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg> */}
      </button>
      {isOpen && (
        <div className="absolute left-1/2 top-full z-40 w-64 -translate-x-1/2 pt-4">
          <ul className="rounded-2xl border border-stone-200 bg-white p-3 shadow-xl shadow-stone-900/5">
            {children}
          </ul>
        </div>
      )}
    </div>
  );
}

export default function Header() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSubMenu, setActiveSubMenu] = useState(null); // 'team' | 'specialties' | 'methods' | null

  const handleCloseMobile = () => {
    setMobileOpen(false);
    setActiveSubMenu(null);
  };

  return (
    <header className="pb-10 z-50 border-stone-200 bg-[#f7f6f2] backdrop-blur">
      <Container className="flex h-20 py-20 px-10 sm:py-5 items-center justify-between sm:h-28">
        <Link
          href="/"
          className="font-(family-name:--font-cormorant) text-4xl font-normal text-[#2d3130] antialiased sm:text-[42px]"
          onClick={handleCloseMobile}
        >
          Dr. Maya Reynolds
          <span className="block mt-2 font-sans text-sm font-normal uppercase tracking-[0.28em] text-[#86a7a7] sm:mt-1 sm:text-xs sm:tracking-[0.56em]">
            Clinical Psychologist
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/about" className={navLinkClass}>
            About
          </Link>

          {/* <DesktopDropdown
            label="Our Team"
            isOpen={openDropdown === "team"}
            onEnter={() => setOpenDropdown("team")}
            onLeave={() => setOpenDropdown(null)}
          >
            {team.map((person) => (
              <li key={person.slug}>
                <Link
                  href={`/${person.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 hover:text-teal-700"
                >
                  {person.name}, {person.title}
                </Link>
              </li>
            ))}
          </DesktopDropdown> */}

          <DesktopDropdown
            label="Specialties"
            isOpen={openDropdown === "specialties"}
            onEnter={() => setOpenDropdown("specialties")}
            onLeave={() => setOpenDropdown(null)}
          >
            {specialtiesNav.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${item.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 hover:text-teal-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </DesktopDropdown>

          <DesktopDropdown
            label="Methods"
            isOpen={openDropdown === "methods"}
            onEnter={() => setOpenDropdown("methods")}
            onLeave={() => setOpenDropdown(null)}
          >
            {methodsNav.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/${item.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm text-stone-700 hover:bg-stone-100 hover:text-teal-700"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </DesktopDropdown>

          <Link href="/faq" className={navLinkClass}>
            FAQs
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-[50%] border border-stone-700 bg-white px-6 py-4 font-sans text-xs font-normal uppercase tracking-[0.22em] text-stone-700 transition-colors hover:bg-black hover:text-stone-100"
          >
            Contact
          </Link>
        </nav>

        <button
          className="flex h-10 w-10 flex-col items-center cursor-pointer justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => {
            setMobileOpen((v) => !v);
            setActiveSubMenu(null);
          }}
        >
          <span
            className={`h-px w-6 bg-stone-900 transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-stone-900 transition-opacity ${mobileOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-px w-6 bg-stone-900 transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </Container>

      {mobileOpen && (
        <div className="relative h-[calc(100vh-5rem)] overflow-hidden border-t border-stone-200 bg-[#f7f6f2] lg:hidden">
 
          <div
            className={`absolute inset-0 flex flex-col justify-between overflow-y-auto p-6 transition-transform duration-300 ease-in-out ${
              activeSubMenu ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="flex flex-col space-y-6">
              <Link
                href="/about"
                className={`${navLinkClassMOBILE} cursor-pointer text-left`}
                onClick={handleCloseMobile}
              >
                About
              </Link>

              {/* <button
                className={`${navLinkClassMOBILE} flex items-center cursor-pointer text-left`}
                onClick={() => setActiveSubMenu("team")}
              >
                <span>Our Team</span>
                <span className="text-stone-400 ml-5 mb-2 text-5xl">›</span>
              </button> */}

              <button
                className={`${navLinkClassMOBILE} flex items-center cursor-pointer text-left`}
                onClick={() => setActiveSubMenu("specialties")}
              >
                <span>Specialties</span>
                <span className="text-stone-400 ml-5 mb-2 text-5xl">›</span>
              </button>

              <button
                className={`${navLinkClassMOBILE} flex items-center cursor-pointer text-left`}
                onClick={() => setActiveSubMenu("methods")}
              >
                <span>Methods</span>
                <span className="text-stone-400 ml-5 mb-2 text-5xl">›</span>
              </button>

              <Link
                href="/faq"
                className={`${navLinkClassMOBILE} cursor-pointer text-left`}
                onClick={handleCloseMobile}
              >
                FAQs
              </Link>
            </div>

            <div className="pt-8 pb-4">
              <Link
                href="/contact"
                className="inline-flex w-[40%] items-center cursor-pointer justify-center rounded-[50%] border border-stone-700 bg-white py-3.5 font-sans text-xs font-normal uppercase tracking-[0.22em] text-stone-700 transition-colors hover:bg-black hover:text-white"
                onClick={handleCloseMobile}
              >
                Contact
              </Link>
            </div>
          </div>

          <div
            className={`absolute inset-0 overflow-y-auto bg-[#f7f6f2] p-6 transition-transform duration-300 ease-in-out ${
              activeSubMenu ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={() => setActiveSubMenu(null)}
              className="flex items-center cursor-pointer gap-2 font-sans text-base font-light uppercase tracking-[0.15em] text-[#86a7a7] hover:text-stone-900"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
              BACK
            </button>

            <div className="mt-8 space-y-6">
              {/* {activeSubMenu === "team" &&
                team.map((person) => (
                  <Link
                    key={person.slug}
                    href={`/${person.slug}`}
                    className="block font-sans text-base font-normal uppercase tracking-[0.12em] text-[#2d3130] transition-colors hover:text-teal-700 sm:text-lg"
                    onClick={handleCloseMobile}
                  >
                    {person.name}, {person.title}
                  </Link>
                ))} */}

              {activeSubMenu === "specialties" &&
                specialtiesNav.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="block font-sans text-base font-normal uppercase tracking-[0.12em] text-[#2d3130] transition-colors hover:text-teal-700 sm:text-lg"
                    onClick={handleCloseMobile}
                  >
                    {item.label}
                  </Link>
                ))}

              {activeSubMenu === "methods" &&
                methodsNav.map((item) => (
                  <Link
                    key={item.slug}
                    href={`/${item.slug}`}
                    className="block font-sans text-base font-normal uppercase tracking-[0.12em] text-[#2d3130] transition-colors hover:text-teal-700 sm:text-lg"
                    onClick={handleCloseMobile}
                  >
                    {item.label}
                  </Link>
                ))}
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
