import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Camera, Heart, Star } from 'lucide-react';
import { useRef, useEffect, useState } from 'react';

const Hero = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Parallax transforms
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.8]);

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Image with Parallax */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y: backgroundY }}
      >
        <motion.img 
          src="/hero-bg.jpg" 
          alt="Wedding photography background"
          className="w-full h-[120%] object-cover"
          initial={{ scale: 1.1 }}
          animate={{ 
            scale: 1,
            x: mousePosition.x,
            y: mousePosition.y 
          }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
        
        {/* Dynamic Overlay */}
        <motion.div 
          className="absolute inset-0 bg-black"
          style={{ opacity: overlayOpacity }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-rose-900/30 via-transparent to-pink-900/40" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full"
              initial={{ 
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{ 
                y: [null, -100],
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeOut"
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-20 text-white/30"
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <Camera className="h-8 w-8" />
      </motion.div>
      
      <motion.div
        className="absolute top-32 right-32 text-rose-300/40"
        animate={{ 
          y: [0, 15, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      >
        <Heart className="h-6 w-6" />
      </motion.div>
      
      <motion.div
        className="absolute bottom-32 left-32 text-pink-300/30"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, delay: 2 }}
      >
        <Star className="h-5 w-5" />
      </motion.div>

      {/* Main Content with Scroll Animation */}
      <motion.div 
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8"
        style={{ y: textY }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="mb-6"
        >
          <motion.h1 
            className="text-4xl sm:text-6xl lg:text-8xl font-light text-white mb-6"
            style={{
              textShadow: "0 4px 20px rgba(0,0,0,0.5)",
              background: "linear-gradient(135deg, #ffffff 0%, #fce7f3 50%, #f3e8ff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}
          >
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Capturing
            </motion.span>
            <br />
            <motion.span
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-rose-300"
            >
              Love Forever
            </motion.span>
          </motion.h1>
        </motion.div>
        
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-lg sm:text-xl text-white/90 mb-12 max-w-3xl mx-auto font-light leading-relaxed"
          style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}
        >
          Professional wedding photography by Siddhant Kapoor - telling your unique love story 
          through timeless, elegant imagery that captures every precious moment of your <br></br> special day.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <motion.button
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(236, 72, 153, 0.3)"
            }}
            whileTap={{ scale: 0.95 }}
            className="group relative bg-gradient-to-r from-rose-500 to-pink-500 text-white px-8 py-4 rounded-full font-light text-lg overflow-hidden shadow-2xl"
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <span className="relative z-10">View Portfolio</span>
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-rose-500"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-full font-light text-lg hover:bg-white/20 transition-all duration-300 shadow-lg"
            onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Enhanced Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center"
      >
        <motion.p 
          className="text-white/60 text-sm mb-2 font-light"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Scroll to explore
        </motion.p>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="p-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm"
        >
          <ChevronDown className="h-5 w-5 text-white/70" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;