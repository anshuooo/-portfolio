import React, { useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

interface SkillBarProps {
  skill: string;
  percentage: number;
  color?: string;
}

const SkillBar: React.FC<SkillBarProps> = ({ 
  skill, 
  percentage, 
  color = 'bg-primary-500'
}) => {
  const controls = useAnimation();
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);
  
  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between mb-2">
        <span className="font-medium text-gray-800 dark:text-gray-200">{skill}</span>
        <span className="text-gray-600 dark:text-gray-300">{percentage}%</span>
      </div>
      <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${color}`}
          initial={{ width: 0 }}
          variants={{
            visible: { width: `${percentage}%` }
          }}
          animate={controls}
          transition={{ duration: 1, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default SkillBar;