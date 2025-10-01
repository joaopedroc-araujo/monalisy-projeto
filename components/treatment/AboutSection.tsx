import { CheckCircle } from "lucide-react";

interface AboutSectionProps {
  longDescription: string[];
  benefits: string[];
  treatmentAreas?: string[];
  indications?: string[];
}

export default function AboutSection({ longDescription, benefits, treatmentAreas, indications }: AboutSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900">Sobre o Tratamento</h2>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              {longDescription.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Principais Benefícios</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">{benefit}</span>
                </div>
              ))}
            </div>

            {treatmentAreas && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Áreas de Tratamento</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {treatmentAreas.map((area, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">{area}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {indications && (
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Indicações</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {indications.map((indication, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      <span className="text-gray-600">{indication}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}