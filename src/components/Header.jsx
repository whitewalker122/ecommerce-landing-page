import React from 'react';

export default function Header() {
  return (
    <header className="bg-slate-900 text-white py-14 px-4 text-center shadow-md">
      <div className="max-w-4xl mx-auto space-y-3">
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight leading-tight">
          A modern, fully mobile-responsive product landing page featuring interactive filter components.
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base">
          Explore our curated product catalog with instant filtering and clean UI execution.
        </p>
      </div>
    </header>
  );
}