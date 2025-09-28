
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-6">
      <div className="container mx-auto px-6 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} ObaraUSM. Wszelkie prawa zastrzeżone.</p>
        <p className="text-sm">Profesjonalne Usługi Ślusarskie oraz Mechaniczne</p>
      </div>
    </footer>
  );
};

export default Footer;
