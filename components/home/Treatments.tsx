import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const treatmentHighlights = [
  {
    title: "Tratamentos Faciais",
    description: "Harmonização, rejuvenescimento e cuidados especializados para o rosto",
    image: "https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Tratamentos Corporais",
    description: "Modelagem, firmeza e cuidados estéticos para o corpo",
    image: "https://images.pexels.com/photos/10894312/pexels-photo-10894312.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    title: "Tratamentos Capilares",
    description: "Fortalecimento, crescimento e saúde capilar",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

const Treatments = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Nossos Tratamentos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Descubra nossa ampla gama de tratamentos estéticos para face,
            corpo e cabelo, todos realizados com a mais alta qualidade e
            segurança.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {treatmentHighlights.map((treatment, index) => (
            <div key={index} className="group">
              <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3 group-hover:text-gray-700 transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            href="/tratamentos"
            className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
          >
            Ver Todos os Tratamentos
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Treatments;