import Link from 'next/link';
import { ArrowRight, Clock, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import OptimizedImage from '@/components/OptimizedImage';

export default function HarmonizacaoFacial() {
  const benefits = [
    'Equilíbrio das proporções faciais',
    'Realce da beleza natural',
    'Resultados imediatos e naturais',
    'Procedimento minimamente invasivo',
    'Recuperação rápida',
    'Melhora da autoestima',
    'Técnicas personalizadas',
    'Produtos de alta qualidade'
  ];

  const process = [
    {
      step: '1',
      title: 'Consulta e Avaliação',
      description: 'Análise detalhada das proporções faciais e definição dos objetivos do tratamento.'
    },
    {
      step: '2',
      title: 'Planejamento Personalizado',
      description: 'Elaboração de um plano específico considerando suas características únicas.'
    },
    {
      step: '3',
      title: 'Preparação',
      description: 'Aplicação de anestésico tópico e preparação da área a ser tratada.'
    },
    {
      step: '4',
      title: 'Procedimento',
      description: 'Aplicação precisa dos produtos para harmonização facial.'
    },
    {
      step: '5',
      title: 'Finalização',
      description: 'Avaliação do resultado e orientações pós-procedimento.'
    }
  ];

  const beforeAfterCare = {
    before: [
      'Evitar medicamentos anticoagulantes',
      'Não consumir álcool 24h antes',
      'Informar sobre alergias',
      'Chegar sem maquiagem',
      'Hidratação adequada'
    ],
    after: [
      'Evitar exercícios por 24h',
      'Não massagear a área',
      'Aplicar gelo se necessário',
      'Evitar exposição solar',
      'Seguir orientações médicas'
    ]
  };

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
            <span className="text-gray-900">Harmonização Facial</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2 mb-4">
                  <Link
                    href="/tratamentos"
                    className="inline-flex items-center text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Voltar aos tratamentos
                  </Link>
                </div>
                <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">
                  Harmonização Facial
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Procedimento que visa equilibrar e realçar os traços faciais de forma natural e harmoniosa,
                  utilizando técnicas avançadas de preenchimento e contorno.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>60-90 minutos</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>A partir de R$ 800</span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
                >
                  Agendar Consulta
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100 shadow-2xl">
                <OptimizedImage
                  src="https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Harmonização Facial"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={90}
                  breakpoints={[360, 640, 960, 1280]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Treatment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900">
                Sobre o Tratamento
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  A harmonização facial é um conjunto de procedimentos estéticos que tem como objetivo
                  equilibrar as proporções do rosto, realçando a beleza natural de cada paciente.
                  Utilizamos técnicas modernas com ácido hialurônico e outros bioestimuladores para
                  criar resultados naturais e harmoniosos.
                </p>
                <p>
                  O procedimento é realizado de forma personalizada, considerando as características
                  únicas de cada rosto. Nossa abordagem visa manter a naturalidade, respeitando a
                  identidade facial do paciente enquanto promove melhorias sutis e elegantes.
                </p>
                <p>
                  Com técnicas avançadas e produtos de alta qualidade, conseguimos resultados
                  imediatos que evoluem positivamente ao longo das semanas seguintes, proporcionando
                  maior confiança e bem-estar.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Benefícios</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Como Funciona o Procedimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nosso protocolo garante segurança e resultados personalizados em cada etapa.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {process.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-900 text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 mx-auto">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before/After Care */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Cuidados Importantes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Para garantir os melhores resultados, siga nossas orientações.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Antes do Procedimento</h3>
              <ul className="space-y-3">
                {beforeAfterCare.before.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Após o Procedimento</h3>
              <ul className="space-y-3">
                {beforeAfterCare.after.map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quanto tempo dura o resultado?
              </h3>
              <p className="text-gray-600">
                Os resultados da harmonização facial podem durar de 12 a 18 meses, dependendo
                do produto utilizado e das características individuais de cada paciente.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                O procedimento é doloroso?
              </h3>
              <p className="text-gray-600">
                O desconforto é mínimo. Utilizamos anestésico tópico e os produtos já contêm
                lidocaína, garantindo maior conforto durante o procedimento.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quando posso ver os resultados?
              </h3>
              <p className="text-gray-600">
                Os resultados são imediatos, mas o efeito final pode ser observado após
                2 semanas, quando o produto se integra completamente aos tecidos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold">
              Pronto para harmonizar sua beleza facial?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Agende uma consulta personalizada e descubra como a harmonização facial
              pode realçar sua beleza natural com segurança e naturalidade.
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
                Ver Outros Tratamentos
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
