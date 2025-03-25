import React from 'react';
import { FaTwitter, FaDiscord, FaInstagram, FaGithub } from 'react-icons/fa';

export default function Footer() {
  const socialIcons = [
    { component: <FaTwitter />, link: "#" },
    { component: <FaDiscord />, link: "#" },
    { component: <FaInstagram />, link: "#" },
    { component: <FaGithub />, link: "#" },
  ];

  const links = ['Privacy Policy', 'Terms', 'Contact'];

  return (
    <footer className="py-8" style={{ backgroundColor: '#121212', borderTop: '1px solid #1E1E1E' }}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-1" style={{ color: '#32CD32' }}>Forest Pulse</h2>
            <p style={{ color: '#B0B0B0' }}>Growing a greener future, one tree at a time</p>
          </div>
          <div className="flex space-x-4 mb-4 md:mb-0">
            {socialIcons.map((icon, index) => (
              <a key={index} href={icon.link} className="hover:scale-110 transition-transform text-2xl" style={{ color: '#B0B0B0' }}>
                {icon.component}
              </a>
            ))}
          </div>
          <div className="w-full md:w-auto">
            <div className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="rounded-lg px-3 py-2 focus:outline-none"
                style={{
                  backgroundColor: '#1E1E1E',
                  border: '1px solid #B0B0B0',
                  color: '#EDEDED',
                }}
              />
              <button
                className="font-bold py-2 px-4 rounded-lg transition-colors"
                style={{
                  backgroundColor: '#32CD32',
                  color: '#121212',
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="pt-6 mt-6 flex flex-col md:flex-row justify-between items-center border-t border-t-[#1E1E1E]">
          <div className="text-sm mb-2 md:mb-0" style={{ color: '#B0B0B0' }}>
            © {new Date().getFullYear()} Forest Pulse
          </div>
          <div className="flex space-x-4">
            {links.map((link, index) => (
              <a key={index} href="#" className="text-sm hover:underline" style={{ color: '#B0B0B0' }}>
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
