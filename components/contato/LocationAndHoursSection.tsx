import { MapPin, Clock, Navigation, Calendar } from "lucide-react";

export default function LocationAndHoursSection() {
  const businessHours = [
    { day: "Segunda a Sexta", hours: "8h às 20h" },
    { day: "Sábado", hours: "Fechado" },
    { day: "Domingo", hours: "Fechado" }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Location Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-6 flex items-center">
                <MapPin className="w-10 h-10 text-gray-600 mr-4" />
                Nossa Localização
              </h2>
              <div className="bg-gray-50 rounded-2xl p-6 mb-8 shadow-lg">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Navigation className="w-6 h-6 text-gray-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Endereço Completo</h3>
                    <p className="text-gray-600 leading-relaxed">
                      R. Felipe dos Santos, 674 - Sala 901<br />
                      Centro, Betim - MG<br />
                      CEP: 32600-214
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-6 flex items-center">
                <Clock className="w-8 h-8 text-gray-600 mr-4" />
                Horário de Funcionamento
              </h3>
              <div className="space-y-4">
                {businessHours.map((schedule, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl shadow-sm">
                    <span className="font-medium text-gray-900">{schedule.day}</span>
                    <span className="text-gray-600">{schedule.hours}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200 shadow-sm">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-blue-600" />
                  <p className="text-blue-800 font-medium">
                    Agendamentos disponíveis de segunda a sexta, das 8h às 20h.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Map */}
          <div className="space-y-6">
            <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1325.794697002969!2d-44.19739944766124!3d-19.970131989849698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa6c391895afe2b%3A0x1602e6d2425a1bca!2sDra.%20Monalisy%20Rodrigues!5e0!3m2!1sen!2sbr!4v1750768298613!5m2!1sen!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Clínica Monalisy Rodrigues"
              />
            </div>

            <div className="text-center">
              <a
                href="https://maps.google.com/?q=Dra+Monalisy+Rodrigues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors duration-200 shadow-lg hover:shadow-xl"
              >
                <Navigation className="w-5 h-5 mr-2" />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}