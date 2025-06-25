import Link from 'next/link';
import { ArrowRight, Clock, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function RadiofrequenciaCorporal() {
  const benefits = [
    'Firmeza da pele',
    'Redução da flacidez',
    'Estimulação do colágeno',
    'Melhora da circulação',
    'Procedimento confortável',
    'Sem tempo de inatividade',
    'Resultados progressivos',
    'Tratamento seguro'
  ];

  const treatmentAreas = [
    'Abdômen',
    'Braços',
    'Coxas',
    'Glúteos',
    'Costas',
    'Pescoço',
    'Flancos',
    'Região do soutien'
  ];

  const process = [
    {
      step: '1',
      title: 'Preparação',
      description: 'Limpeza da pele e aplicação de gel condutor para o tratamento.'
    },
    {
      step: '2',
      title: 'Aquecimento',
      description: 'Aplicação gradual da radiofrequência com aquecimento controlado.'
    },
    {
      step: '3',
      title: 'Tratamento',
      description: 'Movimentos circulares para distribuição uniforme da energia.'
    },
    {
      step: '4',
      title: 'Finalização',
      description: 'Hidratação da pele e orientações pós-tratamento.'
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
            <span className="text-gray-900">Radiofrequência Corporal</span>
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
                  Radiofrequência Corporal
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Tratamento para firmeza e tonificação da pele, reduzindo flacidez corporal 
                  através do aquecimento controlado das camadas profundas.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>45-60 minutos</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>A partir de R$ 300</span>
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
                  src="https://images.pexels.com/photos/3985335/pexels-photo-3985335.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Radiofrequência Corporal"
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
                  A radiofrequência corporal utiliza ondas eletromagnéticas para aquecer as camadas 
                  profundas da pele, estimulando a produção de colágeno e elastina. Isso resulta em 
                  maior firmeza, redução da flacidez e melhora da textura da pele.
                </p>
                <p>
                  O aquecimento controlado promove a contração das fibras de colágeno existentes 
                  e estimula a formação de novas fibras, proporcionando um efeito lifting natural 
                  e progressivo. É um tratamento confortável e relaxante.
                </p>
                <p>
                  Além dos benefícios estéticos, a radiofrequência melhora a circulação sanguínea 
                  e linfática, contribuindo para a saúde geral da pele e redução de medidas por 
                  melhora do metabolismo local.
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
              Um tratamento relaxante e eficaz para firmeza da pele.
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

      {/* Treatment Protocols */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Protocolos de Tratamento
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Protocolo Básico</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">6-8 sessões</div>
              <p className="text-gray-600 mb-4">
                Para flacidez leve e manutenção
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sessões semanais</li>
                <li>• Resultados graduais</li>
                <li>• Ideal para prevenção</li>
              </ul>
            </div>
            <div className="text-center bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Protocolo Intensivo</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">10-12 sessões</div>
              <p className="text-gray-600 mb-4">
                Para flacidez moderada
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sessões bi-semanais</li>
                <li>• Resultados visíveis</li>
                <li>• Firmeza significativa</li>
              </ul>
            </div>
            <div className="text-center bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Protocolo Avançado</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">15+ sessões</div>
              <p className="text-gray-600 mb-4">
                Para flacidez acentuada
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sessões frequentes</li>
                <li>• Resultados máximos</li>
                <li>• Remodelação corporal</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Results Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Cronograma de Resultados
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-2xl font-bold text-blue-600 mb-3">Imediato</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Pós-Sessão</h3>
              <p className="text-gray-600 text-sm">
                Sensação de firmeza e pele mais lisa.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-2xl font-bold text-green-600 mb-3">2-4 semanas</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Primeiros Resultados</h3>
              <p className="text-gray-600 text-sm">
                Melhora visível na textura da pele.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-2xl font-bold text-purple-600 mb-3">2-3 meses</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resultado Significativo</h3>
              <p className="text-gray-600 text-sm">
                Firmeza notável e redução da flacidez.
              </p>
            </div>
            <div className="text-center bg-white p-6 rounded-2xl shadow-sm">
              <div className="text-2xl font-bold text-orange-600 mb-3">6 meses</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resultado Máximo</h3>
              <p className="text-gray-600 text-sm">
                Efeito completo com nova formação de colágeno.
              </p>
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
                O tratamento é doloroso?
              </h3>
              <p className="text-gray-600">
                Não, a radiofrequência proporciona uma sensação de aquecimento agradável 
                e relaxante. Muitos pacientes consideram o tratamento prazeroso.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso fazer exercícios após o tratamento?
              </h3>
              <p className="text-gray-600">
                Sim, não há restrições. Você pode retomar suas atividades normais 
                imediatamente após a sessão.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Qual a diferença para outros tratamentos?
              </h3>
              <p className="text-gray-600">
                A radiofrequência atua estimulando a produção natural de colágeno, 
                proporcionando resultados graduais e naturais sem invasividade.
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
              Pronto para conquistar uma pele mais firme?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Agende uma avaliação e descubra como a radiofrequência corporal 
              pode ajudar você a ter uma pele mais firme e tonificada.
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