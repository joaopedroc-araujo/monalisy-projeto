'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Clock, Star, Users, Award, Shield } from 'lucide-react';
import Image from 'next/image';

export default function Tratamentos() {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const treatments = [
    {
      id: 'harmonizacao-facial',
      title: 'Harmonização Facial',
      category: 'facial',
      description: 'Procedimento que visa equilibrar e realçar os traços faciais de forma natural e harmoniosa, utilizando técnicas avançadas de preenchimento e contorno.',
      duration: '60-90 min',
      price: 'A partir de R$ 800',
      image: 'https://images.pexels.com/photos/3985333/pexels-photo-3985333.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/tratamentos/harmonizacao-facial'
    },
    {
      id: 'toxina-botulinica',
      title: 'Toxina Botulínica',
      category: 'facial',
      description: 'Tratamento para suavizar rugas de expressão e prevenir o envelhecimento, proporcionando uma aparência mais jovem e descansada.',
      duration: '30-45 min',
      price: 'A partir de R$ 600',
      image: 'https://images.pexels.com/photos/3985334/pexels-photo-3985334.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/tratamentos/toxina-botulinica'
    },
    {
      id: 'preenchimento-acido-hialuronico',
      title: 'Preenchimento com Ácido Hialurônico',
      category: 'facial',
      description: 'Restaura volume e hidratação, suavizando rugas e sulcos faciais para um aspecto mais jovem e natural.',
      duration: '45-60 min',
      price: 'A partir de R$ 700',
      image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/tratamentos/preenchimento-acido-hialuronico'
    },
    {
      id: 'microagulhamento-facial',
      title: 'Microagulhamento Facial',
      category: 'facial',
      description: 'Estimula a regeneração natural da pele melhorando cicatrizes, poros dilatados e textura geral da pele.',
      duration: '60-75 min',
      price: 'A partir de R$ 350',
      image: 'https://images.pexels.com/photos/3985336/pexels-photo-3985336.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/tratamentos/microagulhamento-facial'
    },
    {
      id: 'criolipolise',
      title: 'Criolipólise',
      category: 'corporal',
      description: 'Eliminação de gordura localizada através do congelamento controlado das células adiposas, sem cirurgia.',
      duration: '60-90 min',
      price: 'A partir de R$ 400',
      image: 'https://images.pexels.com/photos/3736413/pexels-photo-3736413.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/tratamentos/criolipolise'
    },
    {
      id: 'radiofrequencia-corporal',
      title: 'Radiofrequência Corporal',
      category: 'corporal',
      description: 'Tratamento para firmeza e tonificação da pele, reduzindo flacidez corporal através do aquecimento controlado.',
      duration: '45-60 min',
      price: 'A partir de R$ 300',
      image: 'https://images.pexels.com/photos/3985335/pexels-photo-3985335.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/tratamentos/radiofrequencia-corporal'
    },
    {
      id: 'drenagem-linfatica',
      title: 'Drenagem Linfática',
      category: 'corporal',
      description: 'Técnica que estimula o sistema linfático, reduzindo inchaço, melhorando a circulação e promovendo relaxamento.',
      duration: '60-75 min',
      price: 'A partir de R$ 200',
      image: 'https://images.pexels.com/photos/3985337/pexels-photo-3985337.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/tratamentos/drenagem-linfatica'
    },
    {
      id: 'mesoterapia-capilar',
      title: 'Mesoterapia Capilar',
      category: 'capilar',
      description: 'Aplicação de ativos revitalizantes diretamente no couro cabeludo para estimular o crescimento e fortalecer os fios.',
      duration: '45-60 min',
      price: 'A partir de R$ 250',
      image: 'https://images.pexels.com/photos/3993096/pexels-photo-3993096.jpeg?auto=compress&cs=tinysrgb&w=800',
      href: '/tratamentos/mesoterapia-capilar'
    }
  ];

  const categories = [
    { id: 'todos', name: 'Todos os Tratamentos', icon: <Star className="w-5 h-5" /> },
    { id: 'facial', name: 'Tratamentos Faciais', icon: <Users className="w-5 h-5" /> },
    { id: 'corporal', name: 'Tratamentos Corporais', icon: <Shield className="w-5 h-5" /> },
    { id: 'capilar', name: 'Tratamentos Capilares', icon: <Award className="w-5 h-5" /> }
  ];

  const filteredTreatments = selectedCategory === 'todos'
    ? treatments
    : treatments.filter(treatment => treatment.category === selectedCategory);

  return (
    <div className="pt-8 lg:pt-12">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-gray-900 mb-6">
              Nossos Tratamentos
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Descubra nossa ampla gama de tratamentos estéticos para face, corpo e cabelo.
              Cada procedimento é personalizado para realçar sua beleza natural com segurança e eficácia.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Star className="w-4 h-4" />
                <span>Resultados comprovados</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Procedimentos seguros</span>
              </div>
              <div className="flex items-center space-x-2">
                <Award className="w-4 h-4" />
                <span>Tecnologia avançada</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`
                  flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300
                  ${selectedCategory === category.id
                ? 'bg-gray-900 text-white shadow-lg'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-800'
              }
                `}
              >
                {category.icon}
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Treatments Grid - "Folhetos" */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTreatments.map((treatment) => (
              <Link
                key={treatment.id}
                href={treatment.href}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                {/* Treatment Image */}
                <div className="aspect-video overflow-hidden bg-gray-100">
                  <Image
                    src={treatment.image}
                    alt={treatment.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized={true}
                  />
                </div>

                {/* Treatment Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-gray-700 transition-colors">
                        {treatment.title}
                      </h3>
                      <div className="flex items-center text-sm text-gray-500 space-x-4">
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {treatment.duration}
                        </div>
                        <div className="font-medium text-gray-700">
                          {treatment.price}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {treatment.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-900 font-medium group-hover:translate-x-2 transition-transform duration-200">
                      Ver folheto completo
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </div>
                    <div className={`
                      px-3 py-1 rounded-full text-xs font-medium
                      ${treatment.category === 'facial' ? 'bg-blue-100 text-blue-800' :
                treatment.category === 'corporal' ? 'bg-green-100 text-green-800' :
                  'bg-purple-100 text-purple-800'}
                    `}>
                      {treatment.category === 'facial' ? 'Facial' :
                        treatment.category === 'corporal' ? 'Corporal' : 'Capilar'}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-playfair font-bold">
              Pronto para transformar sua beleza?
            </h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Agende uma consulta personalizada e descubra qual tratamento é ideal
              para alcançar seus objetivos estéticos com segurança e eficácia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contato"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                Agendar Consulta
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
