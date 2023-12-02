// SplashScreen.jsx
import React, { useState, useEffect } from "react";
import { PropagateLoader } from "react-spinners";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black ${isVisible ? "z-50" : "hidden"}`}>
      <div className="sweet-loading">
        <PropagateLoader color="#F7FAF9" />
      </div>
    </div>
  );
};

export default SplashScreen;
