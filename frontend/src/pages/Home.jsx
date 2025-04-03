import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import ChatPopup from "../components/ChatPopup";
import ChatButton from "./ChatButton";
import LearnMorePopup from "./LearnMorePopup";
import Features from "./Features";
import Testimonials from "./Testimonials";

const Home = () => {
  const [text, setText] = useState("");
  const fullText = "AI-Powered Crop Disease Detection";
  const [index, setIndex] = useState(0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 0);

 
  useEffect(() => {
    if (index < fullText.length) {
      const timeout = setTimeout(() => {
        setText(text + fullText[index]);
        setIndex(index + 1);
      }, windowWidth < 768 ? 120 : 100); 
      return () => clearTimeout(timeout);
    }
  }, [index, text, windowWidth]);

 
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

 
  const renderTypingText = () => {
    if (windowWidth < 640) { 
      return (
        <>
          <span className="text-green-400">{text.substring(0, 2)}</span>
          <span className="text-white">{text.substring(2)}</span>
          {index < fullText.length && (
            <span className="ml-1 inline-block w-2 h-8 bg-green-400 animate-pulse align-middle"></span>
          )}
        </>
      );
    } else {
      return (
        <>
          <span className="text-green-400">{text.substring(0, 2)}</span>
          <span className="text-white">{text.substring(2)}</span>
          {index < fullText.length && (
            <span className="ml-1 inline-block w-2 h-10 bg-green-400 animate-pulse align-middle"></span>
          )}
        </>
      );
    }
  };

  return (
    <div className="relative">
     
      <section
        className="relative h-screen flex flex-col items-center justify-center text-center px-4 sm:px-6 overflow-hidden"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.4)),
            url('https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3000&q=80')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: windowWidth < 1024 ? 'scroll' : 'fixed'
        }}
      >
       
        {windowWidth > 640 && (
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(windowWidth < 768 ? 8 : 15)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bg-green-400 rounded-full"
                initial={{
                  opacity: 0,
                  x: Math.random() * 1000,
                  y: Math.random() * 1000,
                  width: Math.random() * 10 + 2,
                  height: Math.random() * 10 + 2
                }}
                animate={{
                  opacity: [0, 0.5, 0],
                  y: [Math.random() * 100, Math.random() * 800],
                  x: [Math.random() * 100, Math.random() * 1000]
                }}
                transition={{
                  duration: Math.random() * 10 + 10,
                  repeat: Infinity,
                  ease: "linear"
                }}
              />
            ))}
          </div>
        )}

        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 2, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-white w-full px-4"
          style={{
            maxWidth: windowWidth < 768 ? '100%' : '56rem',
            padding: windowWidth < 640 ? '0 1rem' : '0'
          }}
        >
         
          <h1 className={`font-bold mb-4 sm:mb-6 leading-tight ${
            windowWidth < 640 ? 'text-3xl' : 
            windowWidth < 768 ? 'text-4xl' : 
            'text-5xl sm:text-6xl'
          }`}>
            {renderTypingText()}
          </h1>

        
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: fullText.length * 0.1 + 0.5, duration: 1 }}
            className={`mb-6 sm:mb-8 mx-auto leading-relaxed ${
              windowWidth < 640 ? 'text-base max-w-xs' : 
              'text-lg sm:text-xl max-w-2xl'
            }`}
          >
            Revolutionizing agriculture with cutting-edge AI technology to detect 
            and diagnose crop diseases with <span className="font-semibold text-green-300">95% accuracy</span>, 
            helping farmers protect their yields and livelihoods.
          </motion.p>

         
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: fullText.length * 0.1 + 0.8, duration: 1 }}
            className={`flex justify-center gap-3 sm:gap-4 mb-8 sm:mb-12 ${
              windowWidth < 640 ? 'flex-col' : 'flex-row'
            }`}
          >
            <motion.a
              href="/upload"
              whileHover={{ y: windowWidth < 640 ? 0 : -3, scale: windowWidth < 640 ? 1.01 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold rounded-lg shadow-lg transition-all duration-300 ${
                windowWidth < 640 ? 'py-3 px-6 text-sm' : 
                windowWidth < 768 ? 'py-3 px-6 text-base' : 
                'py-4 px-8 text-lg'
              }`}
            >
              {windowWidth < 640 ? 'Detect Disease' : 'Upload Image to Detect Disease'}
            </motion.a>

            <motion.button
              onClick={() => setIsPopupOpen(true)}
              whileHover={{ y: windowWidth < 640 ? 0 : -3, scale: windowWidth < 640 ? 1.01 : 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`bg-white text-green-700 hover:bg-gray-100 font-bold rounded-lg shadow-lg transition-all duration-300 ${
                windowWidth < 640 ? 'py-3 px-6 text-sm border border-green-300' : 
                windowWidth < 768 ? 'py-3 px-6 text-base border-2 border-transparent hover:border-green-300' : 
                'py-4 px-8 text-lg border-2 border-transparent hover:border-green-300'
              }`}
            >
              Learn More
            </motion.button>
          </motion.div>

         
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: fullText.length * 0.1 + 1, duration: 1 }}
            className={`flex justify-center ${
              windowWidth < 640 ? 'flex-col items-center gap-2' : 
              'flex-wrap gap-3 sm:gap-6'
            }`}
          >
            <div className="bg-green-800 bg-opacity-60 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full flex items-center">
              <span className="text-green-300 mr-2">✓</span>
              <span className="text-sm sm:text-base">95% Detection Accuracy</span>
            </div>
            <div className="bg-green-800 bg-opacity-60 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full flex items-center">
              <span className="text-green-300 mr-2">✓</span>
              <span className="text-sm sm:text-base">10,000+ Farmers</span>
            </div>
            <div className="bg-green-800 bg-opacity-60 backdrop-blur-sm px-3 sm:px-4 py-1 sm:py-2 rounded-full flex items-center">
              <span className="text-green-300 mr-2">✓</span>
              <span className="text-sm sm:text-base">Instant Results</span>
            </div>
          </motion.div>
        </motion.div>

       
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <a 
            href="#features" 
            className="flex flex-col items-center group"
            aria-label="Scroll down to learn more"
          >
            <motion.span
              className="text-white font-medium mb-1 sm:mb-2 text-sm sm:text-base"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Discover More
            </motion.span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`text-green-400 group-hover:text-green-300 transition-colors ${
                  windowWidth < 640 ? 'h-6 w-6' : 'h-8 w-8'
                }`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </motion.div>
          </a>
        </motion.div>
      </section>

      
      <section id="features" className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-gray-50 to-white">
        <Features />
      </section>

     
      <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
        <Testimonials />
      </section>

      
      <ChatButton setIsChatOpen={setIsChatOpen} isMobile={windowWidth < 768} />

     
      <AnimatePresence>
        {isPopupOpen && (
          <LearnMorePopup onClose={() => setIsPopupOpen(false)} isMobile={windowWidth < 768} />
        )}
        {isChatOpen && (
          <ChatPopup onClose={() => setIsChatOpen(false)} isMobile={windowWidth < 768} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Home;