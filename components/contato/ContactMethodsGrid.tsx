import Link from "next/link";
import { Phone, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function ContactMethodsGrid() {
  const contactMethods = [
    {
      icon: <Phone className="w-8 h-8" />,
      title: "Telefone",
      primary: "(31) 99999-9999",
      secondary: "(31) 3333-3333",
      description: "Ligue para agendar sua consulta",
      action: "tel:+5531999999999",
      actionText: "Ligar Agora",
      color: "bg-blue-600 text-white"
    },
    {
      icon: <FaWhatsapp className="w-8 h-8" />,
      title: "WhatsApp",
      primary: "(31) 99999-9999",
      secondary: "Resposta rápida",
      description: "Converse conosco pelo WhatsApp",
      action: "https://wa.me/5531999999999",
      actionText: "Enviar Mensagem",
      color: "bg-green-600 text-white"
    },
    {
      icon: <Mail className="w-8 h-8" />,
      title: "E-mail",
      primary: "contato@clinicamonalisy.com.br",
      secondary: "agendamento@clinicamonalisy.com.br",
      description: "Envie suas dúvidas por e-mail",
      action: "mailto:contato@clinicamonalisy.com.br",
      actionText: "Enviar E-mail",
      color: "bg-purple-600 text-white"
    }
  ];

  return (
    <section className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-gray-200 hover:-translate-y-2"
            >
              <div className="relative z-10">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 ${method.color} group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  {method.icon}
                </div>

                <h3 className="text-2xl font-playfair font-bold text-gray-900 mb-4">
                  {method.title}
                </h3>

                <div className="space-y-2 mb-6">
                  <p className="text-lg font-semibold text-gray-800">
                    {method.primary}
                  </p>
                  <p className="text-gray-600">
                    {method.secondary}
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {method.description}
                  </p>
                </div>

                <Link
                  href={method.action}
                  target={method.action.startsWith("http") ? "_blank" : undefined}
                  rel={method.action.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-colors duration-200 group-hover:shadow-lg"
                >
                  {method.actionText}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}