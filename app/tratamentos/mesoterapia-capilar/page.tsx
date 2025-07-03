import Link from "next/link";
import { ArrowRight, Clock, Star, CheckCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function MesoterapiaCapilar() {
  const benefits = [
    "Estimula o crescimento capilar",
    "Fortalece os fios",
    "Melhora a circulação do couro cabeludo",
    "Reduz a queda de cabelo",
    "Nutrição profunda",
    "Aumenta densidade capilar",
    "Melhora qualidade dos fios",
    "Revitaliza folículos pilosos"
  ];

  const indications = [
    "Queda de cabelo",
    "Alopecia androgenética",
    "Cabelos finos e fracos",
    "Falta de densidade",
    "Couro cabeludo ressecado",
    "Calvície inicial",
    "Cabelos sem brilho",
    "Envelhecimento capilar"
  ];

  const process = [
    {
      step: "1",
      title: "Avaliação Tricológica",
      description: "Análise completa do couro cabeludo e identificação das necessidades."
    },
    {
      step: "2",
      title: "Preparação",
      description: "Limpeza do couro cabeludo e preparação dos ativos específicos."
    },
    {
      step: "3",
      title: "Aplicação",
      description: "Injeção dos ativos revitalizantes diretamente no couro cabeludo."
    },
    {
      step: "4",
      title: "Massagem",
      description: "Massagem estimulante para potencializar a absorção dos ativos."
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
            <span className="text-gray-900">Mesoterapia Capilar</span>
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
                  Mesoterapia Capilar
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Aplicação de ativos revitalizantes diretamente no couro cabeludo para estimular
                  o crescimento e fortalecer os fios de forma eficaz.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>45-60 minutos</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>A partir de R$ 250</span>
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
                  src="https://images.pexels.com/photos/3993096/pexels-photo-3993096.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mesoterapia Capilar"
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
                  A mesoterapia capilar consiste na aplicação de um coquetel de vitaminas, minerais
                  e ativos específicos diretamente no couro cabeludo. Este tratamento estimula a
                  circulação sanguínea, fortalece os folículos pilosos e promove o crescimento de
                  fios mais saudáveis.
                </p>
                <p>
                  Os ativos são aplicados através de microinjeções na derme do couro cabeludo,
                  garantindo que os nutrientes cheguem diretamente aos folículos pilosos. Isso
                  resulta em maior eficácia comparado aos tratamentos tópicos convencionais.
                </p>
                <p>
                  O tratamento é personalizado conforme as necessidades específicas de cada paciente,
                  podendo incluir vitaminas do complexo B, aminoácidos, minerais, fatores de
                  crescimento e outros ativos que nutrem e revitalizam o couro cabeludo.
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
              Um protocolo especializado para revitalização capilar.
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

      {/* Active Ingredients */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Ativos Utilizados
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Vitaminas do Complexo B</h3>
              <p className="text-gray-600 text-sm">
                Essenciais para o crescimento capilar e fortalecimento dos fios.
              </p>
            </div>
            <div className="bg-green-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Aminoácidos</h3>
              <p className="text-gray-600 text-sm">
                Blocos construtores das proteínas capilares, fortalecem a estrutura dos fios.
              </p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Minerais</h3>
              <p className="text-gray-600 text-sm">
                Zinco, ferro e outros minerais essenciais para a saúde capilar.
              </p>
            </div>
            <div className="bg-orange-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fatores de Crescimento</h3>
              <p className="text-gray-600 text-sm">
                Estimulam a atividade dos folículos pilosos e o crescimento capilar.
              </p>
            </div>
            <div className="bg-pink-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Ácido Hialurônico</h3>
              <p className="text-gray-600 text-sm">
                Hidrata profundamente o couro cabeludo e melhora a qualidade dos fios.
              </p>
            </div>
            <div className="bg-yellow-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Antioxidantes</h3>
              <p className="text-gray-600 text-sm">
                Protegem contra danos causados por radicais livres e envelhecimento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Treatment Protocol */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Protocolo de Tratamento
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fase Intensiva</h3>
              <div className="text-3xl font-bold text-blue-600 mb-4">4-6 sessões</div>
              <p className="text-gray-600 mb-4">
                Sessões semanais para resultados iniciais
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Estímulo inicial dos folículos</li>
                <li>• Nutrição profunda</li>
                <li>• Redução da queda</li>
              </ul>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Fase de Consolidação</h3>
              <div className="text-3xl font-bold text-green-600 mb-4">4-6 sessões</div>
              <p className="text-gray-600 mb-4">
                Sessões quinzenais para consolidar resultados
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Fortalecimento dos fios</li>
                <li>• Aumento da densidade</li>
                <li>• Melhora da qualidade</li>
              </ul>
            </div>
            <div className="text-center bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Manutenção</h3>
              <div className="text-3xl font-bold text-purple-600 mb-4">Mensal</div>
              <p className="text-gray-600 mb-4">
                Sessões mensais para manter os resultados
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Preservação dos resultados</li>
                <li>• Prevenção da queda</li>
                <li>• Saúde capilar contínua</li>
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
                O procedimento é doloroso?
              </h3>
              <p className="text-gray-600">
                O desconforto é mínimo. Utilizamos agulhas muito finas e técnicas que
                minimizam qualquer incômodo durante a aplicação.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Quando posso ver os primeiros resultados?
              </h3>
              <p className="text-gray-600">
                Os primeiros sinais de melhora aparecem após 4-6 semanas, com redução
                da queda e melhora da qualidade dos fios.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso lavar o cabelo após o tratamento?
              </h3>
              <p className="text-gray-600">
                Recomendamos aguardar 24 horas antes de lavar o cabelo para permitir
                a absorção completa dos ativos aplicados.
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
              Pronto para revitalizar seus cabelos?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Agende uma avaliação tricológica e descubra como a mesoterapia capilar
              pode transformar a saúde e beleza dos seus cabelos.
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
