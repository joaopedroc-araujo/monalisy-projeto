"use client";

import Image from "next/image";

interface ProfessionalData {
  id: number;
  name: string;
  title: string;
  description: string[];
  image: string;
  education?: string[];
  specializations?: string[];
}

interface ProfessionalProfileProps {
  professional: ProfessionalData;
  index: number;
  className?: string;
}

const ProfessionalProfile = ({ professional, index, className = "" }: ProfessionalProfileProps) => {
  const isEven = index % 2 === 0;

  return (
    <section className={`py-20 ${isEven ? "bg-white" : "bg-gray-50"} ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
          isEven ? "lg:grid-flow-col" : "lg:grid-flow-col-dense"
        }`}>
          {/* Conteúdo de Texto */}
          <div className={`space-y-6 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-2">
                {professional.name}
              </h2>
              <p className="text-xl text-gray-600 font-medium mb-6">
                {professional.title}
              </p>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              {professional.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {(professional.education || professional.specializations) && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6">
                {professional.education && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Formação</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {professional.education.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {professional.specializations && (
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Especializações</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {professional.specializations.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-gray-400 mr-2">•</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Imagem */}
          <div className={`relative ${isEven ? "lg:order-2" : "lg:order-1"}`}>
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-2xl">
              <Image
                src={professional.image}
                alt={professional.name}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                priority={index === 0}
                unoptimized={true}
              />
            </div>

            {/* Elementos decorativos */}
            <div className={`absolute w-32 h-32 bg-gray-100 rounded-2xl -z-10 ${
              isEven
                ? "-bottom-6 -right-6"
                : "-bottom-6 -left-6"
            }`}></div>
            <div className={`absolute w-24 h-24 bg-gray-200 rounded-2xl -z-10 ${
              isEven
                ? "-top-6 -left-6"
                : "-top-6 -right-6"
            }`}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalProfile;
