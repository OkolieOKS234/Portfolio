import { motion } from 'framer-motion'

const ServiceCard = ({ service, index, inView }) => {
  const { icon, title, description, color } = service
  
  const getColorClass = (colorName) => {
    const colorMap = {
      primary: 'bg-primary-50 text-primary-600 border-primary-200 hover:bg-primary-100',
      secondary: 'bg-secondary-50 text-secondary-600 border-secondary-200 hover:bg-secondary-100',
      accent: 'bg-accent-50 text-accent-600 border-accent-200 hover:bg-accent-100'
    }
    
    return colorMap[colorName] || colorMap.primary
  }
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.1 * index }}
      whileHover={{ y: -10, transition: { duration: 0.3 } }}
      className={`p-6 rounded-xl border shadow-sm ${getColorClass(color)} transition-all duration-300`}
    >
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </motion.div>
  )
}

export default ServiceCard