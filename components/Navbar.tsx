
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 glass border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center font-bold text-white shadow-lg shadow-amber-500/20">U</div>
          <span className="text-xl font-bold tracking-tight">UPSC<span className="text-amber-500">Conqueror</span></span>
        </div>
        
        

        <div className="flex items-center space-x-4">
          <button className="px-6 py-2.5 bg-amber-600 hover:bg-amber-500 rounded-lg text-sm font-bold shadow-lg shadow-amber-500/20 transition-all active:scale-95">
            Login With Google
          </button>
        </div>
      </div>
    </nav>
  );
};
