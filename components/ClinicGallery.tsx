'use client';

import ResponsiveImageGallery from './ResponsiveImageGallery';

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
      src: 'https://yurieycpflogldnppkki.supabase.co/storage/v1/object/sign/fotos-site/LSF%20(24).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lOTA2NThlNy0xY2QyLTRjYWMtYjQzZC1iNTZiMWU5ZmRlNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy1zaXRlL0xTRiAoMjQpLmpwZyIsImlhdCI6MTc1MDUyMDQ4MiwiZXhwIjo0OTA0MTIwNDgyfQ.Hve2_hfjFKYRxKqlPsF_UEuPSLCZ5LFxmjhzJfjdu_o',
      alt: 'Recepção da Clínica Monalisy Rodrigues',
      caption: 'Ambiente acolhedor e moderno da nossa recepção'
    },
    {
      id: 2,
      src: 'https://yurieycpflogldnppkki.supabase.co/storage/v1/object/sign/fotos-site/LSF%20(38).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lOTA2NThlNy0xY2QyLTRjYWMtYjQzZC1iNTZiMWU5ZmRlNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy1zaXRlL0xTRiAoMzgpLmpwZyIsImlhdCI6MTc1MDYwMzM4MiwiZXhwIjo0OTA0MjAzMzgyfQ.rwzwKaHHMKM2vaFyi_ag84jymmWGiu03N0RF-Qzzzqw',
      alt: 'Sala de procedimentos',
      caption: 'Preparação e atenção em cada detalhe'
    },
    {
      id: 3,
      src: 'https://yurieycpflogldnppkki.supabase.co/storage/v1/object/sign/fotos-site/LSF%20(32).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lOTA2NThlNy0xY2QyLTRjYWMtYjQzZC1iNTZiMWU5ZmRlNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy1zaXRlL0xTRiAoMzIpLmpwZyIsImlhdCI6MTc1MDUyMDYwNCwiZXhwIjo0OTA0MTIwNjA0fQ.fDPtrhu3DYKBRQKLGa-Ee5KO5KVPPvNQ0RIp6DGjfvo',
      alt: 'Equipamentos modernos',
      caption: 'Equipamentos de última geração para tratamentos seguros'
    },
    {
      id: 4,
      src: 'https://yurieycpflogldnppkki.supabase.co/storage/v1/object/sign/fotos-site/LSF%20(29).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lOTA2NThlNy0xY2QyLTRjYWMtYjQzZC1iNTZiMWU5ZmRlNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy1zaXRlL0xTRiAoMjkpLmpwZyIsImlhdCI6MTc1MDUyMDcxOCwiZXhwIjo0OTA0MTIwNzE4fQ.dJ8CRoGbF8sKry2XVg_Do0uRkfJgGZtC6Efg8CS2tcc',
      alt: 'Consultório médico',
      caption: 'Consultórios confortáveis para avaliações personalizadas'
    },
    {
      id: 5,
      src: 'https://yurieycpflogldnppkki.supabase.co/storage/v1/object/sign/fotos-site/LSF%20(20).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lOTA2NThlNy0xY2QyLTRjYWMtYjQzZC1iNTZiMWU5ZmRlNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy1zaXRlL0xTRiAoMjApLmpwZyIsImlhdCI6MTc1MDUyMTE4NiwiZXhwIjo0OTA0MTIxMTg2fQ.41qtc55sz5nyG0h4uAcLUXBBEz7ZyHMUJgZQiJUL3KM',
      alt: 'Área de relaxamento',
      caption: 'Espaços pensados para seu conforto e bem-estar'
    },
    {
      id: 6,
      src: 'https://yurieycpflogldnppkki.supabase.co/storage/v1/object/sign/fotos-site/LSF%20(14).jpg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9lOTA2NThlNy0xY2QyLTRjYWMtYjQzZC1iNTZiMWU5ZmRlNzYiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJmb3Rvcy1zaXRlL0xTRiAoMTQpLmpwZyIsImlhdCI6MTc1MDUyMDI3NiwiZXhwIjoyMDY1ODgwMjc2fQ.VY-tsQXM9SrwkQFnHgRAMiqNEwXeWX2avVQOEvUVnAI',
      alt: 'Equipe especializada',
      caption: 'Profissionais qualificados e em constante atualização'
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
