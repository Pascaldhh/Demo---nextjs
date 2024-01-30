"use client";

import { FaPlay } from "react-icons/fa";
import TextBox from "./TextBox";
import { useLayoutEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

export default function Video({ className, title, titleSize, subtitle, textPadding, subtitleSize, imgSrc, videoSrc, isFeatured }) {
  const videoOverlay =  useRef();
  const videoRef = useRef();
  const videoCaraselRef = useRef();

  useLayoutEffect(() => {
    const videoCarasel = videoCaraselRef.current;

    let ctx = gsap.context(() => {
      gsap.registerPlugin(ScrollTrigger);

      gsap.set(videoCarasel, { y: -100, autoAlpha: 0, force3D: true, rotation: 0.01 });
      gsap.to(videoCarasel, { scrollTrigger: { trigger: videoCarasel, start: "top bottom-=250", toggleActions: "play none none reverse" }, y: 0, duration: 1.25, autoAlpha: 1, ease: 'expo', overwrite: 'auto' });

    }, videoCaraselRef);

    return () => ctx.revert();
  }, [])

  const stopVideo = (video) => {
    video.pause();
    video.currentTime = 0;
  };

  const hideOverlay = (e) => {
    if(e.target.classList.contains("container") || e.target.classList.contains("overlay"))
    videoOverlay.current.classList.remove("active");
    stopVideo(videoRef.current);
  };

  return (
  <>
    <div 
      ref={videoCaraselRef}
      onClick={() => videoOverlay.current.classList.add("active")}
      className={"opacity-0 relative after:absolute after:inset-0 after:w-full after:h-full after:bg-black after:opacity-50 after:z-0 group cursor-pointer outline outline-4 outline-transparent hover:outline-enveus-primary transition-colors " + className}
    >
      <FaPlay size={20} className='absolute z-40 top-1/2 -translate-x-1/2 -translate-y-1/2 left-1/2 transition-colors group-hover:text-enveus-primary'/>
      {isFeatured && 
        <p className="absolute bg-enveus-primary text-sm md:text-base left-2 top-2 md:left-6 md:top-6 z-30 uppercase font-bold py-1 px-3">Featured video</p>
      }
      { (title || subtitle) &&
        <TextBox className="absolute w-full -bottom-1 left-0 z-30" bgOpacity="before:opacity-75" padding={textPadding ?? "px-4 py-2"}>
          {title && 
            <h4 className={"uppercase font-bold " + (titleSize ?? "text-2xl")}>{title}</h4>
          }
          {subtitle && 
            <h5 className={"text-enveus-primary font-bold uppercase " + (subtitleSize ?? "text-base")}>{subtitle}</h5>
          }
        </TextBox>
      }
      <div className="overflow-hidden aspect-video">
        <img onLoad={ScrollTrigger.refresh} className='w-full h-full object-cover group-hover:scale-110 transition-all' src={imgSrc} />
      </div>
    </div>
    <div 
      ref={videoOverlay}
      onClick={hideOverlay}
      className="overlay fixed z-[9999] hidden inset-0 w-full h-full bg-enveus-black bg-opacity-75 [&.active]:grid place-items-center"
    >
      <div className="container" onClick={hideOverlay}>
        <video ref={videoRef} className="aspect-video mx-auto" controls>
          <source src={videoSrc} type="video/mp4" />
        </video>
      </div>
    </div>
  </>
  )
}
