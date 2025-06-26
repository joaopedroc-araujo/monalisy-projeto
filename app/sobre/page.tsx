import ProfessionalSection from '@/components/ProfessionalSection';
import { Award, Users, Heart, Target } from 'lucide-react';
import Image from 'next/image';

export default function Sobre() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Cuidado Humanizado',
      description: 'Tratamos cada paciente com atenção, carinho e respeito, priorizando seu bem-estar e conforto.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excelência Técnica',
      description: 'Mantemos os mais altos padrões de qualidade em todos os nossos procedimentos e tratamentos.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Equipe Qualificada',
      description: 'Nossa equipe está em constante atualização para oferecer as técnicas mais modernas e seguras.'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Resultados Naturais',
      description: 'Focamos em realçar a beleza natural de cada paciente, respeitando suas características únicas.'
    }
  ];

  // Array de profissionais - você pode adicionar quantos quiser
  const professionals = [
    {
      id: 'monalisy-rodrigues',
      name: 'Dra. Monalisy Rodrigues',
      title: 'Médica Especialista em Medicina Estética',
      description: [
        'Monalisy Rodrigues, médica, Graduada pela Universidade Gama Filho, na cidade do Rio de Janeiro/ RJ, em agosto de 2001. Após conclusão do curso de Medicina, foi para Belo Horizonte/MG, onde fez residência em Clínica Médica, em seguida concluiu Pós-Graduação em Dermatologia e Medicina Estética pela Sociedade Brasileira de Medicina Estética (SBME), com sede no Rio de Janeiro/RJ.',
        'Quando estudante foi acadêmica no ambulatório de dermatologia da Santa Casa de Misericórdia do Rio de Janeiro/RJ, no serviço do Professor Azzulay. Após conclusão do curso de medicina, mudou-se para a Capital Mineira, onde exercendo a clínica médica, em meio a casos, dores e histórias pessoais, encontrou uma paixão pela Dermatologia, quando ao cuidar de uma paciente, observou uma evolução na auto-estima após a cura da patologia dermatológica e sua melhora estética. Assim, foi se aperfeiçoar na Medicina Estética, e essa junção proporcionou o cuidado ao ser humano por inteiro, alma e físico, refletindo de forma positiva nas relações interpessoais e com o mundo.',
        'Diante a tamanha dedicação à Dermatologia e Medicina Estética, tornou-se Preceptora no ambulatório de Peellings Químicos da SBME, e no Instituto Superior de Medicina e Dermatologia, ministrou aulas práticas de Lasers e tecnologias. Devido a toda trajetória em meio a estudos, trabalhos, e pessoas sobrevieram descobertas, hoje proprietária da clínica que tem como a marca seu próprio nome, Monalisy Rodrigues, sendo a concretização de um sonho.'
      ],
      image: 'https://yurieycpflogldnppkki.supabase.co/storage/v1/object/sign/fotos-site/LSF%20(43).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lOTA2NThlNy0xY2QyLTRjYWMtYjQzZC1iNTZiMWU5ZmRlNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy1zaXRlL0xTRiAoNDMpLmpwZyIsImlhdCI6MTc1MDc2Nzk5MiwiZXhwIjo0OTA0MzY3OTkyfQ.GQB2II_eFT35u0epih-uiNxPnQMCGcpsJAlwEyu-av8',
      education: [
        'Medicina - Universidade Federal',
        'Especialização em Dermatologia',
        'Pós-graduação em Medicina Estética'
      ],
      specializations: [
        'Harmonização Facial',
        'Rejuvenescimento',
        'Tratamentos Corporais'
      ]
    }
    // Você pode adicionar mais profissionais aqui seguindo a mesma estrutura
    // {
    //   id: 'outro-medico',
    //   name: 'Dr. Outro Médico',
    //   title: 'Especialista em...',
    //   description: ['Parágrafo 1', 'Parágrafo 2'],
    //   image: 'url-da-imagem',
    //   education: ['Formação 1', 'Formação 2'],
    //   specializations: ['Especialização 1', 'Especialização 2']
    // }
  ];

  return (
    <div className="">
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
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
                <Image
                  src="https://yurieycpflogldnppkki.supabase.co/storage/v1/object/sign/fotos-site/LSF%20(40).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lOTA2NThlNy0xY2QyLTRjYWMtYjQzZC1iNTZiMWU5ZmRlNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy1zaXRlL0xTRiAoNDApLmpwZyIsImlhdCI6MTc1MDg5NDc5OSwiZXhwIjo0OTA0NDk0Nzk5fQ.itpgHu3pg9D1kLaLrjcI4_OyF0DBWGAqnwnVmNUoato"
                  alt="Clínica Monalisy Rodrigues"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-full object-cover"
                />
              </div>
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
      <ProfessionalSection professionals={professionals} />

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
