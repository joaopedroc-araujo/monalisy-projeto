import { ReactElement } from "react";

interface Differentiator {
  icon: ReactElement;
  title: string;
  description: string;
}

interface DifferentiatorsSectionProps {
  values: Differentiator[];
}

export default function DifferentiatorsSection({ values }: DifferentiatorsSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Nossos Diferenciais
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que nos torna únicos na área de medicina estética e como nos comprometemos
            com a excelência em cada atendimento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white text-gray-600 rounded-2xl mb-6 shadow-sm group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}