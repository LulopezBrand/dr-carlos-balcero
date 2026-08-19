import React, { useState, useEffect } from 'react';
import './Preloader.css';

export const Preloader: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isUnmounted, setIsUnmounted] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setIsLoaded(true);
    }, 2200);

    const timer2 = setTimeout(() => {
      setIsUnmounted(true);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  if (isUnmounted) return null;

  return (
    <div className={`preloader-wrapper ${isLoaded ? 'preloader-exit' : ''}`}>
      <div className="preloader-logo-container">
        <div className="preloader-logo-base"></div>
        <div className="preloader-logo-fill"></div>
      </div>
      <div className="preloader-progress-bar"></div>
    </div>
  );
};
