import React from 'react';

const MailIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const Contact: React.FC = () => {
  return (
    <section id="kontakt" className="py-20 bg-gray-800/40">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h2 className="text-4xl font-black text-white uppercase tracking-wider mb-4">
            Skontaktuj <span className="text-[#f45c01ff]">się</span>
          </h2>
          <div className="w-20 h-1 bg-[#f45c01ff] mx-auto mb-12"></div>
        </div>

        <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
                <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-12">
                    <a href="tel:+48123456789" className="flex items-center gap-3 text-2xl font-semibold text-gray-200 hover:text-[#f45c01ff] transition-colors duration-300">
                        <PhoneIcon className="w-8 h-8 text-[#f45c01ff]" />
                        <span>+48 123 456 789</span>
                    </a>
                    <a href="mailto:kontakt@ObaraUSM.pl" className="flex items-center gap-3 text-2xl font-semibold text-gray-200 hover:text-[#f45c01ff] transition-colors duration-300">
                        <MailIcon className="w-8 h-8 text-[#f45c01ff]" />
                        <span>kontakt@ObaraUSM.pl</span>
                    </a>
                </div>
            </div>

            <div className="text-center mb-10">
                <h3 className="text-3xl font-bold text-white">Lub Wypełnij Formularz Wyceny</h3>
                <p className="text-gray-300 mt-2">Opisz swój projekt, a ja skontaktuję się z Tobą jak najszybciej.</p>
            </div>

            <div className="bg-gray-900 p-8 md:p-10 rounded-lg shadow-2xl border border-gray-700">
                <form className="space-y-6">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">Twoje Imię</label>
                        <input id="name" type="text" placeholder="Jan Kowalski" required className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"/>
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">Twój Email</label>
                        <input id="email" type="email" placeholder="email@example.com" required className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"/>
                    </div>
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">Numer telefonu (opcjonalnie)</label>
                        <input id="phone" type="tel" placeholder="+48 123 456 789" className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"/>
                    </div>
                    <div>
                         <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">Jak mogę Ci pomóc?</label>
                        <textarea id="message" placeholder="Opisz swój projekt – np. rodzaj konstrukcji (brama, balustrada), orientacyjne wymiary, preferowane materiały..." required rows={5} className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-amber-500"></textarea>
                    </div>
                    <button type="submit" className="w-full bg-[#f45c01ff] text-gray-900 hover:bg-amber-400 font-bold py-3 px-8 rounded-lg uppercase transition-transform transform hover:scale-105 duration-300">
                        Wyślij Zapytanie o Wycenę
                    </button>
                </form>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;