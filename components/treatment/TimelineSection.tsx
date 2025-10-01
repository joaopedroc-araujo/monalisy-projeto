interface TimelineStep {
  time: string;
  title: string;
  description: string;
}

interface TimelineSectionProps {
  timeline: TimelineStep[];
}

export default function TimelineSection({ timeline }: TimelineSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Cronograma de Resultados</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timeline.map((item, i) => (
            <div key={i} className="text-center bg-gray-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-gray-800 mb-4">{item.time}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}