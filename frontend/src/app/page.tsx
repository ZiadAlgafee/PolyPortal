"use client";
import React from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-row bg-night">
      <Sidebar />
      <section className="flex-1 flex flex-col items-center justify-center py-24 relative">
        {/* Animated 3D Background Placeholder */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="w-[600px] h-[400px] bg-cyan/10 rounded-3xl blur-2xl animate-pulse" />
        </div>
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl md:text-6xl font-heading text-smoke mb-6 text-center drop-shadow-lg">
            PolyPortal
          </h1>
          <p className="text-xl md:text-2xl text-cyan mb-8 text-center max-w-2xl">
            The Gateway to 3D Creativity
          </p>
          {/* Search Bar */}
          <input
            type="text"
            placeholder="Search 3D models..."
            className="w-full max-w-md px-6 py-3 rounded-full bg-night border-2 border-cyan text-smoke focus:outline-none focus:ring-2 focus:ring-cyan mb-6 shadow-lg"
          />
          {/* Call-to-Action Buttons */}
          <div className="flex gap-4">
            <button className="px-8 py-3 rounded-full bg-cyan text-night font-bold text-lg shadow-md hover:bg-amber transition-colors">
              Upload Your Model
            </button>
            <button className="px-8 py-3 rounded-full border-2 border-cyan text-cyan font-bold text-lg shadow-md hover:bg-cyan hover:text-night transition-colors">
              Explore the Gallery
            </button>
          </div>
        </div>
      </section>
    </main>
  );
} 