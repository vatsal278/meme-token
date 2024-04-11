// SocialMediaButtons.js
import React, { useState } from 'react';

const SocialMediaButtons = () => {
  const [showImage, setShowImage] = useState(false);

  const handleShowImage = () => {
    setShowImage(true);
  };

  return (
    <div className="flex flex-col items-center mt-8 relative">
      <button onClick={handleShowImage} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Tickled by Balls
      </button>
      {showImage && (
        <div className="mt-4 w-100 h-100 relative">
          <img src="/Asset 1.png" alt="Ball Image" className="w-full h-full object-cover" /> {/* Update with your image file name */}
          <div className="absolute inset-0 flex justify-center items-center">
            <a href="https://t.me/your_telegram_link" target="_blank" rel="noopener noreferrer" className="mx-2">
              <button className=" text-white font-bold py-2 px-4 rounded">Telegram</button>
            </a>
            <a href="https://twitter.com/your_twitter_link" target="_blank" rel="noopener noreferrer" className="mx-2">
              <button className=" text-white font-bold py-2 px-4 rounded">Twitter</button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SocialMediaButtons;
