import Link from 'next/link';
import { ArrowRight, Clock, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function MicroagulhamentoFacial() {
  const benefits = [
    'Melhora cicatrizes de acne',
    'Reduz poros dilatados',
    'Estimula renovação celular',
    'Melhora textura da pele',
    'Aumenta absorção de ativos',
    'Estimula produção de colágeno',
    'Reduz linhas finas',
    'Uniformiza tom da pele'
  ];

  const indications = [
    'Cicatrizes de acne',
    'Poros dilatados',
    'Rugas finas',
    'Flacidez leve',
    'Manchas superficiais',
    'Textura irregular',
    'Estrias faciais',
    'Melasma leve'
  ];

  const process = [
    {
      step: '1',
      title: 'Limpeza da Pele',
      description: 'Higienização completa e preparação da pele para o procedimento.'
    },
    {
      step: '2',
      title: 'Anestesia Tópica',
      description: 'Aplicação de anestésico para garantir conforto durante o tratamento.'
    },
    {
      step: '3',
      title: 'Microagulhamento',
      description: 'Aplicação do equipamento com movimentos precisos e controlados.'
    },
    {
      step: '4',
      title: 'Aplicação de Ativos',
      description: 'Uso de séruns específicos para potencializar os resultados.'
    },
    {
      step: '5',
      title: 'Finalização',
      description: 'Aplicação de protetor solar e orientações pós-tratamento.'
    }
  ];

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
            <span className="text-gray-900">Microagulhamento Facial</span>
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
                  Microagulhamento Facial
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Estimula a regeneração natural da pele melhorando cicatrizes, poros dilatados
                  e textura geral através de microlesões controladas.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>60-75 minutos</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>A partir de R$ 350</span>
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
                  src="https://images.pexels.com/photos/3985336/pexels-photo-3985336.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Microagulhamento Facial"
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
                  O microagulhamento facial é um procedimento que utiliza microagulhas para criar
                  microperfurações controladas na pele, estimulando a produção natural de colágeno
                  e elastina. É eficaz para tratar cicatrizes de acne, poros dilatados e melhorar
                  a textura geral da pele.
                </p>
                <p>
                  Este tratamento ativa o processo natural de cicatrização da pele, promovendo
                  renovação celular e melhora significativa na qualidade da pele. As microlesões
                  controladas estimulam a formação de novo colágeno, resultando em pele mais
                  firme, lisa e uniforme.
                </p>
                <p>
                  Além dos benefícios regenerativos, o microagulhamento aumenta significativamente
                  a absorção de ativos aplicados durante e após o procedimento, potencializando
                  os resultados do tratamento.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Indicações</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {indications.map((indication, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">{indication}</span>
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
              Etapas do Procedimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um protocolo cuidadoso para garantir segurança e eficácia.
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

      {/* Recovery Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Cronograma de Recuperação
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-red-50 p-6 rounded-2xl">
              <div className="text-2xl font-bold text-red-600 mb-3">24h</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Vermelhidão</h3>
              <p className="text-gray-600 text-sm">
                Vermelhidão similar a queimadura solar leve.
              </p>
            </div>
            <div className="text-center bg-orange-50 p-6 rounded-2xl">
              <div className="text-2xl font-bold text-orange-600 mb-3">2-3 dias</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Descamação</h3>
              <p className="text-gray-600 text-sm">
                Descamação leve e renovação celular.
              </p>
            </div>
            <div className="text-center bg-blue-50 p-6 rounded-2xl">
              <div className="text-2xl font-bold text-blue-600 mb-3">1 semana</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Normalização</h3>
              <p className="text-gray-600 text-sm">
                Pele volta ao normal com melhora visível.
              </p>
            </div>
            <div className="text-center bg-green-50 p-6 rounded-2xl">
              <div className="text-2xl font-bold text-green-600 mb-3">30 dias</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resultado</h3>
              <p className="text-gray-600 text-sm">
                Resultado completo com nova formação de colágeno.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Care Instructions */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Cuidados Pós-Tratamento
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Primeiras 48 horas</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Aplicar protetor solar FPS 60+</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Usar produtos suaves e hidratantes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Evitar maquiagem</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Não tocar ou esfregar a pele</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Primeira semana</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600">Evitar exercícios intensos</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600">Não usar ácidos ou esfoliantes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600">Manter hidratação constante</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-600">Evitar exposição solar direta</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quantas sessões são necessárias?
              </h3>
              <p className="text-gray-600">
                Geralmente recomendamos de 3 a 6 sessões, com intervalos de 30 dias,
                dependendo da condição da pele e objetivos do tratamento.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                O procedimento é doloroso?
              </h3>
              <p className="text-gray-600">
                Com anestésico tópico, o desconforto é mínimo. A sensação é similar
                a uma lixa suave passando pela pele.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso fazer no verão?
              </h3>
              <p className="text-gray-600">
                Sim, mas é fundamental usar protetor solar rigorosamente e evitar
                exposição solar direta nas primeiras semanas.
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
              Pronto para renovar sua pele?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Agende uma consulta e descubra como o microagulhamento pode melhorar
              a textura e qualidade da sua pele de forma natural.
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
