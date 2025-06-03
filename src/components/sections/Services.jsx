import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiLayout, FiCode, FiSmartphone, FiRefreshCw, FiZap, FiShield } from 'react-icons/fi'
import ServiceCard from '../ui/ServiceCard'

const services = [
  {
    icon: <FiCode />,
    title: 'Frontend Development',
    description: 'Building interactive and responsive user interfaces with React and modern JavaScript',
    color: 'primary'
  },
  {
    icon: <FiLayout />,
    title: 'UI/UX Design',
    description: 'Creating intuitive and engaging user experiences with a focus on usability and aesthetics',
    color: 'secondary'
  },
  {
    icon: <FiSmartphone />,
    title: 'Responsive Design',
    description: 'Ensuring your website looks and functions perfectly on all devices and screen sizes',
    color: 'accent'
  },
  {
    icon: <FiRefreshCw />,
    title: 'Website Revamp',
    description: 'Modernizing existing websites with updated design, improved functionality, and better performance',
    color: 'primary'
  },
  {
    icon: <FiZap />,
    title: 'Performance Optimization',
    description: 'Enhancing website speed and performance for better user experience and SEO ranking',
    color: 'secondary'
  },
  {
    icon: <FiShield />,
    title: 'Web Accessibility',
    description: 'Making your website accessible to all users, including those with disabilities',
    color: 'accent'
  }
]

const Services = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  return (
    <section 
      id="services" 
      data-section="services"
      className="section bg-gray-50"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">My <span className="text-primary-600">Services</span></h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            I offer a range of services to help you build a strong online presence with modern web technologies.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
              index={index}
              inView={inView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services