interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faq: FaqItem[];
}

export default function FaqSection({ faq }: FaqSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Perguntas Frequentes</h2></div>
        <div className="max-w-4xl mx-auto space-y-6">
          {faq.map((item, i) => (
            <div key={i} className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
              <p className="text-gray-600">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}