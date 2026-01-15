
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 pt-20 pb-10 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center font-bold text-white text-sm">U</div>
            <span className="text-xl font-bold tracking-tight">UPSC Conqueror</span>
          </div>
          <p className="text-slate-500 leading-relaxed text-sm">
            Evolving Civil Services preparation through deep tech and human intuition. Join the community of future leaders.
          </p>
        </div>
        
        <div>
          <h4 className="font-bold mb-6 text-amber-500">Product</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-white transition-colors">Features</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Pricing</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-amber-500">Company</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold mb-6 text-amber-500">Legal</h4>
          <ul className="space-y-4 text-sm text-slate-500">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Refund Policy</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-600">
        <p>&copy; 2026 UPSC Conqueror. Not affiliated with UPSC (Govt. of India).</p>
       
      </div>
    </footer>
  );
};
