
import React from 'react';

const SparkIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
);

const CutIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.121 14.121L19 19M4.879 4.879L9.757 9.757M14.121 9.757L9.757 14.121M4.879 19L9.757 14.121" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3a9 9 0 100 18 9 9 0 000-18z" />
    </svg>
);

const StructureIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 4v16M12 4v16M18 4v16" />
    </svg>
);


interface Service {
    icon: React.ElementType;
    title: string;
    description: string;
}

const servicesData: Service[] = [
    {
        icon: SparkIcon,
        title: 'Spawanie MIG/MAG i TIG',
        description: 'Precyzyjne spawanie stali czarnej, nierdzewnej i aluminium. Gwarancja trwałych i estetycznych spoin.'
    },
    {
        icon: CutIcon,
        title: 'Cięcie i Gięcie Metali',
        description: 'Profesjonalne usługi cięcia plazmowego, tlenowego oraz gięcia blach na prasie krawędziowej.'
    },
    {
        icon: StructureIcon,
        title: 'Konstrukcje Stalowe',
        description: 'Projektowanie i wykonawstwo balustrad, bram, ogrodzeń, schodów oraz innych konstrukcji na wymiar.'
    }
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
    const Icon = service.icon;
    return (
        <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 text-center hover:border-[#f45c01ff] hover:bg-gray-800 transition-all duration-300 transform hover:-translate-y-2">
            <div className="flex justify-center mb-6">
                <div className="bg-gray-700 p-4 rounded-full">
                    <Icon className="w-10 h-10 text-[#f45c01ff]" />
                </div>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
            <p className="text-gray-400">{service.description}</p>
        </div>
    );
}

const Services: React.FC = () => {
    return (
        <section id="uslugi" className="py-20 bg-gray-900">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-4xl font-black text-white uppercase tracking-wider mb-4">Zakres <span className="text-[#f45c01ff]">Usług</span></h2>
                <div className="w-20 h-1 bg-[#f45c01ff] mx-auto mb-12"></div>
                <div className="grid md:grid-cols-3 gap-8">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
