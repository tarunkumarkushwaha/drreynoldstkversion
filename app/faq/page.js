import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

const faqs = [
  {
    question: "What can I expect during our first therapy session?",
    answer:
      "Our initial consultation is designed to help us get to know each other. We will discuss your goals, current challenges, and background to create an intentional, personalized plan moving forward.",
  },
  {
    question: "Do you offer virtual or in-person sessions?",
    answer:
      "We offer both in-person sessions at our office space and secure telehealth appointments for clients looking for flexible remote care.",
  },
  {
    question: "How long does a typical therapy session last?",
    answer:
      "Standard individual sessions last 50 minutes. Couples and family sessions may be scheduled for 60 to 75 minutes depending on your tailored treatment plan.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "We ask for at least 24 hours notice for any cancellations or rescheduling requests to avoid being charged the full session fee.",
  },
];

export default function FAQPage() {
  return (
    <main className="bg-[#D8CFBF] py-16 sm:py-20 lg:py-28 min-h-screen">
      <Container>
        <div className="max-w-295 mx-auto">
          <Eyebrow>
            <span className="uppercase tracking-[0.28em] text-[14px] text-black/55">
              Questions & Answers
            </span>
          </Eyebrow>

          <h1 className="font-(family-name:--font-cormorant) mt-6 lg:mt-10 text-4xl font-normal text-[#2d3130] sm:text-5xl lg:text-[56px]">
            Frequently Asked Questions
          </h1>

          <div className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-20 gap-y-12 items-start">
            {/* Intro Text Left */}
            <div className="lg:col-span-7 lg:pr-10">
              <h2 className="text-[12px] lg:text-[14px] font-medium uppercase tracking-[0.22em] leading-6 text-[#2B2B2B]">
                Everything you need to know about getting started with us.
              </h2>
              <p className="mt-6 text-[14px] lg:text-[16px] leading-7 text-black/70">
                If you have questions that are not answered here, please feel free to contact us directly. We are always happy to help.
              </p>

              <div className="mt-10 h-px w-16 bg-black/35" />
              <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-black/45">
                Have a unique question?
              </p>
            </div>

            {/* Accordion/FAQ List Right */}
            <div className="lg:col-span-13 space-y-8">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-b border-black/20 pb-8 last:border-none"
                >
                  <h3 className="text-[16px] lg:text-[18px] font-medium uppercase tracking-[0.15em] text-[#2B2B2B] mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-[14px] lg:text-[16px] leading-7 text-black/70">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}