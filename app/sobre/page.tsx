import dynamic from "next/dynamic";
import { Award, Users, Heart, Target } from "lucide-react";
import Image from "next/image";

const ProfessionalProfile = dynamic(() => import("@/components/ProfessionalProfile"));
const MissionVisionValuesSection = dynamic(() => import("@/components/sobre/MissionVisionValuesSection"));
const DifferentiatorsSection = dynamic(() => import("@/components/sobre/DifferentiatorsSection"));
const TechnologySection = dynamic(() => import("@/components/sobre/TechnologySection"));

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
                src="/images/LSF (19).webp"
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

      <MissionVisionValuesSection />
      <DifferentiatorsSection values={values} />

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

      <TechnologySection />
    </div>
  );
}
