"use client";

import { useState } from "react";
import Link from "next/link";
import Container from "./ui/Container";
import { team, specialtiesNav, methodsNav } from "@/lib/data";

const navLinkClass =
  "text-sm font-medium   /80 transition-colors hover:text-sea-600";

function DesktopDropdown({
  label,
  isOpen,
  onEnter,
  onLeave,
  children
}) {
  return (
    <div className="relative" onMouseEnter={onEnter} onMouseLeave={onLeave}>
      <button
        className={`${navLinkClass} flex items-center gap-1`}
        aria-expanded={isOpen}
      >
        {label}
        <svg
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
        </svg>
      </button>
      {isOpen && (
        <div className="absolute left-1/2 top-full z-40 w-64 -translate-x-1/2 pt-4">
          <ul className="rounded-2xl border border-ink/10   p-3 shadow-xl shadow-ink/5">
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
  const [mobileSection, setMobileSection] = useState(null);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/5  /90 backdrop-blur">
      <Container className="flex h-20 items-center justify-between sm:h-24">
        <Link href="/" className="     text-lg font-medium    sm:text-xl">
          Conejo Valley
          <span className="block text-xs    font-semibold tracking-widest2 text-sea-600">
            FAMILY COUNSELING
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link href="/about" className={navLinkClass}>
            About
          </Link>

          <DesktopDropdown
            label="Our Team"
            isOpen={openDropdown === "team"}
            onEnter={() => setOpenDropdown("team")}
            onLeave={() => setOpenDropdown(null)}
          >
            {team.map((person) => (
              <li key={person.slug}>
                <Link
                  href={`/${person.slug}`}
                  className="block rounded-lg px-3 py-2 text-sm   /80 hover:bg-sand hover:text-sea-600"
                >
                  {person.name}, {person.title}
                </Link>
              </li>
            ))}
          </DesktopDropdown>

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
                  className="block rounded-lg px-3 py-2 text-sm   /80 hover:bg-sand hover:text-sea-600"
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
                  className="block rounded-lg px-3 py-2 text-sm   /80 hover:bg-sand hover:text-sea-600"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </DesktopDropdown>

          <Link href="/faqs" className={navLinkClass}>
            FAQs
          </Link>
          <Link href="/contact" className="btn-primary px-6! py-2.5! text-xs">
            Contact
          </Link>
        </nav>

        {/* Mobile toggle */}
        <button
          className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
        >
          <span
            className={`h-px w-6 bg-ink transition-transform ${mobileOpen ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-opacity ${mobileOpen ? "opacity-0" : "opacity-100"}`}
          />
          <span
            className={`h-px w-6 bg-ink transition-transform ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </Container>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-ink/5   lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            <Link
              href="/about"
              className="py-3 text-base font-medium   "
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <MobileAccordion
              label="Our Team"
              isOpen={mobileSection === "team"}
              onToggle={() =>
                setMobileSection(mobileSection === "team" ? null : "team")
              }
            >
              {team.map((person) => (
                <Link
                  key={person.slug}
                  href={`/${person.slug}`}
                  className="block py-2 text-sm   /70"
                  onClick={() => setMobileOpen(false)}
                >
                  {person.name}, {person.title}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion
              label="Specialties"
              isOpen={mobileSection === "specialties"}
              onToggle={() =>
                setMobileSection(
                  mobileSection === "specialties" ? null : "specialties"
                )
              }
            >
              {specialtiesNav.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="block py-2 text-sm   /70"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </MobileAccordion>

            <MobileAccordion
              label="Methods"
              isOpen={mobileSection === "methods"}
              onToggle={() =>
                setMobileSection(mobileSection === "methods" ? null : "methods")
              }
            >
              {methodsNav.map((item) => (
                <Link
                  key={item.slug}
                  href={`/${item.slug}`}
                  className="block py-2 text-sm   /70"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </MobileAccordion>

            <Link
              href="/faqs"
              className="py-3 text-base font-medium   "
              onClick={() => setMobileOpen(false)}
            >
              FAQs
            </Link>
            <Link
              href="/contact"
              className="btn-primary mt-4 w-full"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}

function MobileAccordion({
  label,
  isOpen,
  onToggle,
  children
}) {
  return (
    <div className="border-b border-ink/5 py-1">
      <button
        className="flex w-full items-center justify-between py-3 text-base font-medium   "
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        {label}
        <svg
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
        </svg>
      </button>
      {isOpen && <div className="pb-3 pl-2">{children}</div>}
    </div>
  );
}
