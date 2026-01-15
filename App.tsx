
import React from 'react';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { QuickQuiz } from './components/QuickQuiz';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <QuickQuiz />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default App;
