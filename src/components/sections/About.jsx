import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiCode, FiLayout, FiSmartphone, FiGlobe } from 'react-icons/fi'

const skills = [
  { icon: <FiCode />, name: 'Frontend Development', level: 95 },
  { icon: <FiLayout />, name: 'UI/UX Design', level: 85 },
  { icon: <FiSmartphone />, name: 'Responsive Design', level: 90 },
  { icon: <FiGlobe />, name: 'Web Performance', level: 80 }
]

const technologies = [
  'React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 
  'Next.js', 'CSS/SCSS', 'HTML5', 'Git', 'Figma'
]

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  }
  
  return (
    <section 
      id="about" 
      data-section="about"
      className="section bg-white"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">About <span className="text-primary-600">Me</span></h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Get to know more about me, my skills, and what drives my passion for creating exceptional web experiences.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Bio Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">My Story</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                I'm a passionate frontend developer with 2+ years of experience crafting engaging web experiences. 
                My journey in web development started with a curiosity about how websites work, and it has evolved into 
                a career focused on creating intuitive, accessible, and visually appealing digital solutions.
              </p>
              <p>
                I specialize in building responsive, performance-optimized websites and applications using 
                modern frameworks and tools. My approach combines technical expertise with an eye for design 
                to deliver products that not only function flawlessly but also delight users.
              </p>
              <p>
                When I'm not coding, you can find me exploring the latest web technologies, contributing to 
                open-source projects, or sharing my knowledge through mentoring and writing technical articles.
              </p>
            </div>
          </motion.div>
          
          {/* Skills Section */}
          <div>
            <motion.h3 
              className="text-2xl font-semibold mb-6 text-gray-800"
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              My Skills
            </motion.h3>
            
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {skills.map((skill, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <div className="flex items-center mb-2">
                    <span className="text-primary-600 text-xl mr-2">{skill.icon}</span>
                    <span className="font-medium">{skill.name}</span>
                    <span className="ml-auto text-sm text-gray-500">{skill.level}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary-600 rounded-full"
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${skill.level}%` } : {}}
                      transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h4 className="text-xl font-medium mb-4 text-gray-800">Technologies I Work With</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About