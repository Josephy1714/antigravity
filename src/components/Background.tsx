"use client";

import React, { useEffect, useRef } from "react";

export default function SmokeBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const lineCount = 150;
    const lines: Line[] = [];

    class Line {
      points: { x: number; y: number }[];
      speed: number;
      angle: number;
      color: string;
      thickness: number;
      opacity: number;

      constructor() {
        this.reset();
        // Distribute points initially
        this.points = [{ x: Math.random() * width, y: Math.random() * height }];
      }

      reset() {
        this.points = [{ x: Math.random() * width, y: Math.random() * height }];
        this.speed = Math.random() * 1.5 + 0.5;
        this.angle = Math.random() * Math.PI * 2;
        this.thickness = Math.random() * 1.2 + 0.3;
        this.opacity = Math.random() * 0.4 + 0.2;
        this.color = `rgba(59, 130, 246, ${this.opacity})`; // Bright blue
      }

      update() {
        const lastPoint = this.points[0];
        
        // Add some "hair-like" randomness to the direction
        this.angle += (Math.random() - 0.5) * 0.15;
        
        const nextX = lastPoint.x + Math.cos(this.angle) * this.speed;
        const nextY = lastPoint.y + Math.sin(this.angle) * this.speed;

        this.points.unshift({ x: nextX, y: nextY });

        // Maintain a "hair" length
        if (this.points.length > 60) {
          this.points.pop();
        }

        // Screen wrapping with reset to avoid jagged jumps
        if (nextX > width + 50 || nextX < -50 || nextY > height + 50 || nextY < -50) {
          this.reset();
        }
      }

      draw() {
        if (!ctx || this.points.length < 2) return;
        
        ctx.beginPath();
        ctx.moveTo(this.points[0].x, this.points[0].y);
        
        for (let i = 1; i < this.points.length; i++) {
          ctx.lineTo(this.points[i].x, this.points[i].y);
        }

        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.thickness;
        ctx.lineCap = "round";
        ctx.stroke();
      }
    }

    const init = () => {
      lines.length = 0;
      for (let i = 0; i < lineCount; i++) {
        lines.push(new Line());
      }
    };

    const animate = () => {
      // Pure black background - no transparency here to keep it "pure darkness"
      // But we use a slight clearRect or fillRect to allow some accumulation if desired
      // User said "pure darkness", so let's clear it every frame for maximum sharpness
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, width, height);

      lines.forEach((line) => {
        line.update();
        line.draw();
      });

      requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      init();
    };

    init();
    animate();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 bg-black"
      style={{ filter: "none" }} // Explicitly removing blur
    />
  );
}
