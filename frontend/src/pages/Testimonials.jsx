import { motion, AnimatePresence } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const testimonials = [
  {
    name: "Mohan Singh",
    feedback: "This system saved my crops! The disease detection is incredibly accurate and the treatment suggestions helped me act quickly. Highly recommend to all farmers.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=60",
    rating: 5,
    role: "Organic Farmer"
  },
  {
    name: "Anjali Singh",
    feedback: "As someone new to farming, this tool has been invaluable. It's accurate and easy to use. The mobile interface makes it perfect for field use. A must-have for modern farmers.",
    image: "https://images.unsplash.com/photo-1619895862022-09114b41f16f?w=300&auto=format&fit=crop&q=60",
    rating: 4.5,
    role: "Small Farm Owner"
  },
  {
    name: "Sapna yadav",
    feedback: "The early detection system helped me identify diseases weeks before visible symptoms appeared. This early warning saved my entire yield this season.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=60",
    rating: 5,
    role: "Agricultural Specialist"
  },
  {
    name: "Rahul Sharma",
    feedback: "Very effective for small-scale farmers like me! The localized recommendations work perfectly for our regional crops and conditions.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=60",
    rating: 4.8,
    role: "Subsistence Farmer"
  },
  {
    name: "Priya Verma",
    feedback: "The AI-powered suggestions have improved my farm's productivity by at least 30%. The seasonal planning tools are game-changers!",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&auto=format&fit=crop&q=60",
    rating: 5,
    role: "Commercial Farm Manager"
  },
];

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (newIndex) => {
    setDirection(newIndex > index ? 1 : -1);
    setIndex(newIndex);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 transition-all duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="inline-block py-1 px-3 mb-4 text-xs font-semibold text-green-600 bg-green-100 rounded-full dark:bg-green-900 dark:text-green-200">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Trusted by Farmers Worldwide
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-300">
            Hear from real users who transformed their farming with our solutions
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <FiChevronLeft className="text-gray-700 dark:text-white text-xl" />
          </button>
          
          <button
            onClick={nextSlide}
            aria-label="Next testimonial"
            className="hidden sm:flex absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 p-3 rounded-full shadow-lg hover:shadow-xl hover:bg-gray-50 dark:hover:bg-gray-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <FiChevronRight className="text-gray-700 dark:text-white text-xl" />
          </button>

         
          <div className="overflow-hidden h-[400px] sm:h-[450px] relative">
            <AnimatePresence custom={direction} initial={false}>
              <motion.div
                key={index}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 },
                  scale: { duration: 0.2 }
                }}
                className="absolute inset-0 flex flex-col items-center p-6 sm:p-8"
              >
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 w-full h-full max-w-3xl flex flex-col">
                  <div className="flex-1 p-6 sm:p-8 flex flex-col items-center text-center">
                    <div className="relative mb-6">
                      <img
                        src={testimonials[index].image}
                        alt={`Portrait of ${testimonials[index].name}`}
                        className="rounded-full h-20 w-20 sm:h-24 sm:w-24 object-cover border-4 border-white dark:border-gray-800 shadow-md"
                        loading="lazy"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-green-500 text-white p-2 rounded-full">
                        <FaQuoteLeft className="text-xs" />
                      </div>
                    </div>
                    
                    <div className="flex mb-4">
                      {Array.from({ length: 5 }, (_, i) => (
                        <FaStar
                          key={i}
                          className={`text-xl ${
                            i < Math.floor(testimonials[index].rating) 
                              ? "text-yellow-500" 
                              : testimonials[index].rating % 1 > 0 && i === Math.floor(testimonials[index].rating)
                                ? "text-yellow-500 opacity-70"
                                : "text-gray-300 dark:text-gray-600"
                          }`}
                        />
                      ))}
                      <span className="ml-2 text-gray-600 dark:text-gray-400 text-sm">
                        {testimonials[index].rating.toFixed(1)}
                      </span>
                    </div>
                    
                    <p className="text-gray-700 dark:text-gray-300 mb-6 text-lg sm:text-xl leading-relaxed relative">
                      <FaQuoteLeft className="absolute -top-6 left-0 text-gray-200 dark:text-gray-700 text-4xl -z-10" />
                      {testimonials[index].feedback}
                    </p>
                    
                    <div className="mt-auto">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {testimonials[index].name}
                      </h3>
                      <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                        {testimonials[index].role}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          
          <div className="flex sm:hidden justify-center mt-6 space-x-4">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FiChevronLeft className="text-gray-700 dark:text-white" />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="bg-white dark:bg-gray-800 p-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
            >
              <FiChevronRight className="text-gray-700 dark:text-white" />
            </button>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to testimonial ${i + 1}`}
                className={`h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full transition-all duration-300 focus:outline-none ${
                  index === i 
                    ? "bg-green-500 w-6 sm:w-8" 
                    : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                }`}
                onClick={() => goToSlide(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;