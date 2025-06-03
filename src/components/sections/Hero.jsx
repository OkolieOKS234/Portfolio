import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import MyPic from '../../assets/myPortfolio.jpg' // Update with your image path

// Animation variants
const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.7,
      ease: "easeOut"
    }
  })
}

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.8,
      duration: 0.7,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.3 }
  }
}

const Hero = () => {
  // Typing animation for the headline
  const [text, setText] = useState('')
  const [index, setIndex] = useState(0)
  const fullText = 'Frontend Developer'
  
  useEffect(() => {
    if (index < fullText.length) {
      const timer = setTimeout(() => {
        setText(prevText => prevText + fullText[index])
        setIndex(prevIndex => prevIndex + 1)
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [index])
  
  return (
    <section 
      id="hero" 
      data-section="hero"
      className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-primary-50 to-secondary-50"
    >
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          className="absolute top-20 right-[10%] w-64 h-64 bg-primary-100 rounded-full opacity-60 blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.6, 0.4, 0.6]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 left-[10%] w-80 h-80 bg-secondary-100 rounded-full opacity-60 blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.6, 0.5, 0.6]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        />
      </div>
      
      <div className="container-custom z-10 mt-16 md:mt-0">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <motion.h2 
              className="text-lg md:text-xl font-medium text-primary-600 mb-3"
              custom={0}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              Hello, I'm David Okolie
            </motion.h2>
            
            <motion.h1 
              className="mb-6"
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              <span className="gradient-text bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent">
                {text}
              </span>
              <span className="inline-block w-0.5 h-12 bg-accent-500 animate-pulse ml-1"></span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-700 mb-8 max-w-lg"
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
            >
              I craft responsive websites where technology meets creativity. Let's build something amazing together.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.a 
                href="#portfolio" 
                className="btn btn-primary flex items-center justify-center sm:justify-start gap-2"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
              >
                View My Work <FiArrowRight className="ml-1" />
              </motion.a>
              
              <motion.a 
                href="#contact" 
                className="btn btn-secondary flex items-center justify-center sm:justify-start gap-2"
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
                whileHover="hover"
                transition={{ delay: 1 }}
              >
                Contact Me
              </motion.a>
            </div>
          </div>
          
          <motion.div 
            className="hidden md:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="relative">
              {/* Profile image */}
              <div className="w-[350px] h-[350px] rounded-full overflow-hidden md:flex-wrap border-4 border-white shadow-xl">
                <img
                  src={MyPic}
                  alt="David, Frontend Developer"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -right-6 w-24 h-24 bg-primary-100 rounded-lg flex items-center justify-center shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.2 }}
              >
                <div className="text-primary-600 font-bold text-center">
                  <span className="block text-2xl">3+</span>
                  <span className="text-xs">Years Exp.</span>
                </div>
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-28 h-28 bg-secondary-100 rounded-lg flex items-center justify-center shadow-lg"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.4 }}
              >
                <div className="text-secondary-600 font-bold text-center">
                  <span className="block text-2xl">5+</span>
                  <span className="text-xs">Projects</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero