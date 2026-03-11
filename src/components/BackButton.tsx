"use client";

import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function BackButton() {
  return (
    <Link 
      href="/"
      className="fixed top-8 left-8 z-50 group flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all backdrop-blur-md"
    >
      <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
      <span className="text-sm font-medium tracking-wide">Back to Home</span>
    </Link>
  );
}
