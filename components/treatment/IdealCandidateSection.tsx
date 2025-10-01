import { CheckCircle } from "lucide-react";

interface IdealCandidate {
  indications: string[];
  contraindications: string[];
}

interface IdealCandidateSectionProps {
  idealCandidate: IdealCandidate;
}

export default function IdealCandidateSection({ idealCandidate }: IdealCandidateSectionProps) {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Candidato Ideal</h2></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">✓ Indicado para:</h3>
            <ul className="space-y-3">{idealCandidate.indications.map((item, i) => <li key={i} className="flex items-center space-x-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /><span className="text-gray-600">{item}</span></li>)}</ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm">
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">✗ Contraindicações:</h3>
            <ul className="space-y-3">{idealCandidate.contraindications.map((item, i) => <li key={i} className="flex items-center space-x-3"><div className="w-5 h-5 bg-red-600 rounded-full flex-shrink-0"></div><span className="text-gray-600">{item}</span></li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}