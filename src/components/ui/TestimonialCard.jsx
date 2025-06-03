import { motion } from 'framer-motion'
import { FiMessageSquare } from 'react-icons/fi'

const TestimonialCard = ({ testimonial, index, inView, className }) => {
  const { name, position, company, image, quote } = testimonial
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      className={`bg-white p-6 rounded-xl shadow-md ${className}`}
    >
      <div className="mb-6 text-primary-600 text-2xl">
        <FiMessageSquare />
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={image} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-semibold text-gray-800">{name}</h4>
          <p className="text-sm text-gray-600">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default TestimonialCard