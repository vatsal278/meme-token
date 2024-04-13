import React, { useState } from 'react';

const SocialMediaButtons = ({ handleTilt }) => {
  const [showImage, setShowImage] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);
  const [audioPlaying, setAudioPlaying] = useState(false);

  const handleShowImage = () => {
    setShowImage(true);
    handleTilt();
  };

  const handleShowParagraph = () => {
    setShowParagraph(true);
  };

  const handleAudioPlay = () => {
    setAudioPlaying(true);
  };

  const handleAudioPause = () => {
    setAudioPlaying(false);
  };

  return (
    <div className="flex flex-col items-center mt-8 relative">
      <button onClick={() => { handleShowImage(); handleShowParagraph(); handleAudioPlay(); }} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
        Tickled by Balls
      </button>
      {showImage && (
        <div className=" w-100 h-100 relative">
          <img src="/Asset 1.png" alt="Ball Image" className="w-full h-full object-cover" />
        </div>
      )}
      {showImage && (
        <div className="">
          <a href="https://t.me/your_telegram_link" target="_blank" rel="noopener noreferrer" className="mx-2">
            <button className="text-white text-lg font-bold py-2 px-4 rounded">Telegram</button>
          </a>
          <a href="https://twitter.com/your_twitter_link" target="_blank" rel="noopener noreferrer" className="mx-2">
            <button className="text-white text-lg font-bold py-2 px-4 rounded">Twitter</button>
          </a>
        </div>
      )}
      {showParagraph && (
        <div className="max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          
            <p className="text-white text-center text-sm font-bold">Forget boring old movies, Nutflix is all about Nutz - there's 8 billion of them! With every TUDUM (that awesome Nutflix sound), Nutz get more control, becoming GigaChadz!! Lost onchain in this Woke Culture!! Pepe the meme master, Brett the coding queen, and Andy the awesome gamer were lost. But guess what saved them? Their Nutz power! Pepe powered its community with Nutz, Brett's community rocked Nutflix, and Andy welcomed everyone. Together, they built a giant Nutz community with a special sound called TUDUM. This Nutz community became super famous! Nutflix realized Nutz were awesome and let them influence everything. The TUDUM sound became like a calling for Nutz, giving them a say in what happens. Pepe, Brett, and Andy became super legends - Harnessing TUDUM But it's not just about them. The TUDUM sound isn't just on screens, it's a feeling in all Nutz hearts. The world is finally waking up - lets unite with 8 billion Nutz, all powered by TUDUM!</p>
            <p className="text-white text-center text-lg font-bold mt-4">Untold Stories from the Book of Meme, presented by TUDUM, coming soon on Nutflix</p>
          </div>
        
      )}
      {/* Audio Player */}
      {audioPlaying && (
        <audio src="/audiofinal1.mp3" autoPlay onEnded={handleAudioPause} />
      )}
    </div>
  );
};

export default SocialMediaButtons;
