
import React, { useState } from 'react';

export const QuickQuiz: React.FC = () => {
  const [selected, setSelected] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);

  const options = [
    { text: "Lal Bahadur Shastri", correct: false },
    { text: "Jawaharlal Nehru", correct: true },
    { text: "B.R. Ambedkar", correct: false },
    { text: "Indira Gandhi", correct: false }
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-4xl mx-auto glass rounded-[3rem] p-8 md:p-12 relative overflow-hidden border-amber-500/20">
        <div className="absolute top-0 right-0 p-8 text-amber-500/10 font-black text-9xl pointer-events-none">Q</div>
        
        <div className="relative z-10">
          <span className="text-amber-500 font-bold text-sm tracking-widest uppercase mb-4 block">Prelims PYQ Focus</span>
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 leading-tight">
            The Ninth Schedule was introduced in the Constitution of India during the Prime Ministership of:
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
            {options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => { if(!answered) { setSelected(idx); setAnswered(true); } }}
                className={`p-6 rounded-2xl text-left font-bold transition-all border-2 flex justify-between items-center ${
                  selected === idx 
                    ? (opt.correct ? 'bg-emerald-500/20 border-emerald-500 text-emerald-400' : 'bg-red-500/20 border-red-500 text-red-400')
                    : 'bg-slate-800/50 border-white/5 hover:border-white/20 text-slate-300'
                } ${answered && opt.correct && selected !== idx ? 'border-emerald-500/50 text-emerald-500/80' : ''}`}
              >
                {opt.text}
                {answered && opt.correct && <span>✓</span>}
              </button>
            ))}
          </div>

          {answered && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="p-6 bg-slate-900/50 rounded-2xl border border-white/5 mb-6">
                 <p className="text-slate-300 font-medium">
                  <span className="text-amber-500 font-bold">Explanation:</span> The Ninth Schedule was added by the <span className="text-white">1st Amendment (1951)</span> during Jawaharlal Nehru's tenure to protect land reform laws from judicial review.
                 </p>
              </div>
              <p className='inline px-2'>For More Questions</p>
              <button onClick={() => { setAnswered(false); setSelected(null); }} className="text-amber-500 font-bold hover:underline">Please Login →</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
