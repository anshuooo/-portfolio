import React from 'react';
import PageTransition from '../components/PageTransition';
import AnimatedText from '../components/AnimatedText';
import SocialLinks from '../components/SocialLinks';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-80px)] flex items-center">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatedText
                text="Hi, I'm Anshu"
                className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
              />
              <AnimatedText
                text="MERN Stack Developer"
                className="text-2xl md:text-3xl text-primary-500 dark:text-primary-400 font-semibold mb-6"
              />
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-gray-600 dark:text-gray-300 mb-8 text-lg"
              >
                I create beautiful and functional web applications using modern technologies.
                Let's build something amazing together!
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                  <ArrowRight className="ml-2 inline-block" size={20} />
                </Link>
                <Link to="/contact" className="btn btn-outline">
                  Get in Touch
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-8"
              >
                <SocialLinks />
              </motion.div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="relative hidden lg:block"
            >
              <div className="relative w-full aspect-square rounded-full bg-gradient-to-br from-primary-500/20 to-secondary-500/20 animate-spin-slow" />
              <div className="absolute inset-4 rounded-full bg-gradient-to-br from-primary-500/40 to-secondary-500/40 animate-spin-slow" style={{ animationDirection: 'reverse' }} />
              <div className="absolute inset-8 rounded-full overflow-hidden bg-white shadow-lg">
  <img
    src="/anshu photo.png"
    alt="My Profile"
    className="w-full h-full object-cover rounded-full"
  />
</div>

                   </motion.div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default Home;