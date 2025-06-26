import Link from 'next/link';
import { ArrowRight, Clock, Star, CheckCircle, ArrowLeft } from 'lucide-react';
import Image from 'next/image';

export default function PreenchimentoAcidoHialuronico() {
  const benefits = [
    'Restauração do volume facial',
    'Hidratação profunda da pele',
    'Suavização de rugas e sulcos',
    'Resultado imediato e natural',
    'Produto biocompatível',
    'Melhora da textura da pele',
    'Estimula produção de colágeno',
    'Reversível se necessário'
  ];

  const treatmentAreas = [
    'Sulco nasogeniano',
    'Código de barras (lábios)',
    'Olheiras',
    'Volume labial',
    'Maçãs do rosto',
    'Mandíbula',
    'Queixo',
    'Têmporas'
  ];

  const process = [
    {
      step: '1',
      title: 'Análise Facial',
      description: 'Avaliação detalhada das áreas que necessitam restauração de volume.'
    },
    {
      step: '2',
      title: 'Anestesia',
      description: 'Aplicação de anestésico tópico para maior conforto durante o procedimento.'
    },
    {
      step: '3',
      title: 'Preenchimento',
      description: 'Aplicação gradual e precisa do ácido hialurônico nas áreas planejadas.'
    },
    {
      step: '4',
      title: 'Modelagem',
      description: 'Massagem suave para distribuição uniforme e resultado harmonioso.'
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
            <span className="text-gray-900">Preenchimento com Ácido Hialurônico</span>
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
                  Preenchimento com Ácido Hialurônico
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Restaura volume e hidratação, suavizando rugas e sulcos faciais para
                  um aspecto mais jovem e natural com resultados imediatos.
                </p>
              </div>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center">
                  <Clock className="w-5 h-5 mr-2" />
                  <span>45-60 minutos</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-5 h-5 mr-2" />
                  <span>A partir de R$ 700</span>
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
                  src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Preenchimento com Ácido Hialurônico"
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
                  O ácido hialurônico é uma substância naturalmente presente em nosso organismo,
                  responsável pela hidratação e volume da pele. Quando aplicado como preenchimento,
                  restaura o volume perdido com o tempo e suaviza rugas e sulcos.
                </p>
                <p>
                  Este tratamento é ideal para quem busca resultados imediatos e naturais,
                  proporcionando hidratação profunda e estimulando a produção natural de colágeno.
                  O produto é completamente biocompatível e absorvível pelo organismo.
                </p>
                <p>
                  Além dos benefícios estéticos, o ácido hialurônico melhora significativamente
                  a qualidade da pele, proporcionando maior elasticidade, hidratação e luminosidade
                  natural que perdura por meses.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-gray-900">Áreas de Aplicação</h3>
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
              Etapas do Procedimento
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um processo cuidadoso para garantir resultados naturais e seguros.
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

      {/* Types of Hyaluronic Acid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Tipos de Ácido Hialurônico
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Utilizamos diferentes densidades para resultados específicos em cada área.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center bg-blue-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Baixa Densidade</h3>
              <p className="text-gray-600 mb-4">
                Ideal para hidratação e rugas superficiais
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Código de barras</li>
                <li>• Rugas finas</li>
                <li>• Hidratação geral</li>
              </ul>
            </div>
            <div className="text-center bg-green-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Média Densidade</h3>
              <p className="text-gray-600 mb-4">
                Para sulcos moderados e volume sutil
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sulco nasogeniano</li>
                <li>• Lábios</li>
                <li>• Olheiras</li>
              </ul>
            </div>
            <div className="text-center bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Alta Densidade</h3>
              <p className="text-gray-600 mb-4">
                Para projeção e volume significativo
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Maçãs do rosto</li>
                <li>• Queixo</li>
                <li>• Mandíbula</li>
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
                Quanto tempo dura o preenchimento?
              </h3>
              <p className="text-gray-600">
                A duração varia de 8 a 18 meses, dependendo da área tratada, densidade do produto
                e características individuais do metabolismo.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                O resultado é reversível?
              </h3>
              <p className="text-gray-600">
                Sim, o ácido hialurônico pode ser dissolvido com hialuronidase se necessário,
                oferecendo segurança adicional ao tratamento.
              </p>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Posso fazer maquiagem após o procedimento?
              </h3>
              <p className="text-gray-600">
                Recomendamos aguardar 24 horas antes de aplicar maquiagem para evitar
                contaminação e permitir a cicatrização adequada.
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
              Pronto para restaurar o volume e hidratação da sua pele?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Agende uma consulta e descubra como o preenchimento com ácido hialurônico
              pode proporcionar resultados naturais e imediatos.
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
