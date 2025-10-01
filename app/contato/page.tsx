"use client";

import dynamic from "next/dynamic";
import { Phone, MessageCircle } from "lucide-react";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

const ContactMethodsGrid = dynamic(() => import("@/components/contato/ContactMethodsGrid"));
const LocationAndHoursSection = dynamic(() => import("@/components/contato/LocationAndHoursSection"));
const SocialMediaSection = dynamic(() => import("@/components/contato/SocialMediaSection"));
const CTASection = dynamic(() => import("@/components/contato/CTASection"));

export default function Contato() {
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

      <ContactMethodsGrid />
      <LocationAndHoursSection />
      <SocialMediaSection />
      <CTASection />
    </div>
  );
}
