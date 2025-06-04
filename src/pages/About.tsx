import React from 'react';
import PageTransition from '../components/PageTransition';
import AnimatedText from '../components/AnimatedText';
import { motion } from 'framer-motion';
import { Code, Server, PaintBucket, Rocket } from 'lucide-react';

const About: React.FC = () => {
  return (
    <PageTransition>
      <section className="section">
        <div className="container">
          <AnimatedText 
            text="About Me" 
            className="page-heading text-center"
          />
          
         
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h2 className="text-2xl font-bold mb-6 text-primary-600 dark:text-primary-400">
      Application Developer & UI/UX Enthusiast
    </h2>
    <div className="space-y-4 text-gray-600 dark:text-gray-300">
      <p>
        Hello! I'm Anshu, an Application Developer with a strong command over building 
        full-stack web applications using the MERN stack — MongoDB, Express.js, React, 
        and Node.js. I specialize in developing user-friendly, scalable, and efficient 
        applications that deliver real value. 
        From designing intuitive frontends to building robust backends, I bring complete end-to-end solutions to life.
      </p>
      <p>
        My journey in web development started with a curiosity for creating interactive 
        experiences. Today, I combine technical expertise with creative problem-solving 
        to deliver solutions that make a difference.
      </p>
    </div>
  </motion.div>

  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay: 0.2 }}
    className="relative flex justify-center"
  >
    <div className="w-42 h-42 md:w-54 md:h-54aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-500/20 to-secondary-500/20 flex items-center justify-center">
      <img
        src="/mern.jpg"
        alt="MERN Stack"
        className="w-38 h-38 md:w-50 md:h-50 object-cover rounded-xl shadow-lg"
        loading="lazy"
      />
    </div>
  </motion.div>
</div>


          
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Code size={32} />,
                title: "Frontend Development",
                description: "Creating responsive and interactive user interfaces with React.js"
              },
              {
                icon: <Server size={32} />,
                title: "Backend Development",
                description: "Building robust server-side applications with Node.js and Express"
              },
              {
                icon: <PaintBucket size={32} />,
                title: "UI/UX Design",
                description: "Designing intuitive and engaging user experiences"
              },
              {
                icon: <Rocket size={32} />,
                title: "Performance Optimization",
                description: "Optimizing applications for speed and efficiency"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg"
              >
                <div className="text-primary-500 dark:text-primary-400 mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
};

export default About;