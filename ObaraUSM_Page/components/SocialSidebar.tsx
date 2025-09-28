import React from 'react';

const FacebookIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919C8.416 2.175 8.796 2.163 12 2.163zm0 1.802c-3.116 0-3.472.012-4.69.068-2.61.12-3.842 1.35-3.962 3.962-.056 1.218-.067 1.574-.067 4.69s.011 3.472.067 4.69c.12 2.611 1.352 3.842 3.962 3.962 1.218.056 1.574.067 4.69.067s3.472-.011 4.69-.067c2.61-.12 3.842-1.352 3.962-3.962.056-1.218.067-1.574.067-4.69s-.011-3.472-.067-4.69c-.12-2.611-1.352-3.842-3.962-3.962C15.472 3.977 15.116 3.965 12 3.965zM12 8.25a3.75 3.75 0 100 7.5 3.75 3.75 0 000-7.5zm0 1.8a1.95 1.95 0 110 3.9 1.95 1.95 0 010-3.9zM16.95 6.412a1.238 1.238 0 100 2.475 1.238 1.238 0 000-2.475z" />
    </svg>
);

const LinkedInIcon: React.FC<{ className?: string }> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

const socialLinks = [
  { href: 'https://facebook.com', icon: FacebookIcon, label: 'Facebook' },
  { href: 'https://instagram.com', icon: InstagramIcon, label: 'Instagram' },
  { href: 'https://linkedin.com', icon: LinkedInIcon, label: 'LinkedIn' },
];

const SocialSidebar: React.FC = () => {
  return (
    <aside className="fixed top-1/2 left-0 transform -translate-y-1/2 z-40 hidden md:block" aria-label="Social media links">
      <div className="bg-gray-800/60 backdrop-blur-sm p-3 rounded-r-lg shadow-lg border-y border-r border-gray-700">
        <ul className="flex flex-col space-y-5">
          {socialLinks.map((link) => (
            <li key={link.label}>
              <a 
                href={link.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label={link.label}
                className="text-gray-400 hover:text-[#f45c01ff] transition-all duration-300 transform hover:scale-110 block"
              >
                <link.icon className="w-7 h-7" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SocialSidebar;
