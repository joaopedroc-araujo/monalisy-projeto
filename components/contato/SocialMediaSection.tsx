import Link from "next/link";
import { Instagram, Facebook, Navigation } from "lucide-react";

export default function SocialMediaSection() {
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

  return (
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
  );
}