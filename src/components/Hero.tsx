"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const universityRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
      })
      .from(subtitleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
      }, "-=0.8")
      .from(universityRef.current, {
        y: 30,
        opacity: 0,
        duration: 0.8,
      }, "-=0.6")
      .to(".scroll-indicator", {
        opacity: 1,
        y: 0,
        duration: 0.5,
      });

      gsap.to(".scroll-indicator", {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.5,
        ease: "sine.inOut"
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto">
        <div 
          ref={subtitleRef}
          className="text-blue-400 font-mono tracking-widest uppercase mb-4 opacity-100"
        >
          Data Science Student
        </div>
        
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-400"
        >
          Joseph Ombati
        </h1>
        
        <div 
          ref={universityRef}
          className="flex items-center justify-center gap-2 text-xl md:text-2xl text-gray-400 font-light"
        >
          <span>University of Nairobi</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
          <span>Innovating through Data</span>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-10 left-1/2 -translate-x-1/2 opacity-0 flex flex-col items-center gap-2 cursor-pointer transition-colors hover:text-blue-400">
        <span className="text-xs uppercase tracking-[0.2em] font-medium text-gray-500">Explore Work</span>
        <ChevronDown size={24} className="text-gray-500" />
      </div>
    </section>
  );
}
