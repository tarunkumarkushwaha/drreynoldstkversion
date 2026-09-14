import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

export default function ContactPage() {
  return (
    <main className="bg-[#D8CFBF] py-16 sm:py-20 lg:py-28 min-h-screen">
      <Container>
        <div className="max-w-295 mx-auto">
          <Eyebrow>
            <span className="uppercase tracking-[0.28em] text-[14px] text-black/55">
              Get In Touch
            </span>
          </Eyebrow>

          <h1 className="font-(family-name:--font-cormorant) mt-6 lg:mt-10 text-4xl font-normal text-[#2d3130] sm:text-5xl lg:text-[56px]">
            Start your journey today.
          </h1>

          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-20 gap-y-12 items-start">
            <div className="lg:col-span-8 lg:pr-12">
              <h2 className="text-[12px] lg:text-[14px] font-medium uppercase tracking-[0.22em] leading-6 text-[#2B2B2B]">
                Reach out to schedule an initial consultation or ask any questions you may have.
              </h2>

              <div className="mt-10 space-y-8">
                <div>
                  <span className="block text-[10px] uppercase tracking-[0.24em] text-black/45 mb-1">
                    Location
                  </span>
                  <p className="text-[16px] text-black/80 leading-6">
                    123 Wellness Way, Suite 400<br />
                    San Francisco, CA 94103
                  </p>
                </div>

                <div>
                  <span className="block text-[10px] uppercase tracking-[0.24em] text-black/45 mb-1">
                    Direct Contact
                  </span>
                  <p className="text-[16px] text-black/80 leading-6">
                    hello@yourpractice.com<br />
                    (555) 234-5678
                  </p>
                </div>

                <div>
                  <span className="block text-[10px] uppercase tracking-[0.24em] text-black/45 mb-1">
                    Office Hours
                  </span>
                  <p className="text-[16px] text-black/80 leading-6">
                    Monday – Thursday: 8:00 AM – 6:00 PM<br />
                    Friday: 8:00 AM – 2:00 PM
                  </p>
                </div>
              </div>

              <div className="mt-12 h-px w-20 bg-black/35" />
              <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-black/45">
                We respond within 24 business hours
              </p>
            </div>

            <div className="lg:col-span-12 bg-[#CDC2B0] p-8 sm:p-12">
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-[#2B2B2B] mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#D8CFBF] border border-black/20 px-4 py-3 text-[15px] text-[#2d3130] focus:outline-none focus:border-black/60 transition"
                      placeholder="Jane"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-[#2B2B2B] mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-[#D8CFBF] border border-black/20 px-4 py-3 text-[15px] text-[#2d3130] focus:outline-none focus:border-black/60 transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-[#2B2B2B] mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full bg-[#D8CFBF] border border-black/20 px-4 py-3 text-[15px] text-[#2d3130] focus:outline-none focus:border-black/60 transition"
                    placeholder="jane@example.com"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-medium uppercase tracking-[0.2em] text-[#2B2B2B] mb-2">
                    How Can We Help?
                  </label>
                  <textarea
                    rows={5}
                    className="w-full bg-[#D8CFBF] border border-black/20 px-4 py-3 text-[15px] text-[#2d3130] focus:outline-none focus:border-black/60 transition resize-none"
                    placeholder="Tell us a little bit about what you're looking for..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#2d3130] text-[#D8CFBF] text-[11px] font-medium uppercase tracking-[0.24em] hover:bg-black transition cursor-pointer"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}