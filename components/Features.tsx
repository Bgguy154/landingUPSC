
import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, gradient }) => (
  <div className="glass p-8 rounded-3xl group hover:border-amber-500/30 transition-all hover:-translate-y-2">
    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-2xl mb-6 shadow-lg shadow-black/20`}>
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <p className="text-slate-400 leading-relaxed text-sm">{description}</p>
  </div>
);

export const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 bg-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Master the CSE Syllabus</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Scientifically designed testing modules covering every pillar of the Civil Services Examination.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            title="Syllabus-Wise MCQs"
            description="Topic-wise segregation of questions from Polity, History, Geography, and Economy based on the latest UPSC trends."
            icon="📜"
            gradient="from-amber-400 to-orange-500"
          />
          <FeatureCard 
            title="Daily Current Affairs Quiz"
            description="Daily updated quizzes based on The Hindu, Indian Express, and PIB to keep you ahead in the competition."
            icon="📰"
            gradient="from-indigo-500 to-blue-600"
          />
          <FeatureCard 
            title="NCERT Foundations Quiz"
            description="Building blocks of UPSC. Quizzes specifically designed from Class 6-12 NCERTs to strengthen your basics."
            icon="📚"
            gradient="from-emerald-400 to-cyan-500"
          />
        </div>
      </div>
    </section>
  );
};
