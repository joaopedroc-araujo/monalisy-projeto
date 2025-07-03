import Link from "next/link";
import { ArrowRight, Clock, Star, CheckCircle, ArrowLeft } from "lucide-react";
import Image from "next/image";

export default function DrenagemLinfatica() {
  const benefits = [
    "Reduz inchaço e retenção",
    "Melhora a circulação",
    "Elimina toxinas",
    "Promove relaxamento",
    "Acelera recuperação pós-procedimentos",
    "Fortalece sistema imunológico",
    "Melhora qualidade do sono",
    "Reduz celulite"
  ];

  const indications = [
    "Pós-operatório",
    "Retenção de líquidos",
    "Inchaço nas pernas",
    "Celulite",
    "Fadiga",
    "Estresse",
    "Problemas circulatórios",
    "Recuperação pós-treino"
  ];

  const process = [
    {
      step: "1",
      title: "Avaliação",
      description: "Análise do paciente e identificação das necessidades específicas."
    },
    {
      step: "2",
      title: "Preparação",
      description: "Ambiente relaxante e posicionamento adequado para o tratamento."
    },
    {
      step: "3",
      title: "Massagem",
      description: "Técnica específica de drenagem linfática manual ou com equipamentos."
    },
    {
      step: "4",
      title: "Orientações",
      description: "Recomendações para potencializar os resultados do tratamento."
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
            <span className="text-gray-900">Drenagem Linfática</span>
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
                  Drenagem Linfática
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Técnica que estimula o sistema linfático, reduzindo inchaço, melhorando a circulação
                  e promovendo relaxamento profundo e bem-estar.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>60-75 minutos</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>A partir de R$ 200</span>
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
                  src="https://images.pexels.com/photos/3985337/pexels-photo-3985337.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Drenagem Linfática"
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
                  A drenagem linfática é uma técnica de massagem suave que estimula o sistema
                  linfático, ajudando na eliminação de toxinas e redução do inchaço. É ideal
                  para pós-operatório, retenção de líquidos e como tratamento de bem-estar.
                </p>
                <p>
                  Esta técnica utiliza movimentos específicos e pressão suave para direcionar
                  o fluxo da linfa em direção aos gânglios linfáticos, promovendo a eliminação
                  natural de líquidos e toxinas acumulados nos tecidos.
                </p>
                <p>
                  Além dos benefícios estéticos, a drenagem linfática fortalece o sistema
                  imunológico, melhora a qualidade do sono e proporciona uma sensação profunda
                  de relaxamento e bem-estar.
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
              Um tratamento relaxante e terapêutico para seu bem-estar.
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

      {/* Types of Drainage */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Tipos de Drenagem Linfática
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Drenagem Manual</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Técnica realizada exclusivamente com as mãos, utilizando movimentos específicos
                  e pressão suave para estimular o sistema linfático.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">Mais relaxante</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">Técnica personalizada</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-gray-600">Ideal para pós-operatório</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Drenagem com Equipamentos</h3>
              <div className="space-y-4">
                <p className="text-gray-600">
                  Utiliza equipamentos específicos que simulam os movimentos da drenagem manual,
                  potencializando os resultados do tratamento.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600">Resultados potencializados</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600">Pressão uniforme</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                    <span className="text-gray-600">Ideal para manutenção</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post-Treatment Care */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Cuidados Pós-Tratamento
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">Recomendações</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Beber bastante água</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Evitar sal em excesso</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Fazer caminhadas leves</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Manter alimentação saudável</span>
                </li>
                <li className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                  <span className="text-gray-600">Descansar adequadamente</span>
                </li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">O que Evitar</h3>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Exercícios intensos por 24h</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Exposição ao calor excessivo</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Consumo de álcool</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Alimentos muito salgados</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div>
                  <span className="text-gray-600">Ficar muito tempo em pé</span>
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
                Quantas sessões são recomendadas?
              </h3>
              <p className="text-gray-600">
                Para manutenção, recomendamos sessões quinzenais ou mensais. Para pós-operatório,
                o protocolo é definido conforme orientação médica.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso fazer durante a gravidez?
              </h3>
              <p className="text-gray-600">
                A drenagem linfática pode ser realizada durante a gravidez, mas sempre
                com autorização médica e técnicas específicas para gestantes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Há contraindicações?
              </h3>
              <p className="text-gray-600">
                Sim, como infecções agudas, trombose, insuficiência cardíaca descompensada
                e alguns tipos de câncer. Sempre consulte um profissional.
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
              Pronto para sentir os benefícios da drenagem linfática?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Agende uma sessão e experimente uma sensação única de relaxamento
              e bem-estar com nossa drenagem linfática especializada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Agendar Sessão
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
