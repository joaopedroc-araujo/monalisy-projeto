import { Shield, Users, Star, Clock } from "lucide-react";

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

const Features = () => {
  return (
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
  );
};

export default Features;