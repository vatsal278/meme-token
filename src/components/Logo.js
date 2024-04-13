import React from 'react';
import SocialMediaButtons from './SocialMediaButtons'; // Import the SocialMediaButtons component

const Logo = ({ show, logoSrc }) => {
  const handleTilt = () => {
    const logoElement = document.querySelector('.logo-img');
    if (logoElement) {
      logoElement.classList.add('transform', 'rotate-3', 'transition-transform'); // Add Tailwind classes for transformation and transition
    }
  };

  return (
    <div className={`fixed inset-0 flex flex-col justify-center items-center bg-black transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <img
        src={logoSrc}
        alt="Logo"
        className="w-64 h-auto mb-8 logo-img cursor-pointer" // Add cursor-pointer to indicate it's clickable
        onClick={handleTilt} // Call handleTilt when the logo is clicked
      />
      <SocialMediaButtons handleTilt={handleTilt} />
    </div>
  );
};

export default Logo;
