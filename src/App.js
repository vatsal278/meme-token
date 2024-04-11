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
    <div className="bg-black h-screen overflow-hidden">
      <VideoPlayer show={!showLogo} />
      <Logo show={showLogo} logoSrc="/nutflix.png" /> {/* Update with your actual logo filename */}
    </div>
  );
}

export default App;
