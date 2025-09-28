
import React from 'react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="h-screen bg-cover bg-center bg-fixed flex items-center justify-center relative"
      style={{ backgroundImage: "url('/img/Spaw.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="text-center z-10 text-white px-4">
        <h1 className="text-4xl md:text-6xl lg:text-6xl font-black uppercase tracking-wider leading-tight mb-4">
          Precyzja w Spawaniu, <br />
          <span className="text-[#f45c01ff]">Mistrzostwo w Metalu</span>
        </h1>
        <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-300 mb-8">
          Specjalizuję się w profesjonalnych usługach ślusarsko-mechaniczne, realizując projekty na zamówienie z najwyższą dbałością o detale i jakość.
        </p>
        <a 
          href="#kontakt" 
          className="bg-[#f45c01ff] text-gray-900 hover:bg-amber-400 font-bold py-3 px-8 rounded-lg uppercase transition-transform transform hover:scale-105 duration-300"
        >
          Bezpłatna Wycena
        </a>
      </div>
    </section>
  );
};

export default Hero;
