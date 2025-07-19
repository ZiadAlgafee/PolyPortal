import React from "react";

export default function Sidebar() {
  return (
    <aside className="w-72 bg-night/80 border-r border-cyan/20 p-6 flex flex-col gap-6 min-h-screen sticky top-0">
      <h2 className="text-lg font-heading text-cyan mb-4">Filters</h2>
      {/* Category Filter */}
      <div>
        <label className="block text-smoke font-bold mb-2">Category</label>
        <select className="w-full rounded bg-night border border-cyan text-smoke px-3 py-2">
          <option>All</option>
          <option>Characters</option>
          <option>Architecture</option>
          <option>Vehicles</option>
          <option>Nature</option>
          <option>Props</option>
        </select>
      </div>
      {/* Price Filter */}
      <div>
        <label className="block text-smoke font-bold mb-2">Price</label>
        <select className="w-full rounded bg-night border border-cyan text-smoke px-3 py-2">
          <option>All</option>
          <option>Free</option>
          <option>Paid</option>
        </select>
      </div>
      {/* Format Filter */}
      <div>
        <label className="block text-smoke font-bold mb-2">Format</label>
        <select className="w-full rounded bg-night border border-cyan text-smoke px-3 py-2">
          <option>All</option>
          <option>.fbx</option>
          <option>.obj</option>
          <option>.gltf</option>
          <option>.blend</option>
          <option>.stl</option>
        </select>
      </div>
      {/* License Filter */}
      <div>
        <label className="block text-smoke font-bold mb-2">License</label>
        <select className="w-full rounded bg-night border border-cyan text-smoke px-3 py-2">
          <option>All</option>
          <option>CC0</option>
          <option>CC-BY</option>
          <option>Royalty Free</option>
        </select>
      </div>
      {/* Polycount Filter */}
      <div>
        <label className="block text-smoke font-bold mb-2">Polycount</label>
        <select className="w-full rounded bg-night border border-cyan text-smoke px-3 py-2">
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>
      </div>
    </aside>
  );
} 