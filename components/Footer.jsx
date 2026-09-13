import Link from "next/link";
import { siteInfo, footerNav, legalNav, team } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="bg-white pt-16 text-[#4a5254]">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-12">

          <div className="lg:col-span-5">
            <Link
              href="/"
              className="font-(family-name:--font-cormorant) text-4xl font-normal text-[#2a2e2d] antialiased sm:text-5xl"
            >
              Conejo Valley
              <span className="mt-1 block font-sans text-[16px] font-normal uppercase tracking-[0.4em] text-[#8aa3a8]">
                Family Counseling
              </span>
            </Link>

            <p className="mt-6 max-w-md text-[18px] w-[60%] leading-relaxed text-[#596366]">
              We want to make getting started simple. You're welcome to come
              into our office in {siteInfo.city} or schedule virtual
              appointments from anywhere in {siteInfo.state}—whatever works best
              for you.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#596366]">
              Navigate
            </h4>
            <ul className="mt-4 space-y-1 text-[16px]">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#596366] transition-colors hover:text-stone-900"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#596366]">
              Our Team
            </h4>
            <ul className="mt-4 space-y-1 text-[16px]">
              {team.map((person) => (
                <li key={person.slug}>
                  <Link
                    href={`/${person.slug}`}
                    className="text-[#596366] transition-colors hover:text-stone-900"
                  >
                    {person.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-[#596366]">
              Contact
            </h4>
            <address className="mt-4 space-y-1.5 text-[16px] not-italic text-[#596366]">
              {siteInfo.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2">
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="transition-colors hover:text-stone-900"
                >
                  {siteInfo.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteInfo.phone.replace(/\D/g, "")}`}
                  className="transition-colors hover:text-stone-900"
                >
                  {siteInfo.phone}
                </a>
              </p>
            </address>
            <p className="mt-6 text-[16px] italic text-[#596366]">
              {siteInfo.serviceAreas}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 bg-[#86b3b3] py-2 text-[16px] text-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 sm:flex-row lg:px-12">
          <div className="flex flex-wrap items-center justify-center gap-x-2">
            {legalNav.map((item, i) => (
              <span key={item.href} className="flex items-center gap-2">
                <Link href={item.href} className="hover:underline">
                  {item.label}
                </Link>
                {i < legalNav.length - 1 && <span>|</span>}
              </span>
            ))}
            {legalNav.length > 0 && <span>|</span>}
            <span>Website by Walker Strategy Co.</span>
          </div>

          <p className="text-white/90">
            © {new Date().getFullYear()} {siteInfo.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
