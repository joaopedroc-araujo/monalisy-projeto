import Link from 'next/link';
import { ArrowRight, Clock, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function ToxinaBotulinica() {
  const benefits = [
    'Suavização de rugas de expressão',
    'Prevenção do envelhecimento',
    'Resultado natural e harmonioso',
    'Procedimento rápido e seguro',
    'Sem tempo de inatividade',
    'Melhora da autoestima',
    'Técnica minimamente invasiva',
    'Efeito duradouro'
  ];

  const treatmentAreas = [
    'Rugas da testa',
    'Pés de galinha',
    'Glabela (entre as sobrancelhas)',
    'Sorriso gengival',
    'Rugas do pescoço',
    'Bruxismo'
  ];

  const process = [
    {
      step: '1',
      title: 'Avaliação Facial',
      description: 'Análise da musculatura facial e identificação das áreas a serem tratadas.'
    },
    {
      step: '2',
      title: 'Marcação dos Pontos',
      description: 'Demarcação precisa dos pontos de aplicação para resultados otimizados.'
    },
    {
      step: '3',
      title: 'Aplicação',
      description: 'Injeção da toxina botulínica com técnica refinada e segura.'
    },
    {
      step: '4',
      title: 'Orientações',
      description: 'Instruções pós-tratamento para maximizar os resultados.'
    }
  ];

  return (
    <div className="pt-20 lg:pt-24">
      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900">Início</Link>
            <span>/</span>
            <Link href="/tratamentos" className="hover:text-gray-900">Tratamentos</Link>
            <span>/</span>
            <span className="text-gray-900">Toxina Botulínica</span>
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
                  Toxina Botulínica
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Tratamento para suavizar rugas de expressão e prevenir o envelhecimento, 
                  proporcionando uma aparência mais jovem e descansada de forma natural.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>30-45 minutos</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>A partir de R$ 600</span>
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
                <Image
                  src="https://images.pexels.com/photos/3985334/pexels-photo-3985334.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Toxina Botulínica"
                  width={600}
                  height={600}
                  className="w-full h-full object-cover"
                  unoptimized={true}
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
                  A toxina botulínica é um tratamento seguro e eficaz para suavizar rugas dinâmicas 
                  causadas pela contração muscular repetitiva. É ideal para tratar rugas da testa, 
                  pés de galinha e glabela, proporcionando um aspecto mais jovem e descansado.
                </p>
                <p>
                  O procedimento atua bloqueando temporariamente os sinais nervosos que causam a 
                  contração muscular, permitindo que a pele se relaxe e as rugas se suavizem. 
                  Os resultados são naturais e preservam a expressividade facial.
                </p>
                <p>
                  Além do efeito estético, a toxina botulínica também pode ser utilizada para 
                  tratar condições como bruxismo, sorriso gengival e hiperidrose, oferecendo 
                  benefícios funcionais importantes.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Áreas de Tratamento</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {treatmentAreas.map((area, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">{area}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Benefícios</h3>
                <div className="grid grid-cols-1 gap-3">
                  {benefits.slice(0, 4).map((benefit, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-600">{benefit}</span>
                    </div>
                  ))}
                </div>
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
              Um processo simples e rápido para resultados naturais e duradouros.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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

      {/* Results Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Cronograma de Resultados
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-blue-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-4">3-7 dias</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Início dos Efeitos</h3>
              <p className="text-gray-600">
                Os primeiros sinais de relaxamento muscular começam a aparecer.
              </p>
            </div>
            <div className="text-center bg-green-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-4">2 semanas</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Resultado Completo</h3>
              <p className="text-gray-600">
                O efeito máximo é alcançado com suavização completa das rugas.
              </p>
            </div>
            <div className="text-center bg-purple-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-4">4-6 meses</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Duração</h3>
              <p className="text-gray-600">
                Os resultados se mantêm por este período, quando nova aplicação pode ser feita.
              </p>
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
                A toxina botulínica é segura?
              </h3>
              <p className="text-gray-600">
                Sim, quando aplicada por profissionais qualificados. É um tratamento aprovado 
                pela ANVISA e amplamente utilizado na medicina estética há décadas.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                O rosto fica "congelado"?
              </h3>
              <p className="text-gray-600">
                Não, quando aplicada corretamente, a toxina botulínica preserva a expressividade 
                natural, apenas suavizando as rugas de expressão.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso fazer exercícios após o tratamento?
              </h3>
              <p className="text-gray-600">
                Recomendamos evitar exercícios intensos nas primeiras 24 horas para garantir 
                a fixação adequada do produto.
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
              Pronto para suavizar suas rugas de expressão?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Agende uma consulta e descubra como a toxina botulínica pode proporcionar 
              uma aparência mais jovem e descansada de forma natural.
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