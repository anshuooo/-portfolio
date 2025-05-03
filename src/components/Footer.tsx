import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Github, Twitter, Linkedin, Mail, ArrowUpCircle } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { Icon: Github, href: 'https://github.com/', label: 'GitHub' },
    { Icon: Twitter, href: 'https://twitter.com/', label: 'Twitter' },
    { Icon: Linkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
    { Icon: Mail, href: 'mailto:contact@example.com', label: 'Email' },
  ];

  const footerLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/projects', label: 'Projects' },
    { to: '/skills', label: 'Skills' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link to="/" className="text-xl font-bold text-primary-600 dark:text-primary-400">
              Anshu
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300">
              Creating amazing digital experiences with a passion for design and development.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400"
                  aria-label={label}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Links</h3>
            <ul className="space-y-2">
              {footerLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-gray-600 hover:text-primary-500 dark:text-gray-300 dark:hover:text-primary-400 transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              I'm always open for new opportunities and interesting projects.
            </p>
            <Link to="/contact" className="btn btn-primary inline-block">
              Contact Me
            </Link>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 dark:text-gray-300 text-sm">
            © {new Date().getFullYear()} Anshu. All rights reserved.
          </p>
          
          <motion.button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 text-primary-500 dark:text-primary-400 flex items-center space-x-2"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            aria-label="Scroll to top"
          >
            <span>Back to top</span>
            <ArrowUpCircle size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;