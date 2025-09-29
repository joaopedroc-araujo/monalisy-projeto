import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Star, CheckCircle, ArrowLeft } from "lucide-react";
import { Treatment } from "@/data/treatmentsData";

export default function TreatmentPageLayout({ treatment }: { treatment: Treatment }) {
  if (!treatment) {
    return <div>Tratamento não encontrado.</div>;
  }

  return (
    <div className="pt-8 lg:pt-12">
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Início</Link>
            <span>/</span>
            <Link href="/tratamentos" className="hover:text-gray-900">Tratamentos</Link>
            <span>/</span>
            <span className="text-gray-900">{treatment.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">{treatment.name}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{treatment.shortDescription}</p>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center"><Clock className="w-5 h-5 mr-2" /><span>{treatment.duration}</span></div>
                <div className="flex items-center"><Star className="w-5 h-5 mr-2" /><span>{treatment.price}</span></div>
              </div>
              <Link href="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Agendar Consulta <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-2xl">
              <Image src={treatment.image.src} alt={treatment.image.alt} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      {/* About Treatment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900">Sobre o Tratamento</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                {treatment.longDescription.map((p, i) => <p key={i}>{p}</p>)}
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Principais Benefícios</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatment.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>

              {treatment.treatmentAreas && (
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Áreas de Tratamento</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {treatment.treatmentAreas.map((area, i) => (
                      <div key={i} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                        <span className="text-gray-600">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {treatment.indications && (
                <div className="mt-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">Indicações</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {treatment.indications.map((indication, i) => (
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

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Como Funciona o Procedimento</h2>
          </div>
          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-${treatment.process.length} gap-8`}>
            {treatment.process.map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto">{item.step}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {treatment.timeline && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Cronograma de Resultados</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {treatment.timeline.map((item, i) => (
                <div key={i} className="text-center bg-gray-50 p-8 rounded-2xl">
                  <div className="text-3xl font-bold text-gray-800 mb-4">{item.time}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {treatment.protocols && (
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"><h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Protocolos de Tratamento</h2></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {treatment.protocols.map((protocol, i) => (
                <div key={i} className="text-center bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{protocol.title}</h3>
                  <div className="text-3xl font-bold text-gray-800 mb-4">{protocol.sessions}</div>
                  <p className="text-gray-600 mb-4">{protocol.description}</p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    {protocol.details.map((detail, j) => <li key={j}>{detail}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {treatment.idealCandidate && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16"><h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Candidato Ideal</h2></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">✓ Indicado para:</h3>
                <ul className="space-y-3">{treatment.idealCandidate.indications.map((item, i) => <li key={i} className="flex items-center space-x-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-gray-600">{item}</span></li>)}</ul>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">✗ Contraindicações:</h3>
                <ul className="space-y-3">{treatment.idealCandidate.contraindications.map((item, i) => <li key={i} className="flex items-center space-x-3"><div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div><span className="text-gray-600">{item}</span></li>)}</ul>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16"><h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Perguntas Frequentes</h2></div>
          <div className="max-w-4xl mx-auto space-y-6">
            {treatment.faq.map((item, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-2xl">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.question}</h3>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold">{treatment.cta.title}</h2>
            <p className="text-xl text-gray-300 leading-relaxed">{treatment.cta.subtitle}</p>
            <Link href="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                    Agendar Avaliação <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
