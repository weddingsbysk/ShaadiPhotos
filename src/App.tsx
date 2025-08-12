import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import Header from './components/Header';
import Hero from './components/Hero';
import WeddingCard from './components/WeddingCard';
import PhotoGallery from './components/PhotoGallery';
import { weddings } from './data/weddings';
import type { Wedding } from './types';


function App() {
  const [selectedWedding, setSelectedWedding] = useState<Wedding | null>(null);

  const openGallery = (wedding: Wedding) => {
    setSelectedWedding(wedding);
  };

  const closeGallery = () => {
    setSelectedWedding(null);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <Hero />
      
      {/* Portfolio Section */}
      <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
              Recent Weddings
            </h2>
            <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
              Each wedding is a unique story waiting to be told. <br></br>
              Explore our recent celebrations of love.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {weddings.map((wedding) => (
              <WeddingCard
                key={wedding.id}
                wedding={wedding}
                onClick={() => openGallery(wedding)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-8">
            About Weddings by Siddhant Kapoor
          </h2>
          <p className="text-lg text-gray-600 font-light leading-relaxed mb-8">
            Hi, I'm Siddhant Kapoor, a passionate wedding photographer dedicated to 
            capturing the magic of your special day. With years of experience in wedding 
            photography, I specialize in creating timeless, elegant imagery that reflects 
            the unique love story of each couple I work with.
          </p>
          <p className="text-lg text-gray-600 font-light leading-relaxed">
            From intimate ceremonies to grand celebrations, I believe every wedding is 
            unique and deserves to be captured with artistic vision and attention to detail. 
            Let me help you preserve the authentic emotions, beautiful moments, and precious 
            memories that make your wedding day truly unforgettable.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-rose-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-8">
            Let's Create Magic Together
          </h2>
          <p className="text-lg text-gray-600 font-light mb-8">
            Ready to tell your love story? I'd love to hear about your special day and 
            discuss how we can create beautiful memories together.
          </p>
          <div className="space-y-4 text-gray-600">
            <p>📧 weddingsbysiddhantkapoor@gmail.com</p>
            <p>📱 +91 85860 41646</p>
            <p>📍 Based in India, available worldwide</p>
            <p>
              📸 Follow on Instagram: {' '}
              <a 
                href="https://www.instagram.com/weddingsbysiddhantkapoor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-rose-500 hover:text-rose-600 transition-colors underline"
              >
                @weddingsbysiddhantkapoor
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Photo Gallery Modal */}
      <AnimatePresence>
        {selectedWedding && (
          <PhotoGallery
            wedding={selectedWedding}
            onClose={closeGallery}
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
