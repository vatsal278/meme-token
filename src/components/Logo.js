import React from 'react';
import SocialMediaButtons from './SocialMediaButtons'; // Import the SocialMediaButtons component

const Logo = ({ show, logoSrc }) => {
  const handleTilt = () => {
    // Logic to tilt the logo (e.g., set state or perform any action)
    console.log('Logo tilted!');
  };

  return (
    <div className={`fixed inset-0 flex flex-col justify-center items-center bg-black transition-opacity duration-1000 ${show ? 'opacity-100' : 'opacity-0'}`}>
      <img
        src={logoSrc}
        alt="Logo"
        className="w-64 h-auto mb-8 max-w-full max-h-full"
        onClick={handleTilt} // Call handleTilt when the logo is clicked
      />
      <SocialMediaButtons handleTilt={handleTilt} />
    </div>
  );
};

export default Logo;
