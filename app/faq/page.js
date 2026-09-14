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