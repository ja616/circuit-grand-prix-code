
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const HighlightsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h1 className="font-mario text-4xl md:text-5xl lg:text-6xl text-center mb-10 bg-clip-text text-transparent bg-neon-glow text-shadow-mario">
              EVENT HIGHLIGHTS
            </h1>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
              {/* Placeholder highlight cards */}
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div 
                  key={item}
                  className="mk-card group overflow-hidden"
                >
                  <div className="h-48 bg-gray-200 mb-4 rounded overflow-hidden">
                    <div className="w-full h-full bg-gradient-to-br from-[#9b87f5] to-[#ff3e3e] flex items-center justify-center">
                      <p className="text-white font-mario text-lg">Image {item}</p>
                    </div>
                  </div>
                  <h3 className="font-racing text-xl text-[#8e44ad] mb-2">Highlight Moment {item}</h3>
                  <p className="text-gray-600">
                    This is a placeholder for highlight {item}. Real content would go here describing amazing moments from previous events.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default HighlightsPage;
