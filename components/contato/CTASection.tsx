import Link from "next/link";
import { Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function CTASection() {
  return (
    <section className="py-20 bg-gray-700 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-white to-transparent rounded-full -translate-x-48 -translate-y-48"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-white to-transparent rounded-full translate-x-48 translate-y-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          <h2 className="text-4xl lg:text-5xl font-playfair font-bold">
            Pronto para Transformar sua Beleza?
          </h2>
          <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed">
            Entre em contato conosco hoje mesmo e agende uma consulta personalizada.
            Nossa equipe está pronta para ajudá-lo a alcançar seus objetivos estéticos.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
            <Link
              href="tel:+5531999999999"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              rel="noopener noreferrer"
              target="_blank"
            >
              <Phone className="w-5 h-5 mr-3" />
              Ligar Agora
            </Link>
            <Link
              href="https://wa.me/5531999999999"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-xl hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
              rel="noopener noreferrer"
              target="_blank"
            >
              <FaWhatsapp className="w-5 h-5 mr-3" />
              WhatsApp
            </Link>
            <Link
              href="/tratamentos"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-700 text-white font-semibold rounded-xl hover:border-gray-600 hover:bg-gray-800 transition-all duration-300"
            >
              Ver Tratamentos
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}