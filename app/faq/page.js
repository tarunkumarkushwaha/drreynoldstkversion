import Header from "@/components/Header";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";

const faqs = [
  {
    question: "What can I expect during our first session together?",
    answer:
      "Our first session is really about getting to know each other. I'll ask about what's bringing you to therapy, your history, and what you're hoping will feel different, so we can build a personalized approach to your anxiety, trauma, or burnout from there.",
  },
  {
    question: "Do you offer virtual or in-person sessions?",
    answer:
      "Both. I see clients in person at my Santa Monica office and offer secure telehealth sessions for anyone located elsewhere in California.",
  },
  {
    question: "How long does a typical therapy session last?",
    answer:
      "Individual sessions are 50 minutes. Some clients doing deeper trauma or EMDR work may benefit from occasional 75-minute sessions, which we can discuss as part of your treatment plan.",
  },
  {
    question: "What issues do you specialize in?",
    answer:
      "I work primarily with adults experiencing anxiety, panic, trauma, and burnout—including high-achieving professionals, entrepreneurs, and creatives who feel exhausted, stuck in overthinking, or disconnected from themselves after years of pushing through stress.",
  },
  {
    question: "What is EMDR, and is it right for me?",
    answer:
      "EMDR (Eye Movement Desensitization and Reprocessing) is an evidence-based method that helps the brain reprocess painful memories so they carry less emotional charge. It's often a good fit for single-incident trauma as well as more complex, long-standing patterns, and we'd discuss together whether it makes sense for your goals.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "I currently operate as an out-of-network provider. Upon request, I can provide a superbill that you can submit to your insurance carrier for possible reimbursement, depending on your out-of-network benefits.",
  },
  {
    question: "What is your cancellation policy?",
    answer:
      "I ask for at least 24 hours' notice for any cancellations or rescheduling requests. Sessions cancelled with less notice are subject to the full session fee.",
  },
];

export default function FAQPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen overflow-hidden bg-[#EFE8D9] py-16 sm:py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-5xl">
            <Eyebrow>
              <span className="text-[14px] uppercase tracking-[0.28em] text-black/55">
                Questions &amp; Answers
              </span>
            </Eyebrow>

            <h1 className="font-(family-name:--font-cormorant) mt-6 text-4xl font-normal leading-tight text-[#2d3130] sm:text-5xl lg:mt-10 lg:text-[56px]">
              Frequently Asked Questions
            </h1>

            <div className="mt-12 grid grid-cols-1 items-start gap-10 lg:mt-16 lg:grid-cols-12 lg:gap-16">

              <div className="lg:col-span-5">
                <h2 className="text-[13px] font-medium uppercase leading-relaxed tracking-[0.22em] text-[#2d3130] sm:text-[14px]">
                  Everything you need to know about getting started with us.
                </h2>
                <p className="mt-6 text-[14px] leading-relaxed text-black/70 sm:text-[16px]">
                  If you have questions that are not answered here, please feel
                  free to contact us directly. We are always happy to help.
                </p>

                <div className="mt-8 h-px w-20 bg-black/35 lg:mt-12" />
                <p className="mt-3 text-[10px] uppercase tracking-[0.24em] text-black/45">
                  Have a unique question?
                </p>
              </div>

              <div className="space-y-8 lg:col-span-7">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="border-b border-black/20 pb-8 last:border-none last:pb-0"
                  >
                    <h3 className="mb-3 text-base font-medium uppercase tracking-[0.15em] text-[#2d3130] sm:text-lg">
                      {faq.question}
                    </h3>
                    <p className="text-[14px] leading-relaxed text-black/70 sm:text-[16px]">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </main>
    </>
  );
}
