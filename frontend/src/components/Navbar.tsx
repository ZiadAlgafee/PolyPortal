import React from "react";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-night/90 backdrop-blur border-b border-cyan/20 flex items-center justify-between px-8 py-4 shadow-lg">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-2xl font-heading text-cyan">⧉</span>
        <span className="text-xl font-heading text-smoke">PolyPortal</span>
      </div>
      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search 3D models..."
        className="hidden md:block w-80 px-4 py-2 rounded-full bg-night border border-cyan text-smoke focus:outline-none focus:ring-2 focus:ring-cyan"
      />
      {/* Account Menu Placeholder */}
      <div className="flex items-center gap-4">
        <button className="px-4 py-2 rounded-full bg-cyan text-night font-bold hover:bg-amber transition-colors">
          Sign In
        </button>
      </div>
    </nav>
  );
} 