import Link from "next/link";
import { ArrowRight, Star, Shield, Users, Clock } from "lucide-react";
import Image from "next/image";
import ClinicGallery from "@/components/ClinicGallery";

export default function Home() {
  const treatmentHighlights = [
    {
      title: "Tratamentos Faciais",
      description: "Harmonização, rejuvenescimento e cuidados especializados para o rosto",
      image: "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Tratamentos Corporais",
      description: "Modelagem, firmeza e cuidados estéticos para o corpo",
      image: "https://images.pexels.com/photos/10894312/pexels-photo-10894312.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      title: "Tratamentos Capilares",
      description: "Fortalecimento, crescimento e saúde capilar",
      image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
  ];

  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Segurança e Qualidade",
      description:
        "Tratamentos realizados com equipamentos de última geração e protocolos rigorosos de segurança.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipe Especializada",
      description:
        "Profissionais altamente qualificados e em constante atualização nas mais modernas técnicas.",
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Resultados Comprovados",
      description:
        "Tratamentos eficazes com resultados naturais e duradouros para realçar sua beleza.",
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Atendimento Personalizado",
      description:
        "Consultas detalhadas e planos de tratamento individualizados para cada paciente.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight">
                  Medicina Estética
                  <span className="text-gray-600"> de Excelência</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Tratamentos inovadores e personalizados para realçar sua
                  beleza natural com segurança e resultados duradouros.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Agendar Consulta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/sobre"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors duration-200"
                >
                  Conheça a Clínica
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="/images/LSF (39).webp"
                  priority
                  alt="Clínica Monalisy Rodrigues"
                  width={4000}
                  height={6000}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-200 rounded-2xl -z-10"></div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-100 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Por que escolher nossa clínica?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Combinamos experiência, tecnologia e cuidado personalizado para
              oferecer os melhores resultados em medicina estética.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 text-gray-600 rounded-2xl mb-6 group-hover:bg-gray-900 group-hover:text-white transition-colors duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Gallery Slider */}
      <ClinicGallery />

      {/* Treatments Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Nossos Tratamentos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Descubra nossa ampla gama de tratamentos estéticos para face,
              corpo e cabelo, todos realizados com a mais alta qualidade e
              segurança.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {treatmentHighlights.map((treatment, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                  <div className="aspect-video overflow-hidden bg-gray-100">
                    <Image
                      src={treatment.image}
                      alt={treatment.title}
                      width={800}
                      height={450}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                      {treatment.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {treatment.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/tratamentos"
              className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
            >
              Ver Todos os Tratamentos
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold">
              Pronto para transformar sua beleza?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Entre em contato conosco e agende uma consulta personalizada.
              Nossa equipe está pronta para ajudá-lo a alcançar seus objetivos
              estéticos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Agendar Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/tratamentos"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-lg hover:border-gray-600 transition-colors duration-200"
              >
                Ver Tratamentos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
