import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold">
            Pronto para transformar sua beleza?
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            Entre em contato conosco e agende uma consulta personalizada.
            Nossa equipe está pronta para ajudá-lo a alcançar seus objetivos
            estéticos.
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
              Ver Tratamentos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;