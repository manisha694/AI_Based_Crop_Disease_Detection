import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faPaperPlane,
  faMapMarkerAlt,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setTimeout(() => setIsSubscribed(false), 3000);
      setEmail("");
    }
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Disease Detection", path: "/detect" },
    { name: "Solutions", path: "/solutions" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Privacy Policy", path: "/privacy" },
  ];

  const socialLinks = [
    { icon: faFacebook, url: "https://facebook.com", name: "Facebook" },
    { icon: faTwitter, url: "https://twitter.com", name: "Twitter" },
    { icon: faInstagram, url: "https://instagram.com", name: "Instagram" },
    { icon: faLinkedin, url: "https://linkedin.com", name: "LinkedIn" },
    { icon: faYoutube, url: "https://youtube.com", name: "YouTube" },
  ];

  return (
    <footer className=" from-green-800 bg-gradient-to-b  text-white to-green-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
         
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-xl  tracking-wider font-bold">CROP AI</h3>
            <p className="text-green-100 text-sm leading-relaxed">
              Empowering farmers with AI-driven crop disease detection.
            </p>
            <div className="flex space-x-4 pt-2">
              {socialLinks.slice(0, 4).map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  whileHover={{ y: -2 }}
                  className="bg-green-700  text-white p-2 rounded-full hover:bg-green-600 transition-colors duration-300"
                >
                  <FontAwesomeIcon icon={social.icon} className="h-4 w-4" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className=" font-semibold text-lg tracking-wider">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.a
                    href={link.path}
                    whileHover={{ x: 5 }}
                    className="text-green-100  text-sm flex  transition-colors items-center duration-200 hover:text-yellow-300"
                  >
                    <span className="w-2 h-2  rounded-full mr-2 bg-yellow-400"></span>
                    {link.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg  tracking-wider font-semibold">Contact Us</h3>
            <address className="not-italic  text-sm space-y-3">
              <div className=" items-start flex ">
                <FontAwesomeIcon
                  icon={faMapMarkerAlt}
                  className="mt-1  text-yellow-400 mr-3"
                />
                <p className="text-green-100">
                  Farma It.pvt Lted
                  <br />
                  Agricultural Zone Varanasi
                  <br />
                  India 221307
                </p>
              </div>
              <div className=" items-center flex ">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className=" text-yellow-400 mr-3 "
                />
                <a
                  href="mailto:support@cropai.com"
                  className=" hover:text-yellow-300 text-green-100 transition-colors"
                >
                  support@cropai.com
                </a>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mr-3 text-yellow-400"
                />
                <a
                  href="tel:+916393168549"
                  className="text-green-100 hover:text-yellow-300 transition-colors"
                >
                  +91 6393168549
                </a>
              </div>
            </address>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h3 className="text-lg  tracking-wider font-semibold">
               Updated
            </h3>
            <p className="text-sm text-green-100 ">
              Subscribe to our newsletter for the latest updates on crop health
              solutions.
            </p>
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 rounded-lg bg-green-700 border border-green-600  focus:ring-1 focus:ring-yellow-300 text-white placeholder-green-300 outline-none transition-all focus:border-yellow-400 z-0"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button
                  type="submit"
                  className=" duration-200 absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-green-900 p-2 rounded-lg transition-colors "
                  aria-label="Subscribe"
                >
                  <FontAwesomeIcon icon={faPaperPlane} />
                </button>
              </div>
              {isSubscribed && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-xs text-yellow-400 "
                >
                  Thank you for subscribing
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>


        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t  mt-12 pt-8 flex  md:flex-row justify-between flex-col items-center border-green-700"
        >
          <p className="text-green-300  md:text-left mb-4 md:mb-0 text-sm text-center">
            © 2025 AI-Powered Crop Disease Detection. All
            rights reserved.
          </p>
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                whileHover={{ y: -3 }}
                className="text-green-300 duration-200  transition-colors  hover:text-yellow-400"
              >
                <FontAwesomeIcon icon={social.icon} className="h-5 w-5" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;