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
      className="py-32 px-4 relative overflow-hidden"
    >
      <div 
        ref={contentRef}
        className="max-w-4xl mx-auto glass p-8 md:p-12 rounded-3xl border border-white/10"
      >
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              About Me
            </h2>
            <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
              <p>
                I am a driven **Data Science student at the University of Nairobi** with a deep passion for innovation and problem-solving through data. 
              </p>
              <p>
                My journey in data science is fueled by the desire to uncover hidden patterns and translate complex datasets into actionable insights. I believe that data is the key to solving the world's most pressing challenges, and I am committed to mastering the tools and techniques required to make a meaningful impact.
              </p>
              <p>
                Whether it's building predictive models, designing AI-driven solutions, or creating immersive data visualizations, I am always seeking new ways to push the boundaries of what's possible.
              </p>
            </div>
          </div>
          
          <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0">
             {/* Decorative element since I don't have a real photo */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="relative w-full h-full rounded-full border-2 border-blue-500/30 flex items-center justify-center glass overflow-hidden shadow-2xl shadow-blue-500/10">
               <span className="text-8xl font-black text-blue-500/20 select-none">JO</span>
               {/* Overlay icon or minimalist design */}
               <div className="absolute inset-x-0 bottom-8 text-center">
                 <div className="text-blue-400 font-mono text-sm tracking-widest">INNOVATION</div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
