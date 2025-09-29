"use client";

import ResponsiveImageGallery from "./ResponsiveImageGallery";

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  caption: string;
}

const ClinicGallery = () => {
  const images: GalleryImage[] = [
    {
      id: 1,
      src: "/images/@lucasantosfotografo-17.jpg",
      alt: "Recepção da Clínica Monalisy Rodrigues",
      caption: "Ambiente acolhedor e moderno da nossa recepção"
    },
    {
      id: 2,
      src: "/images/@lucasantosfotografo-34.jpg",
      alt: "Sala de procedimentos",
      caption: "Preparação e atenção em cada detalhe"
    },
    {
      id: 3,
      src: "/images/LSF (32).webp",
      alt: "Equipamentos modernos",
      caption: "Equipamentos de última geração para tratamentos seguros"
    },
    {
      id: 4,
      src: "/images/LSF (29).webp",
      alt: "Consultório médico",
      caption: "Consultórios confortáveis para avaliações personalizadas"
    },
    {
      id: 5,
      src: "/images/@lucasantosfotografo-10.jpg",
      alt: "Área de relaxamento",
      caption: "Espaços pensados para seu conforto e bem-estar"
    },
    {
      id: 6,
      src: "/images/LSF (14).webp",
      alt: "Equipe especializada",
      caption: "Profissionais qualificados e em constante atualização"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-gray-900 mb-4">
            Conheça Nossa Clínica
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Um ambiente moderno e acolhedor, equipado com tecnologia de ponta
            para oferecer os melhores tratamentos estéticos com total segurança e conforto.
          </p>
        </div>

        {/* Gallery */}
        <ResponsiveImageGallery
          images={images}
          autoPlay={true}
          autoPlayInterval={4000}
          showThumbnails={true}
          showControls={true}
          showProgressIndicators={true}
          thumbnailSize={80}
          enableVirtualization={images.length > 20}
        />

        {/* Additional Info */}
        <div className="mt-12 sm:mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Ambiente Moderno</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Instalações projetadas para proporcionar conforto e tranquilidade durante os tratamentos.
            </p>
          </div>
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Tecnologia Avançada</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Equipamentos de última geração para garantir a eficácia e segurança dos procedimentos.
            </p>
          </div>
          <div className="text-center sm:col-span-2 lg:col-span-1">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center mb-4 mx-auto">
              <div className="w-7 h-7 sm:w-8 sm:h-8 bg-gray-600 rounded-full"></div>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Higiene Rigorosa</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Protocolos de limpeza e esterilização seguindo os mais altos padrões de segurança.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicGallery;
