"use client";
import React from "react";
import Sidebar from "../components/Sidebar";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-row bg-night">
      <Sidebar />
      <section className="flex-1 flex flex-col items-center justify-center py-24 relative">
        {/* ...PolyPortal hero content... */}
      </section>
    </main>
  );
}