import Link from 'next/link';
import { ArrowRight, Clock, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function Criolipolise() {
  const benefits = [
    'Redução de gordura localizada',
    'Procedimento não invasivo',
    'Sem tempo de recuperação',
    'Resultados duradouros',
    'Seguro e eficaz',
    'Não requer anestesia',
    'Retorno imediato às atividades',
    'Eliminação natural das células'
  ];

  const treatmentAreas = [
    'Abdômen',
    'Flancos (love handles)',
    'Culote',
    'Costas',
    'Braços',
    'Coxas',
    'Papada',
    'Região submentoniana'
  ];

  const process = [
    {
      step: '1',
      title: 'Avaliação',
      description: 'Análise das áreas de gordura localizada e planejamento do tratamento.'
    },
    {
      step: '2',
      title: 'Preparação',
      description: 'Posicionamento do equipamento e proteção da pele com gel.'
    },
    {
      step: '3',
      title: 'Aplicação',
      description: 'Congelamento controlado das células adiposas por 35-60 minutos.'
    },
    {
      step: '4',
      title: 'Massagem',
      description: 'Massagem pós-tratamento para otimizar os resultados.'
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
            <span className="text-gray-900">Criolipólise</span>
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
                  Criolipólise
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Eliminação de gordura localizada através do congelamento controlado das células
                  adiposas, sem cirurgia e com resultados duradouros.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>60-90 minutos</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>A partir de R$ 400</span>
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
                  src="https://images.pexels.com/photos/3736413/pexels-photo-3736413.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Criolipólise"
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
                  A criolipólise é um tratamento não invasivo que utiliza o frio controlado para
                  eliminar células de gordura localizada. O procedimento congela as células adiposas,
                  que são naturalmente eliminadas pelo organismo ao longo das semanas seguintes.
                </p>
                <p>
                  Esta tecnologia revolucionária permite reduzir camadas de gordura sem cirurgia,
                  cortes ou anestesia. O frio aplicado de forma controlada destrói apenas as células
                  de gordura, preservando os tecidos circundantes como pele, músculos e nervos.
                </p>
                <p>
                  Os resultados são progressivos e naturais, com redução visível da gordura localizada
                  entre 2 a 4 meses após o tratamento. É ideal para pessoas próximas ao peso ideal
                  que possuem gorduras resistentes à dieta e exercícios.
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
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Principais Benefícios</h3>
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
              Um processo simples e confortável para eliminação de gordura localizada.
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-blue-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-blue-600 mb-4">Imediato</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Pós-Tratamento</h3>
              <p className="text-gray-600">
                Retorno imediato às atividades normais sem restrições.
              </p>
            </div>
            <div className="text-center bg-green-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-green-600 mb-4">3 semanas</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Início dos Efeitos</h3>
              <p className="text-gray-600">
                Primeiros sinais de redução da gordura localizada.
              </p>
            </div>
            <div className="text-center bg-purple-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-purple-600 mb-4">2 meses</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Resultado Visível</h3>
              <p className="text-gray-600">
                Redução significativa e visível da camada de gordura.
              </p>
            </div>
            <div className="text-center bg-orange-50 p-8 rounded-2xl">
              <div className="text-3xl font-bold text-orange-600 mb-4">3-4 meses</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Resultado Final</h3>
              <p className="text-gray-600">
                Resultado máximo com eliminação completa das células tratadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ideal Candidate */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Candidato Ideal
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-green-600">✓ Indicado para:</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Pessoas próximas ao peso ideal</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Gordura localizada resistente</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Pele com boa elasticidade</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Expectativas realistas</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Estilo de vida saudável</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6 text-red-600">✗ Contraindicações:</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Obesidade ou sobrepeso significativo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Gravidez ou amamentação</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Doenças autoimunes</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Crioglobulinemia</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Hérnias na área de tratamento</span>
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
                Geralmente uma sessão é suficiente por área. Em casos específicos,
                uma segunda sessão pode ser recomendada após 3 meses.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                O procedimento é doloroso?
              </h3>
              <p className="text-gray-600">
                Inicialmente há sensação de frio intenso que se torna confortável.
                Muitos pacientes relaxam ou até dormem durante o tratamento.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso ganhar peso após o tratamento?
              </h3>
              <p className="text-gray-600">
                As células eliminadas não retornam, mas é importante manter hábitos
                saudáveis para preservar os resultados obtidos.
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
              Pronto para eliminar a gordura localizada?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Agende uma avaliação e descubra como a criolipólise pode ajudar você
              a conquistar o corpo que sempre desejou.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Agendar Avaliação
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
