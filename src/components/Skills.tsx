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
        scale: 0.8,
        opacity: 0,
        duration: 0.5,
        stagger: {
          amount: 1,
          grid: "auto",
        },
        ease: "back.out(1.7)"
      });
    }, titleRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="py-32 px-4 max-w-6xl mx-auto">
      <div ref={titleRef} className="mb-16">
        <h2 className="text-3xl font-mono text-blue-400 tracking-wider mb-2">/ Expertise</h2>
        <h3 className="text-4xl md:text-5xl font-bold">Skills & Technologies</h3>
      </div>

      <div ref={gridRef} className="flex flex-wrap gap-4">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="skill-chip glass px-6 py-4 rounded-2xl border border-white/5 hover:border-blue-500/30 hover:bg-blue-500/5 transition-all duration-300 group cursor-default"
          >
            <div className="flex flex-col gap-1">
              <span className="text-xs font-mono text-gray-500 group-hover:text-blue-400/80 transition-colors uppercase tracking-widest leading-none mb-1">
                {skill.category}
              </span>
              <span className="text-xl font-medium text-gray-200 group-hover:text-white transition-colors">
                {skill.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
