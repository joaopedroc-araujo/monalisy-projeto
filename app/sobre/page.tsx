import ProfessionalProfile from "@/components/ProfessionalProfile";
import { Award, Users, Heart, Target } from "lucide-react";
import Image from "next/image";

export default function Sobre() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cuidado Humanizado",
      description: "Tratamos cada paciente com atenção, carinho e respeito, priorizando seu bem-estar e conforto."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Excelência Técnica",
      description: "Mantemos os mais altos padrões de qualidade em todos os nossos procedimentos e tratamentos."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Equipe Qualificada",
      description: "Nossa equipe está em constante atualização para oferecer as técnicas mais modernas e seguras."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Resultados Naturais",
      description: "Focamos em realçar a beleza natural de cada paciente, respeitando suas características únicas."
    }
  ];

  // Array de profissionais - você pode adicionar quantos quiser
  const professionals = [
    {
      id: 1,
      name: "Dra. Monalisy Rodrigues",
      title: "Médica Especialista em Medicina Estética",
      description: [
        "Médica especializada em medicina estética com vasta experiência em procedimentos faciais, corporais e capilares. Graduada em Medicina e especializada em Dermatologia, sempre buscando aperfeiçoamento nas mais modernas técnicas.",
        "Com anos de prática clínica, dedica-se ao estudo contínuo das inovações na área estética, participando regularmente de congressos e cursos de atualização para oferecer sempre o que há de mais moderno e seguro aos seus pacientes.",
        "Sua filosofia de trabalho baseia-se na valorização da beleza natural, respeitando as características individuais e promovendo resultados harmoniosos e naturais através de técnicas minimamente invasivas."
      ],
      image: "/images/LSF (43).webp",
      education: [
        "Medicina - Universidade Federal",
        "Especialização em Dermatologia",
        "Pós-graduação em Medicina Estética"
      ],
      specializations: [
        "Harmonização Facial",
        "Rejuvenescimento",
        "Tratamentos Corporais",
        "Medicina Preventiva"
      ]
    },
    {
      id: 2,
      name: "Dra. Monalisy Rodrigues",
      title: "Médica Especialista em Medicina Estética",
      description: [
        "Médica especializada em medicina estética com vasta experiência em procedimentos faciais, corporais e capilares. Graduada em Medicina e especializada em Dermatologia, sempre buscando aperfeiçoamento nas mais modernas técnicas.",
        "Com anos de prática clínica, dedica-se ao estudo contínuo das inovações na área estética, participando regularmente de congressos e cursos de atualização para oferecer sempre o que há de mais moderno e seguro aos seus pacientes.",
        "Sua filosofia de trabalho baseia-se na valorização da beleza natural, respeitando as características individuais e promovendo resultados harmoniosos e naturais através de técnicas minimamente invasivas."
      ],
      image: "/images/LSF (43).webp",
      education: [
        "Medicina - Universidade Federal",
        "Especialização em Dermatologia",
        "Pós-graduação em Medicina Estética"
      ],
      specializations: [
        "Harmonização Facial",
        "Rejuvenescimento",
        "Tratamentos Corporais",
        "Medicina Preventiva"
      ]
    }
    // Adicione mais profissionais aqui conforme necessário
    // {
    //   id: 2,
    //   name: 'Dr. João Silva',
    //   title: 'Especialista em Dermatologia',
    //   description: [...],
    //   image: '...',
    //   education: [...],
    //   specializations: [...]
    // }
  ];

  return (
    <div className="pt-8 lg:pt-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                  Sobre a Clínica
                  <span className="text-gray-600"> Monalisy Rodrigues</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Uma clínica dedicada à medicina estética com foco na excelência,
                  segurança e resultados naturais que realçam a beleza única de cada paciente.
                </p>
              </div>
            </div>
            <div className="relative rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/@lucasantosfotografo-19.jpg"
                alt="Clínica Monalisy Rodrigues"
                width={6000}
                height={4000}
                priority
                className="w-full h-auto"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Missão</h3>
              <p className="text-gray-600 leading-relaxed">
                Proporcionar tratamentos estéticos de alta qualidade, combinando tecnologia
                avançada com cuidado humanizado, para realçar a beleza natural e promover
                o bem-estar de nossos pacientes.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Visão</h3>
              <p className="text-gray-600 leading-relaxed">
                Ser reconhecida como referência em medicina estética, destacando-se pela
                excelência técnica, inovação e resultados naturais que respeitam a
                individualidade de cada paciente.
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">Valores</h3>
              <p className="text-gray-600 leading-relaxed">
                Ética, transparência, segurança, excelência técnica e cuidado humanizado
                são os pilares que orientam nossa prática médica e nosso relacionamento
                com cada paciente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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

      {/* Professional Section */}
      <div>
        {professionals.map((professional, index) => (
          <ProfessionalProfile
            key={professional.id}
            professional={professional}
            index={index}
          />
        ))}
      </div>

      {/* Technology Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Tecnologia e Equipamentos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Investimos constantemente em tecnologia de ponta para oferecer os melhores
              resultados com máxima segurança e conforto.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Equipamentos Modernos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Utilizamos apenas equipamentos certificados e de última geração,
                garantindo eficácia e segurança em todos os procedimentos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Protocolos Rigorosos
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Seguimos protocolos internacionais de segurança e higiene,
                assegurando o mais alto padrão de qualidade em nossos atendimentos.
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Ambiente Seguro
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Nossa clínica oferece um ambiente totalmente seguro e confortável,
                projetado para proporcionar tranquilidade durante os tratamentos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
