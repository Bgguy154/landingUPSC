
import React from 'react';

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
        <div className="flex-1 text-left">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-bold uppercase tracking-widest mb-8">
            <span className="flex h-2 w-2 mr-2">
              <span className="animate-ping absolute inline-flex h-2 w-2 rounded-full bg-amber-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
            </span>
            Target LBSNAA 2026
          </div>
          <h1 className="text-6xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tighter">
            Cracking UPSC <br />
            <span className="text-gradient">With Precision.</span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mb-12 leading-relaxed font-medium">
            The world's first AI-driven UPSC mentor. Master the vast syllabus with adaptive testing, instant topic-wise quizzes, and detailed PYQ analysis.
          </p>
          
          <div className="flex flex-wrap gap-6">
            <button className="px-10 py-5 bg-amber-600 text-white font-extrabold rounded-xl hover:bg-amber-500 hover:scale-105 transition-all shadow-2xl shadow-amber-500/10 active:scale-95">
              Generate Quiz Now
            </button>
          </div>

          <div className="mt-12 flex items-center space-x-6 text-slate-500 font-semibold text-sm">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=upsc${i}`} alt="aspirant" />
                </div>
              ))}
            </div>
            <p>Trusted by <span className="text-white">50,000+ Aspirants</span> across India.</p>
          </div>
        </div>

        <div className="flex-1 relative w-full max-w-2xl">
          <div className="animate-float relative z-10">
            <div className="glass rounded-[2.5rem] p-4 shadow-2xl border-white/10 rotate-1 transform-gpu">
              <div className="bg-slate-950 rounded-[2rem] overflow-hidden border border-white/5">
                <div className="h-8 bg-slate-900 flex items-center px-4 space-x-2">
                   <div className="w-2 h-2 rounded-full bg-red-500/30"></div>
                   <div className="w-2 h-2 rounded-full bg-amber-500/30"></div>
                   <div className="w-2 h-2 rounded-full bg-green-500/30"></div>
                </div>
                <div className="p-10">
                  <div className="mb-8">
                    <div className="h-2 w-1/4 bg-amber-500/20 rounded-full mb-4"></div>
                    <h3 className="text-2xl font-bold">Daily Prelims Challenge</h3>
                  </div>
                  <div className="space-y-6">
                    <div className="p-6 bg-slate-900 rounded-2xl border border-white/5 space-y-4">
                      <div className="h-4 w-full bg-slate-800 rounded-full"></div>
                      <div className="h-4 w-5/6 bg-slate-800 rounded-full"></div>
                      <div className="grid grid-cols-2 gap-3 mt-4">
                        <div className="h-10 bg-amber-500/10 border border-amber-500/20 rounded-lg"></div>
                        <div className="h-10 bg-slate-800 rounded-lg"></div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-500 font-bold">
                      <span>Time Remaining: 12:45s</span>
                      <span className="text-amber-500">Level: Hard</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-amber-600/10 blur-[150px] rounded-full -z-10" />
        </div>
      </div>
    </section>
  );
};
