"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="about"
      className="py-24 px-8 relative overflow-hidden"
    >
      <div 
        ref={contentRef}
        className="max-w-6xl mx-auto transition-all"
      >
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="flex-1 text-left">
            <h2 className="text-6xl md:text-8xl font-black mb-12 bg-gradient-to-r from-blue-400 via-white to-blue-500 bg-clip-text text-transparent uppercase tracking-tighter">
              Innovation Through Data
            </h2>
            <div className="space-y-10 text-gray-300 text-xl md:text-2xl leading-relaxed font-light max-w-4xl">
              <p>
                I am a focused **Data Science student at the University of Nairobi** with a deep passion for digital transformation and problem-solving. 
              </p>
              <p>
                My approach combines statistical rigor with creative thinking. I believe that data is not just numbers; it's a narrative waiting to be told. I am dedicated to mastering predictive modeling and AI-driven systems to create tangible impact.
              </p>
              <p>
                Innovation is my compass. Whether I'm building neural networks or crafting intricate data stories, my goal remains the same: to turn data into a force for good.
              </p>
            </div>
          </div>
          
          <div className="relative w-64 h-64 md:w-[450px] md:h-[450px] shrink-0">
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border border-blue-500/20 flex items-center justify-center overflow-hidden">
               <span className="text-[12rem] font-black text-blue-500/5 select-none">JO</span>
               <div className="absolute inset-x-0 bottom-16 text-center">
                 <div className="text-blue-400 font-mono text-sm tracking-[0.5em] font-bold uppercase">Data Architect</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
