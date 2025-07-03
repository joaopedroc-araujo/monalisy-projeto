"use client";

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle, Navigation, Calendar } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function Contato() {
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

  const socialLinks = [
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      handle: "@clinicamonalisy",
      url: "#",
      color: "bg-pink-50 text-pink-600 hover:bg-pink-100"
    },
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      handle: "Clínica Monalisy Rodrigues",
      url: "#",
      color: "bg-blue-50 text-blue-600 hover:bg-blue-100"
    }
  ];

  const businessHours = [
    { day: "Segunda a Sexta", hours: "8h às 20h" },
    { day: "Sábado", hours: "Fechado" },
    { day: "Domingo", hours: "Fechado" }
  ];

  return (
    <div className="pt-8 lg:pt-12 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Hero Section */}
      <section className="py-8 lg:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gray-900 text-white rounded-2xl mb-8">
              <MessageCircle className="w-10 h-10" />
            </div>
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-gray-900 mb-6">
              Entre em Contato
            </h1>
            <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed mb-8">
              Estamos prontos para atendê-lo e esclarecer suas dúvidas.
              Escolha a forma mais conveniente para entrar em contato conosco.
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <a
                href="tel:+5531999999999"
                className="inline-flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <Phone className="w-5 h-5 mr-3" />
                Ligar Agora
              </a>
              <a
                href="https://wa.me/5531999999999"
                className="inline-flex items-center justify-center px-8 py-4 bg-green-600 text-white font-semibold rounded-xl hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FaWhatsapp className="w-5 h-5 mr-3" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Grid */}
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

      {/* Location & Hours Section */}
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

      {/* Social Media Section */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
              Siga-nos nas Redes Sociais
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Acompanhe nossas novidades, dicas de beleza e resultados incríveis dos nossos tratamentos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center space-x-6 p-8 rounded-3xl transition-all duration-300 hover:scale-105 hover:shadow-xl shadow-lg ${social.color} border border-gray-200`}
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:shadow-md transition-shadow duration-300">
                  {social.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">
                    {social.name}
                  </h3>
                  <p className="text-gray-600">
                    {social.handle}
                  </p>
                </div>
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
                    <Navigation className="w-4 h-4 text-gray-600" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
    </div>
  );
}
