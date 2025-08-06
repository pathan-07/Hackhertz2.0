import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Who can participate?',
    answer: 'All students are eligible to participate. We welcome students from all departments and years.',
  },
  {
    question: 'What is the team size?',
    answer: 'Teams must have a minimum of 4 and a maximum of 5 members. You can register as a team or individually.',
  },
  {
    question: 'Is there a registration fee?',
    answer: 'Yes, the participation fee is ₹50 per person. This is a minimal fee to ensure serious participation.',
  },
  {
    question: 'What about food arrangements?',
    answer: 'A food van will be arranged inside the college campus. Students can buy food by themselves from the food van.',
  },
  {
    question: 'What should I bring?',
    answer: 'Bring your laptop, charger, enthusiasm, and innovative ideas! We\'ll provide workspace and WiFi connectivity.',
  },
  {
    question: 'Do I need prior experience?',
    answer: 'Not at all! HackHertz welcomes beginners. We\'ll have mentors available to guide you throughout the event.',
  },
  {
    question: 'What are the judging criteria?',
    answer: 'Projects will be evaluated based on innovation, technical implementation, presentation, and potential real-world impact.',
  },
];

export function FaqSection() {
  return (
    <section id="faq" className="container mx-auto py-24">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold">Have <span className="text-gradient">Questions?</span></h2>
        <p className="text-lg text-muted-foreground mt-4 max-w-2xl mx-auto">Find answers to commonly asked questions about HackHertz.</p>
      </div>
      <div className="max-w-3xl mx-auto tech-card">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.question} value={faq.question} className="border-b border-orange-500/20 last:border-b-0 px-6">
              <AccordionTrigger className="text-lg text-left hover:no-underline [&[data-state=open]]:text-gradient">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
