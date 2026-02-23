import React from 'react';
import { motion } from 'framer-motion';

function GithubStats() {
    const username = "a4pratapsingh";
    
    // Tech-focused TokyoNight theme
   // Replace the old URL with this one in your code
const statsUrl = `https://github-readme-stats-six.vercel.app/api?username=${username}&show_icons=true&theme=tokyonight&hide_border=true&title_color=38bdf8&icon_color=38bdf8&text_color=94a3b8&bg_color=0D1117`;

const languagesUrl = `https://github-readme-stats-six.vercel.app/api/top-langs/?username=${username}&layout=compact&theme=tokyonight&hide_border=true&title_color=38bdf8&text_color=94a3b8&bg_color=0D1117`;

    return (
        <div id="github" className='w-full px-[12%] py-10 scroll-mt-20'>
            <motion.h4 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className='text-center mb-2 text-lg font-Ovo'>
                Technical Metrics
            </motion.h4>
            
            <motion.h2 
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className='text-center text-5xl font-Ovo'>
                GitHub Activity
            </motion.h2>

            <div className='flex flex-col md:flex-row items-center justify-center gap-8 mt-10'>
                {/* Main Stats Card */}
                <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -10, filter: "drop-shadow(0px 10px 20px rgba(56, 189, 248, 0.2))" }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    className="w-full max-w-[500px] cursor-pointer"
                >
                    <img src={statsUrl} alt="Ankit's Tech Stats" className="w-full rounded-2xl shadow-md" />
                </motion.div>

                {/* Top Languages Card */}
                <motion.div 
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    whileHover={{ y: -10, filter: "drop-shadow(0px 10px 20px rgba(56, 189, 248, 0.2))" }}
                    transition={{ duration: 0.6, delay: 0.9 }}
                    className="w-full max-w-[400px] cursor-pointer"
                >
                    <img src={languagesUrl} alt="Top Languages" className="w-full rounded-2xl shadow-md" />
                </motion.div>
            </div>
        </div>
    );
}

export default GithubStats;