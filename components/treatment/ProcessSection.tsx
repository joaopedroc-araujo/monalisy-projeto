interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

interface ProcessSectionProps {
  process: ProcessStep[];
}

export default function ProcessSection({ process }: ProcessSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Como Funciona o Procedimento</h2>
        </div>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${process.length} gap-8`}>
          {process.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto">{item.step}</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}