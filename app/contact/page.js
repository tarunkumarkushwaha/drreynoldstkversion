import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import { siteInfo } from "@/lib/data";

export const metadata = {
  title: "Contact Dr. Maya Reynolds, PsyD | Book a Therapy Consultation in Santa Monica, CA",
  description:
    "Schedule a consultation with Dr. Maya Reynolds, PsyD — a licensed clinical psychologist offering in-person therapy in Santa Monica and telehealth across California.",
  keywords: [
    "contact Dr. Maya Reynolds",
    "book therapy consultation Santa Monica",
    "psychologist appointment Santa Monica",
    "telehealth therapy California",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Dr. Maya Reynolds, PsyD | Book a Consultation",
    description:
      "Reach out to schedule an initial consultation for anxiety, trauma, or burnout therapy — in-person in Santa Monica or via telehealth across California.",
    type: "website",
    locale: "en_US",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#D8CFBF] py-16 sm:py-20 lg:py-28">
      <Container>
        <div className="mx-auto max-w-295">
          <Eyebrow>
            <span className="text-[14px] uppercase tracking-[0.28em] text-black/55">
              Get In Touch
            </span>
          </Eyebrow>

          <h1 className="font-(family-name:--font-cormorant) mt-6 text-4xl font-normal text-[#2d3130] sm:text-5xl lg:mt-10 lg:text-[56px]">
            Start your journey today.
          </h1>

          <div className="mt-12 grid grid-cols-1 items-start gap-y-12 lg:mt-16 lg:grid-cols-20">
            <div className="lg:col-span-8 lg:pr-12">
              <h2 className="text-[12px] font-medium uppercase leading-6 tracking-[0.22em] text-[#2B2B2B] lg:text-[14px]">
                Reach out to schedule an initial consultation or ask any
                questions about working together.
              </h2>

              <div className="mt-10 space-y-8">
                <div>
                  <span className="mb-1 block text-[10px] uppercase tracking-[0.24em] text-black/45">
                    Location
                  </span>
                  <p className="text-[16px] leading-6 text-black/80">
                    In-person sessions in {siteInfo.city}, {siteInfo.state}
                    <br />
                    Telehealth available throughout California
                  </p>
                </div>

                <div>
                  <span className="mb-1 block text-[10px] uppercase tracking-[0.24em] text-black/45">
                    Direct Contact
                  </span>
                  <p className="text-[16px] leading-6 text-black/80">
                    <a href={`mailto:${siteInfo.email}`} className="hover:text-black">
                      {siteInfo.email}
                    </a>
                    <br />
                    <a href={`tel:${siteInfo.phone.replace(/\D/g, "")}`} className="hover:text-black">
                      {siteInfo.phone}
                    </a>
                  </p>
                </div>

                <div>
                  <span className="mb-1 block text-[10px] uppercase tracking-[0.24em] text-black/45">
                    Office Hours
                  </span>
                  <p className="text-[16px] leading-6 text-black/80">
                    Monday – Thursday: 9:00 AM – 5:00 PM
                    <br />
                    By appointment only
                  </p>
                </div>
              </div>

              <div className="mt-12 h-px w-20 bg-black/35" />
              <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-black/45">
                I typically respond within 24 business hours
              </p>
            </div>

            <div className="bg-[#CDC2B0] p-8 sm:p-12 lg:col-span-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-[#2B2B2B]">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      autoComplete="given-name"
                      className="w-full border border-black/20 bg-[#D8CFBF] px-4 py-3 text-[15px] text-[#2d3130] transition focus:border-black/60 focus:outline-none"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-[#2B2B2B]">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      autoComplete="family-name"
                      className="w-full border border-black/20 bg-[#D8CFBF] px-4 py-3 text-[15px] text-[#2d3130] transition focus:border-black/60 focus:outline-none"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-[#2B2B2B]">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    autoComplete="email"
                    className="w-full border border-black/20 bg-[#D8CFBF] px-4 py-3 text-[15px] text-[#2d3130] transition focus:border-black/60 focus:outline-none"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-[#2B2B2B]">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    className="w-full border border-black/20 bg-[#D8CFBF] px-4 py-3 text-[15px] text-[#2d3130] transition focus:border-black/60 focus:outline-none"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-[11px] font-medium uppercase tracking-[0.2em] text-[#2B2B2B]">
                    How Can I Help?
                  </label>
                  <textarea
                    rows={5}
                    name="message"
                    className="w-full resize-none border border-black/20 bg-[#D8CFBF] px-4 py-3 text-[15px] text-[#2d3130] transition focus:border-black/60 focus:outline-none"
                    placeholder="Tell me a little bit about what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full cursor-pointer bg-[#2d3130] px-8 py-4 text-[11px] font-medium uppercase tracking-[0.24em] text-[#D8CFBF] transition hover:bg-black sm:w-auto"
                >
                  Send Message
                </button>

                <p className="text-[12px] leading-relaxed text-black/50">
                  Please note this form isn&rsquo;t monitored for emergencies.
                  If you&rsquo;re in crisis, call or text 988 (Suicide &amp;
                  Crisis Lifeline) or go to your nearest emergency room.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}