import { motion } from 'framer-motion'
import { useState } from 'react'
import { FiExternalLink } from 'react-icons/fi'

const ProjectCard = ({ project, index, inView }) => {
  const [isHovered, setIsHovered] = useState(false)
  const { title, image, description, technologies, link } = project
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className="bg-white rounded-xl overflow-hidden shadow-md group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-56">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end text-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-sm text-gray-200 mb-3 line-clamp-2">{description}</p>
          <a 
            href={link}
            className="inline-flex items-center text-white bg-primary-600 hover:bg-primary-700 py-2 px-4 rounded-lg transition-colors text-sm font-medium"
          >
            View Project <FiExternalLink className="ml-2" />
          </a>
        </motion.div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-gray-600 line-clamp-2">{description}</p>
      </div>
    </motion.div>
  )
}

export default ProjectCard