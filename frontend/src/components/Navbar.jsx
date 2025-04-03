import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaHome,
  FaCloudUploadAlt,
  FaLeaf,
  FaComments,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { RiPlantFill } from "react-icons/ri";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/home", name: "Home", icon: FaHome },
    { path: "/upload", name: "Upload", icon: FaCloudUploadAlt },
    { path: "/diseases", name: "Diseases", icon: FaLeaf },
    { path: "/forum", name: "Forum", icon: FaComments }
  ];

  return (
    <>
     
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={` w-full z-50 transition-all duration-300 fixed top-0 left-0 ${
          scrolled ? "bg-green-800 shadow-lg" : "bg-green-700"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-16 sm:h-20">
            
            <Link to="/home" className="flex items-center">
              <motion.div 
                whileHover={{ rotate: 15 }}
                className="text-2xl text-white mr-2"
              >
                <RiPlantFill />
              </motion.div>
              <h1 className="text-xl font-bold text-white hidden sm:block">
                <span className="font-extrabold">AI</span> Crop Disease Detection
              </h1>
            </Link>

            <nav className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-4 py-2 rounded-lg transition-all ${
                    location.pathname === link.path
                      ? "bg-green-600 text-white"
                      : "text-green-100 hover:bg-green-600/50 hover:text-white"
                  }`}
                >
                  <link.icon className="mr-2" />
                  {link.name}
                </Link>
              ))}
            </nav>

           

            
            <button
              className="md:hidden text-2xl text-white p-2 rounded-lg hover:bg-green-600 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

      
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "-100%" }}
              transition={{ type: "spring", damping: 25 }}
              className="fixed inset-0 bg-green-800 z-40 pt-16 md:hidden"
            >
              <div className="container mx-auto  px-4 py-6 ">
                <nav className="flex  space-y-2 flex-col">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center px-4  rounded-lg text-lg transition-all py-3${
                        location.pathname === link.path
                          ? "bg-green-700 text-white"
                          : "text-green-100 hover:bg-green-700/50"
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      <link.icon className="mr-3 text-xl" />
                      {link.name}
                    </Link>
                  ))}
                </nav>

               
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      
      <div className="h-16 sm:h-20"></div>
    </>
  );
};

export default Navbar;