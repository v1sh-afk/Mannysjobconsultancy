import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Can you guarantee me a job?",
    answer: "No, our consultancy cannot guarantee a job — we help improve your chances, but you must still perform well in interviews and meet job criteria.",
  },
  {
    question: "How long does it take to get placed?",
    answer: (
      <span>
        It varies — some get placed within days, others may take weeks depending on:<br />
        <ul className="list-disc pl-5 mt-2">
          <li>Your availability and skillset</li>
          <li>Industry demand</li>
          <li>Current job opening</li>
        </ul>
      </span>
    ),
  },
  {
    question: "Will you support me after I get the job?",
    answer: "Yes, we will still support you after you get the job to assure you are satisfied with our service and your workplace.",
  },
  {
    question: "Am I eligible for a refund?",
    answer: "Yes, we truly care about our customers. So, if you notify us within 5 days of our service process you are eligible for a refund. However, we do NOT refund your deposit amount, even when notified within 5 days period.",
  },
  {
    question: "Do you have payment instalment options?",
    answer: "No, we do not offer payment instalment options.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 md:py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">FAQ’s</h2>
          <p className="text-gray-600">
            Find answers to common questions about our services
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-base md:text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 text-sm md:text-base">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection; 