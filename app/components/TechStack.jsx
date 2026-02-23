import React from 'react';
import { motion } from 'framer-motion';
import { assets } from '@/assets/assets';
import Image from 'next/image';

const TechStack = () => {
  const stack = [
    {
      category: "Full Stack Web Development",
      description: "Building scalable and responsive applications",
      tools: [
        { name: "React Js", img: assets.react_js, project: "E-Commerce Website" },
        { name: "Next Js", img: assets.next_js, project: "AI SaaS Platform" },
        { name: "Node Js", img: assets.node_js, project: "Hotel Booking System" },
        { name: "MongoDB", img: assets.mongodb, project: "MERN Stack Apps" },
        { name: "Tailwind", img: assets.tailwind, project: "NexCart UI" },
        { name: "Express Js", img: assets.express_js, project: "Backend APIs" }
      ]
    },
    {
      category: "Data Science & AI",
      description: "Extracting insights and building intelligent models",
      tools: [
        { name: "Python", img: assets.python, project: "Music Recommendation Engine" },
        { name: "TensorFlow", img: assets.tensorflow_logo, project: "Neural Networks" },
        { name: "PyTorch", img: assets.pytorch, project: "Deep Learning" },
        { name: "OpenCV", img: assets.opencv, project: "Image Processing" },
        { name: "Scikit-Learn", img: assets.scikit_learn, project: "ML Models" },
        { name: "Pandas", img: assets.pandas, project: "Data Analysis" }
      ]
    }
  ];

  const scrollToWork = () => {
    document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="tools" className="w-full px-[12%] py-20 scroll-mt-20">
      <motion.h4 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        Technical Expertise
      </motion.h4>
      
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center text-5xl font-Ovo mb-16"
      >
        My Tech Stack
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {stack.map((group, idx) => (
          <motion.div 
            key={idx}
            initial={{ opacity: 0, x: idx === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="border border-gray-300 dark:border-white/10 rounded-3xl p-8 bg-white/5 backdrop-blur-md hover:shadow-2xl transition-all group"
          >
            <h3 className="text-2xl font-semibold mb-2 dark:text-white font-Ovo italic underline underline-offset-8 decoration-blue-500">
              {group.category}
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8 font-Ovo">
              {group.description}
            </p>

            <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">
              {group.tools.map((tool, i) => (
                <div key={i} className="relative flex flex-col items-center group/tool">
                  <motion.div 
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    onClick={scrollToWork}
                    className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center border border-gray-300 dark:border-white/10 rounded-xl bg-white dark:bg-white/5 cursor-pointer hover:border-blue-500 transition-colors"
                  >
                    <Image src={tool.img} alt={tool.name} className="w-8 sm:w-10 h-auto" />
                  </motion.div>
                  
                  <span className="mt-2 text-[10px] uppercase tracking-tighter text-gray-500 font-bold">
                    {tool.name}
                  </span>

                  {/* Enhanced Tooltip */}
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-max px-3 py-1.5 bg-black text-white text-[11px] rounded opacity-0 group-hover/tool:opacity-100 transition-all pointer-events-none z-50">
                    Used in: <span className="text-blue-400 font-bold">{tool.project}</span>
                    <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black"></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TechStack;