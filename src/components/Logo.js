// Logo.js
import React from 'react';
import SocialMediaButtons from './SocialMediaButtons'; // Import the SocialMediaButtons component

const Logo = ({ show, logoSrc }) => {
  return (
    <div className={`fixed inset-0 flex flex-col justify-center items-center bg-black transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <img src={logoSrc} alt="Logo" className="w-64 h-auto mb-8" /> {/* Update with your actual logo filename */}
      <SocialMediaButtons />
    </div>
  );
};

export default Logo;
