"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const skills = [
  { name: "Python", category: "Languages" },
  { name: "R", category: "Languages" },
  { name: "SQL", category: "Database" },
  { name: "Machine Learning Frameworks", category: "AI & ML" },
  { name: "Scikit-Learn", category: "AI & ML" },
  { name: "TensorFlow / PyTorch", category: "AI & ML" },
  { name: "Data Visualization Tools", category: "Visualization" },
  { name: "Tableau / Power BI", category: "Visualization" },
  { name: "D3.js", category: "Visualization" },
  { name: "Statistical Modeling", category: "Core" },
  { name: "Big Data Technologies", category: "Infrastructure" },
  { name: "Predictive Analytics", category: "Core" }
];

export default function Skills() {
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 90%",
        },
        y: 20,
        opacity: 0,
        duration: 0.6,
      });

      gsap.from(".skill-chip", {
        scrollTrigger: {
          trigger: gridRef.current,
          start: "top 85%",
        },
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out"
      });
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-24 px-8 max-w-7xl mx-auto min-h-screen">
      <div ref={titleRef} className="mb-24 text-left border-l-4 border-blue-500 pl-10">
        <h2 className="text-blue-500 font-mono tracking-[0.5em] uppercase mb-6 text-sm font-bold">Core Competencies</h2>
        <h3 className="text-6xl md:text-9xl font-black bg-gradient-to-b from-white to-gray-700 bg-clip-text text-transparent uppercase tracking-tighter">
          The Stack
        </h3>
      </div>

      <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-chip relative group cursor-default"
          >
            <div className="flex flex-col gap-4 border-l-2 border-white/5 group-hover:border-blue-500 transition-all pl-6">
              <span className="text-xs font-mono text-gray-600 group-hover:text-blue-400/60 transition-colors uppercase tracking-[0.3em] font-bold">
                {skill.category}
              </span>
              <span className="text-3xl md:text-4xl font-bold text-gray-400 group-hover:text-white transition-all uppercase tracking-tight">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

