interface Protocol {
  title: string;
  sessions: string;
  description: string;
  details: string[];
}

interface ProtocolsSectionProps {
  protocols: Protocol[];
}

export default function ProtocolsSection({ protocols }: ProtocolsSectionProps) {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"><h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">Protocolos de Tratamento</h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {protocols.map((protocol, i) => (
            <div key={i} className="text-center bg-gray-50 p-8 rounded-2xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{protocol.title}</h3>
              <div className="text-3xl font-bold text-gray-800 mb-4">{protocol.sessions}</div>
              <p className="text-gray-600 mb-4">{protocol.description}</p>
              <ul className="text-sm text-gray-600 space-y-2">
                {protocol.details.map((detail, j) => <li key={j}>{detail}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}