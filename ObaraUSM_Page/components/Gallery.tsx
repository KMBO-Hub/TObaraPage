
import React from 'react';

const galleryImages = [
  'https://picsum.photos/seed/gate/500/500',
  'https://picsum.photos/seed/stairs/500/500',
  'https://picsum.photos/seed/railing/500/500',
  'https://picsum.photos/seed/fence/500/500',
  'https://picsum.photos/seed/table/500/500',
  'https://picsum.photos/seed/sculpture/500/500',
];

const GalleryItem: React.FC<{ src: string }> = ({ src }) => (
    <div className="relative overflow-hidden rounded-lg group">
        <img src={src} alt="Realizacja" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition-colors duration-300"></div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <p className="text-white text-lg font-bold">Zobacz Projekt</p>
        </div>
    </div>
);

const Gallery: React.FC = () => {
  return (
    <section id="galeria" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-black text-white uppercase tracking-wider mb-4">
          Galeria <span className="text-[#f45c01ff]">Realizacji</span>
        </h2>
        <div className="w-20 h-1 bg-[#f45c01ff] mx-auto mb-12"></div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((src, index) => (
            <GalleryItem key={index} src={src} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
