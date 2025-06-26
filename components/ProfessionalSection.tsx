'use client';

import Image from 'next/image';

interface Professional {
  id: string;
  name: string;
  title: string;
  description: string[];
  image: string;
  education: string[];
  specializations: string[];
}

interface ProfessionalSectionProps {
  professionals: Professional[];
  className?: string;
}

const ProfessionalSection = ({ professionals, className = '' }: ProfessionalSectionProps) => {
  return (
    <section className={`py-20 bg-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24 lg:space-y-32">
          {professionals.map((professional, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={professional.id} className="w-full">
                {/* Layout para desktop */}
                <div className="hidden lg:grid lg:grid-cols-12 lg:gap-12 lg:items-start">
                  {/* Conteúdo do texto - posição baseada no índice */}
                  <div className={`lg:col-span-6 space-y-6 ${isEven ? 'lg:col-start-1' : 'lg:col-start-7'}`}>
                    <h2 className="text-3xl xl:text-4xl font-playfair font-bold text-gray-900">
                      {professional.name}
                    </h2>
                    {professional.title && (
                      <h3 className="text-xl text-gray-700 font-medium">
                        {professional.title}
                      </h3>
                    )}

                    {/* Descrição */}
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      {professional.description.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Formação e Especializações */}
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 pt-6">
                      {/* Formação */}
                      {professional.education.length > 0 && (
                        <div className="min-h-[100px] flex flex-col">
                          <h4 className="font-semibold text-gray-900 mb-3">Formação</h4>
                          <ul className="text-sm text-gray-600 space-y-1 flex-1">
                            {professional.education.map((item, itemIndex) => (
                              <li key={itemIndex}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Especializações */}
                      {professional.specializations.length > 0 && (
                        <div className="min-h-[100px] flex flex-col">
                          <h4 className="font-semibold text-gray-900 mb-3">Especializações</h4>
                          <ul className="text-sm text-gray-600 space-y-1 flex-1">
                            {professional.specializations.map((item, itemIndex) => (
                              <li key={itemIndex}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Imagem - posição baseada no índice */}
                  <div className={`lg:col-span-5 relative ${isEven ? 'lg:col-start-8' : 'lg:col-start-1'}`}>
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
                      <Image
                        src={professional.image}
                        alt={professional.name}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover object-center"
                        priority={index === 0}
                      />
                    </div>

                    {/* Elemento decorativo */}
                    <div className={`absolute -bottom-6 w-24 h-24 xl:w-32 xl:h-32 2xl:w-40 2xl:h-40 bg-gray-100 rounded-2xl -z-10 ${
                      isEven ? '-right-6' : '-left-6'
                    }`}></div>
                  </div>
                </div>

                {/* Layout para mobile e tablet */}
                <div className="lg:hidden space-y-8">
                  {/* Imagem sempre no topo em mobile/tablet */}
                  <div className="relative max-w-sm mx-auto">
                    <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-lg">
                      <Image
                        src={professional.image}
                        alt={professional.name}
                        width={400}
                        height={400}
                        className="w-full h-full object-cover object-center"
                        priority={index === 0}
                      />
                    </div>

                    {/* Elemento decorativo */}
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gray-100 rounded-2xl -z-10"></div>
                  </div>

                  {/* Conteúdo do texto */}
                  <div className="space-y-6">
                    <div className="text-center sm:text-left">
                      <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900">
                        {professional.name}
                      </h2>
                      {professional.title && (
                        <h3 className="text-lg sm:text-xl text-gray-700 font-medium mt-2">
                          {professional.title}
                        </h3>
                      )}
                    </div>

                    {/* Descrição */}
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      {professional.description.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex}>
                          {paragraph}
                        </p>
                      ))}
                    </div>

                    {/* Formação e Especializações */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                      {/* Formação */}
                      {professional.education.length > 0 && (
                        <div className="min-h-[80px] flex flex-col">
                          <h4 className="font-semibold text-gray-900 mb-3">Formação</h4>
                          <ul className="text-sm text-gray-600 space-y-1 flex-1">
                            {professional.education.map((item, itemIndex) => (
                              <li key={itemIndex}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Especializações */}
                      {professional.specializations.length > 0 && (
                        <div className="min-h-[80px] flex flex-col">
                          <h4 className="font-semibold text-gray-900 mb-3">Especializações</h4>
                          <ul className="text-sm text-gray-600 space-y-1 flex-1">
                            {professional.specializations.map((item, itemIndex) => (
                              <li key={itemIndex}>• {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProfessionalSection;
