export default function MissionVisionValuesSection() {
  return (
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
  );
}