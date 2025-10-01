import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CTA {
  title: string;
  subtitle: string;
}

interface CTASectionProps {
  cta: CTA;
}

export default function CTASection({ cta }: CTASectionProps) {
  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold">{cta.title}</h2>
          <p className="text-xl text-gray-300 leading-relaxed">{cta.subtitle}</p>
          <Link href="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200">
                  Agendar Avaliação <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}