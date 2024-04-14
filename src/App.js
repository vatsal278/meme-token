// App.js
import React, { useState, useEffect } from 'react';
import VideoPlayer from './components/VideoPlayer';
import Logo from './components/Logo';

function App() {
  const [showLogo, setShowLogo] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLogo(true);
    }, 5000); // Change this value to the desired duration in milliseconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-black h-screen overflow-hidden text-comic-neue ">
      
      <VideoPlayer show={!showLogo} />
      <div className='mt-10'>

      <Logo show={showLogo} logoSrc="/nutflix.png" /> {/* Update with your actual logo filename */}
      </div>

      <style>
        {`
          @media (max-width: 768px) {
            .h-screen {
              display: flex;
              justify-content: center;
              align-items: center;
              flex-direction: column;
            }
          }
        `}
      </style>
    </div>
  );
}

export default App;
