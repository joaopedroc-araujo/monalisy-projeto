import dynamic from "next/dynamic";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Clock, Star } from "lucide-react";
import { Treatment } from "@/data/treatmentsData";

const AboutSection = dynamic(() => import("./treatment/AboutSection"));
const ProcessSection = dynamic(() => import("./treatment/ProcessSection"));
const TimelineSection = dynamic(() => import("./treatment/TimelineSection"));
const ProtocolsSection = dynamic(() => import("./treatment/ProtocolsSection"));
const IdealCandidateSection = dynamic(() => import("./treatment/IdealCandidateSection"));
const FaqSection = dynamic(() => import("./treatment/FaqSection"));
const CTASection = dynamic(() => import("./treatment/CTASection"));

export default function TreatmentPageLayout({ treatment }: { treatment: Treatment }) {
  if (!treatment) {
    return <div>Tratamento não encontrado.</div>;
  }

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
            <span className="text-gray-900">{treatment.name}</span>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 leading-tight">{treatment.name}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{treatment.shortDescription}</p>
              <div className="flex items-center space-x-6 text-gray-600">
                <div className="flex items-center"><Clock className="w-5 h-5 mr-2" /><span>{treatment.duration}</span></div>
                <div className="flex items-center"><Star className="w-5 h-5 mr-2" /><span>{treatment.price}</span></div>
              </div>
              <Link href="/contato" className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors duration-200">
                Agendar Consulta <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-100 shadow-2xl">
              <Image src={treatment.image.src} alt={treatment.image.alt} fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <AboutSection
        longDescription={treatment.longDescription}
        benefits={treatment.benefits}
        treatmentAreas={treatment.treatmentAreas}
        indications={treatment.indications}
      />

      <ProcessSection process={treatment.process} />

      {treatment.timeline && <TimelineSection timeline={treatment.timeline} />}
      {treatment.protocols && <ProtocolsSection protocols={treatment.protocols} />}
      {treatment.idealCandidate && <IdealCandidateSection idealCandidate={treatment.idealCandidate} />}

      <FaqSection faq={treatment.faq} />
      <CTASection cta={treatment.cta} />
    </div>
  );
}
