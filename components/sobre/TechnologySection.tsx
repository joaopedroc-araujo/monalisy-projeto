export default function TechnologySection() {
  return (
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
  );
}