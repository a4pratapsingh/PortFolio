import { assets, workData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image'
import { motion } from 'motion/react'
import Link from 'next/link'

function Work({isDarkMode}) {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>



        <motion.h4 
        initial={{y: -20, opacity:0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration:0.5, delay:0.3}}
        className='text-center mb-2 text-lg font-sans'>
            My Project</motion.h4>


        <motion.h2 
        initial={{y: -20, opacity:0}}
        whileInView={{y: 0, opacity:1}}
        transition={{duration:0.5, delay:0.5}}
        className='text-center text-5xl font-sans'>
            My latest work</motion.h2>


        <motion.p 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-sans'>
            My projects showcase a fusion of full-stack web development 
            and data science, delivering dynamic, data-driven applications. 
            From predictive models to sleek, user-centric websites, 
            each project reflects innovation, technical expertise, 
            and a passion for solving complex challenges.

         </motion.p>


        <motion.div 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.6, delay:0.9}}
        className='grid grid-cols-[repeat(auto-fit,_minmax(200px,_1fr))] gap-5 dark:text-black'>
            {workData.map((project, index)=>( 
                <motion.div key={index} 
                whileHover={{scale:1.05}}
                transition={{duration:0.3}} 
                className='aspect-square bg-no-repeat bd-cover bg-center 
                rounded-lg relative cursor-pointer group'
                style={{backgroundImage :`url(${project.bgImage})`}}>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <div className='bg-white w-10/12 rounded-md absolute bottom-5
                    left-1/2 -translate-x-1/2 py-3 px-5 flex items-center
                    justify-between duration-500 group-hover:bottom-7'>
                        <div>
                            <h2 className='font-semibold'>{project.title}</h2>
                            <p className='text-sm text-gray-700'>{project.description}</p>
                        </div>
                        <div className='border rounded-full border-black w-9
                        aspect-square flex items-center justify-center
                        shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                        <Image src={assets.send_icon} alt='send icon' className='w-5' />
                        </div>
                    </div>
                    </a>
                    
                </motion.div>
            ))}
        </motion.div>


        <motion.a 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:0.5, delay:0.7}}
        href="https://github.com/impratap" className='w-max flex items-center justify-center gap-2
        text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10
        mx-auto my-20 hover:bg-lightHover duration-500 dark:text-white dark:border-white 
        dark:hover:bg-darkHover'>
            Show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='Right arrow'
            className='w-4' />
        </motion.a>


       

    </motion.div>
  )
}

export default Work