import Link from "next/link";
import Container from "./ui/Container";
import {
  siteInfo,
  footerNav,
  legalNav,
  team,
} from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10   pt-16">
      <Container>
        <p className="max-w-2xl text-base leading-relaxed   -muted sm:text-lg">
          We want getting started to feel simple. Come into our{" "}
          {siteInfo.city} office in person, or meet virtually from anywhere in{" "}
          {siteInfo.state} — whichever works better for you.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-10 border-t border-ink/10 pt-12 sm:grid-cols-3 lg:grid-cols-4">
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest2   -muted">
              Navigate
            </h4>
            <ul className="mt-4 space-y-2.5">
              {footerNav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm   /80 hover:text-sea-600"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 sm:col-span-1">
            <h4 className="text-xs font-semibold uppercase tracking-widest2   -muted">
              Contact
            </h4>
            <address className="mt-4 space-y-1 text-sm not-italic   /80">
              {siteInfo.address.map((line) => (
                <p key={line}>{line}</p>
              ))}
              <p className="pt-2">
                <a
                  href={`mailto:${siteInfo.email}`}
                  className="hover:text-sea-600"
                >
                  {siteInfo.email}
                </a>
              </p>
              <p>
                <a
                  href={`tel:${siteInfo.phone.replace(/\D/g, "")}`}
                  className="hover:text-sea-600"
                >
                  {siteInfo.phone}
                </a>
              </p>
            </address>
            <p className="mt-4 text-sm italic   -muted">
              {siteInfo.serviceAreas}
            </p>
          </div>

          <div className="col-span-2 sm:col-span-1 lg:col-span-2">
            <h4 className="text-xs font-semibold uppercase tracking-widest2   -muted">
              Our Team
            </h4>
            <ul className="mt-4 grid grid-cols-2 gap-x-6 gap-y-2.5 sm:grid-cols-2">
              {team.map((person) => (
                <li key={person.slug}>
                  <Link
                    href={`/${person.slug}`}
                    className="text-sm   /80 hover:text-sea-600"
                  >
                    {person.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-4 border-t border-ink/10 py-8 text-xs   -muted sm:flex-row sm:justify-between">
          <p>
            © {new Date().getFullYear()} {siteInfo.name}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            {legalNav.map((item, i) => (
              <span key={item.href} className="flex items-center gap-2">
                <Link href={item.href} className="hover:text-sea-600">
                  {item.label}
                </Link>
                {i < legalNav.length - 1 && <span>|</span>}
              </span>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
