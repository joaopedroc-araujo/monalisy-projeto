import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-gray-900 leading-tight">
                Medicina Estética
                <span className="text-gray-600"> de Excelência</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Tratamentos inovadores e personalizados para realçar sua
                beleza natural com segurança e resultados duradouros.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200"
              >
                Agendar Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/sobre"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-gray-400 hover:text-gray-900 transition-colors duration-200"
              >
                Conheça a Clínica
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-gray-100">
              <Image
                src="/images/LSF (39).webp"
                priority
                alt="Clínica Monalisy Rodrigues"
                width={800}
                height={500}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gray-200 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gray-100 rounded-2xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;