'use client'
import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Facebook, Clock } from 'lucide-react';
import { usePathname } from 'next/navigation';

const Footer = () => {
  const pathname = usePathname();
  
  return (
    <footer className="bg-gray-900 text-white">
      {/* Mapa Section */}
      {!pathname.startsWith('/contato') &&
        (<section className="bg-gray-800 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-white mb-4">
              Nossa Localização
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Estamos localizados em área de fácil acesso, com estacionamento disponível para sua comodidade.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Mapa */}
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
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
            
            
            {/* Informações de Localização */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-white mb-6">
                  Como Chegar
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Endereço</h4>
                      <p className="text-gray-300 leading-relaxed">
                        R. Felipe dos Santos, 674 - Sala 901<br />
                        Centro, Betim - MG<br />
                        CEP: 32600-214
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-gray-300" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Horário de Funcionamento</h4>
                      <div className="text-gray-300 space-y-1">
                        <p>Segunda a Sexta: 8h às 18h</p>
                        <p>Sábado: 8h às 14h</p>
                        <p>Domingo: Fechado</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="pt-6 border-t border-gray-700">
                <p className="text-gray-400 text-sm leading-relaxed">
                  Estacionamento gratuito disponível no local. 
                  Fácil acesso por transporte público e principais vias da cidade.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    )}

      {/* Footer Principal */}
      <div className="bg-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Logo e Descrição - Ocupa mais espaço */}
            <div className="lg:col-span-5">
              <h3 className="text-3xl font-playfair font-bold mb-6 text-white">
                Clínica Monalisy Rodrigues
              </h3>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Especializada em medicina estética com tratamentos inovadores para face, corpo e cabelo. 
                Combinamos tecnologia avançada com cuidado personalizado para realçar sua beleza natural 
                com segurança e resultados duradouros.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 text-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all duration-300"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 bg-gray-800 text-gray-300 rounded-lg flex items-center justify-center hover:bg-gray-700 hover:text-white transition-all duration-300"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Links Rápidos */}
            <div className="lg:col-span-3">
              <h4 className="text-xl font-semibold mb-6 text-white">Navegação</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-colors duration-200"></span>
                    Início
                  </Link>
                </li>
                <li>
                  <Link href="/sobre" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-colors duration-200"></span>
                    Sobre a Clínica
                  </Link>
                </li>
                <li>
                  <Link href="/tratamentos" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-colors duration-200"></span>
                    Tratamentos
                  </Link>
                </li>
                <li>
                  <Link href="/contato" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                    <span className="w-2 h-2 bg-gray-600 rounded-full mr-3 group-hover:bg-white transition-colors duration-200"></span>
                    Contato
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contato */}
            <div className="lg:col-span-4">
              <h4 className="text-xl font-semibold mb-6 text-white">Contato</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">Telefones</p>
                    <p className="text-gray-400 text-sm">(11) 99999-9999</p>
                    <p className="text-gray-400 text-sm">(11) 3333-3333</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <p className="text-gray-300 font-medium">E-mails</p>
                    <p className="text-gray-400 text-sm">contato@clinicamonalisy.com.br</p>
                    <p className="text-gray-400 text-sm">agendamento@clinicamonalisy.com.br</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-800 rounded-lg">
                <p className="text-gray-300 text-sm font-medium mb-2">Agende sua consulta</p>
                <p className="text-gray-400 text-xs leading-relaxed">
                  Entre em contato conosco para agendar uma avaliação personalizada 
                  e descobrir o melhor tratamento para você.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-gray-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Clínica Monalisy Rodrigues. Todos os direitos reservados.
            </p>
            <div className="flex items-center space-x-6 text-xs text-gray-500">
              <span>Desenvolvido com tecnologia Next.js</span>
              <span>•</span>
              <span>Design responsivo</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;