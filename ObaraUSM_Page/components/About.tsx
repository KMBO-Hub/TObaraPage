
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="o-mnie" className="py-20 bg-gray-800/40">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://picsum.photos/seed/welder-portrait/600/700" 
              alt="Portret spawacza" 
              className="rounded-lg shadow-2xl w-full object-cover"
            />
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-4xl font-black text-white uppercase tracking-wider mb-4">
              Z Pasją do <span className="text-[#f45c01ff]">Metalu</span>
            </h2>
            <div className="w-20 h-1 bg-[#f45c01ff] mx-auto md:mx-0 mb-8"></div>
            <p className="text-gray-300 mb-4 text-lg">
              Od ponad 5 lat zajmuję się obróbką metali. Moja praca to nie tylko zawód, ale przede wszystkim pasja tworzenia trwałych i funkcjonalnych przedmiotów ze stali. 
            </p>
            <p className="text-gray-300 mb-6">
              Do każdego zlecenia podchodzę indywidualnie, łącząc tradycyjne techniki rzemieślnicze z nowoczesnymi technologiami. Dbam o najwyższą jakość wykonania, precyzję i terminowość. Zaufaj mojemu doświadczeniu i pozwól, abym zrealizował Twój projekt.
            </p>
            <a 
              href="#galeria" 
              className="border-2 border-[#f45c01ff] text-[#f45c01ff] hover:bg-[#f45c01ff] hover:text-gray-900 font-bold py-3 px-8 rounded-lg uppercase transition-all duration-300"
            >
              Zobacz Moje Realizacje
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
