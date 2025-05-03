import React from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import AnimatedText from '../components/AnimatedText';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

const NotFound: React.FC = () => {
  return (
    <PageTransition>
      <section className="min-h-[calc(100vh-80px)] flex items-center justify-center">
        <div className="container text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedText
              text="404 - Page Not Found"
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            />
            <p className="text-gray-600 dark:text-gray-300 text-lg mb-8">
              Oops! The page you're looking for doesn't exist.
            </p>
            <Link
              to="/"
              className="btn btn-primary inline-flex items-center"
            >
              <Home size={20} className="mr-2" />
              Back to Home
            </Link>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  );
};

export default NotFound;