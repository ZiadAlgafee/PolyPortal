import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-night border-t border-cyan/20 py-8 px-4 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 mt-12">
      {/* Sitemap Links */}
      <div className="flex flex-col gap-2">
        <span className="font-heading text-cyan text-lg mb-2">PolyPortal</span>
        <a href="#" className="text-smoke hover:text-cyan">Home</a>
        <a href="#" className="text-smoke hover:text-cyan">Gallery</a>
        <a href="#" className="text-smoke hover:text-cyan">Upload</a>
        <a href="#" className="text-smoke hover:text-cyan">Profile</a>
        <a href="#" className="text-smoke hover:text-cyan">Community</a>
      </div>
      {/* Legal */}
      <div className="flex flex-col gap-2">
        <span className="font-heading text-cyan text-lg mb-2">Legal</span>
        <a href="#" className="text-smoke hover:text-cyan">Terms of Service</a>
        <a href="#" className="text-smoke hover:text-cyan">Privacy Policy</a>
        <a href="#" className="text-smoke hover:text-cyan">Cookie Policy</a>
      </div>
      {/* Social Media */}
      <div className="flex flex-col gap-2">
        <span className="font-heading text-cyan text-lg mb-2">Connect</span>
        <a href="#" className="text-smoke hover:text-cyan">Twitter</a>
        <a href="#" className="text-smoke hover:text-cyan">Instagram</a>
        <a href="#" className="text-smoke hover:text-cyan">Discord</a>
      </div>
      {/* Newsletter */}
      <div className="flex flex-col gap-2 max-w-xs w-full">
        <span className="font-heading text-cyan text-lg mb-2">Newsletter</span>
        <form className="flex gap-2">
          <input
            type="email"
            placeholder="Your email"
            className="flex-1 px-3 py-2 rounded-l bg-night border border-cyan text-smoke focus:outline-none"
          />
          <button className="px-4 py-2 rounded-r bg-cyan text-night font-bold hover:bg-amber transition-colors">
            Subscribe
          </button>
        </form>
      </div>
    </footer>
  );
} 