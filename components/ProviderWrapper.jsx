"use client";
import { usePathname } from 'next/navigation';
import React, { createContext, useEffect, useRef, useState } from 'react'

export const ThemeContext = createContext();

export default function ProviderWrapper({ children }) {
  const [loading, setLoading] = useState(true);
  const [proms, setProms] = useState([]);
  const [revealTime, setRevealTime] = useState(500);
  const [heroHeight, setHeroHeight] = useState(950);
  const [minimumLoading, setMinimumLoading] = useState(1000);

  const providerRef = useRef();
  const revealRef = useRef();
  const bgHeroPinRef = useRef();
  const bgHeroImgRef = useRef();
  const pathname = usePathname();

  const openReveal = () => {
    const revealWrap = revealRef.current;
    setTimeout(() => revealWrap.classList.add("openLoader"), revealTime);
    setTimeout(() => revealWrap.classList.add("openReveal"), revealTime + 300);
    setTimeout(() => {
      revealWrap.classList.add("z-index");
      revealWrap.classList.remove("firstLoad");
    }, revealTime + 450);
    
  };

  const closeReveal = () => {
    const revealWrap = revealRef.current;
    revealWrap.classList.remove("openReveal");
    revealWrap.classList.remove("openLoader");
    revealWrap.classList.remove("z-index");
  };

  const promsDone = () => {
    Promise.all(proms).then(() => {
      setTimeout(() => setLoading(false), minimumLoading);
      if(proms.length > 0) setProms([]);
    });
  };

  const getImages = () => {
    const images = [...providerRef.current.querySelectorAll("img")];
    const onComplete = (resolve) => resolve();

    const proms = images.map( img => new Promise( resolve => {
      img.complete ? onComplete(resolve) : img.onload = () => onComplete(resolve);
    }));
    setProms(proms);
  }
  
  useEffect(() => promsDone(), [proms]);
  useEffect(() => {
    if(loading) closeReveal(); 
    else openReveal();


  }, [loading]);

  return (
    <ThemeContext.Provider value={{ loading, setLoading, getImages, revealRef, closeReveal, revealTime, bgHeroPinRef, heroHeight, bgHeroImgRef, providerRef, minimumLoading }}>
      <div ref={providerRef}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}
