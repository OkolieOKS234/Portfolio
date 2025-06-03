import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import TestimonialCard from '../ui/TestimonialCard'

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    position: 'Marketing Director',
    company: 'TechCorp',
    image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'David transformed our outdated website into a modern, user-friendly platform that perfectly represents our brand. His attention to detail and responsiveness made the entire process smooth and enjoyable.'
  },
  {
    id: 2,
    name: 'Michael Chen',
    position: 'Founder & CEO',
    company: 'Innovate Studios',
    image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'Working with David was an exceptional experience. He understood our vision immediately and delivered a website that exceeded our expectations. His technical expertise and creative insights were invaluable.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    position: 'Product Manager',
    company: 'Sphere Digital',
    image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'David\'s ability to combine beautiful design with intuitive functionality sets him apart. He created a seamless user experience that has significantly improved our conversion rates. Highly recommended!'
  },
  {
    id: 4,
    name: 'James Wilson',
    position: 'E-commerce Director',
    company: 'Urban Outfitters',
    image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    quote: 'The e-commerce platform David built for us has been a game-changer. It\'s not only visually stunning but also performs excellently. Our sales have increased by 45% since launch.'
  }
]

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleTestimonials, setVisibleTestimonials] = useState([])
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  useEffect(() => {
    const updateVisibleTestimonials = () => {
      const width = window.innerWidth
      let visibleCount = 1
      
      if (width >= 1024) {
        visibleCount = 3
      } else if (width >= 768) {
        visibleCount = 2
      }
      
      const visibleItems = []
      for (let i = 0; i < visibleCount; i++) {
        const index = (currentIndex + i) % testimonials.length
        visibleItems.push(testimonials[index])
      }
      
      setVisibleTestimonials(visibleItems)
    }
    
    updateVisibleTestimonials()
    window.addEventListener('resize', updateVisibleTestimonials)
    
    return () => window.removeEventListener('resize', updateVisibleTestimonials)
  }, [currentIndex])
  
  const handlePrev = () => {
    setCurrentIndex(prev => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }
  
  const handleNext = () => {
    setCurrentIndex(prev => 
      (prev + 1) % testimonials.length
    )
  }
  
  return (
    <section 
      id="testimonials" 
      data-section="testimonials"
      className="section bg-primary-50"
      ref={ref}
    >
      <div className="container-custom">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="mb-4">Client <span className="text-primary-600">Testimonials</span></h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Here's what my clients have to say about their experiences working with me.
          </p>
        </motion.div>
        
        <div className="relative">
          <div className="overflow-hidden">
            <motion.div 
              className="flex gap-6"
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {visibleTestimonials.map((testimonial, index) => (
                <TestimonialCard 
                  key={testimonial.id}
                  testimonial={testimonial}
                  index={index}
                  inView={inView}
                  className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0"
                />
              ))}
            </motion.div>
          </div>
          
          {/* Navigation Controls */}
          <motion.div 
            className="flex justify-center mt-10 gap-4"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button 
              onClick={handlePrev}
              className="p-3 rounded-full bg-white shadow-md text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="Previous testimonial"
            >
              <FiChevronLeft className="text-xl" />
            </button>
            <button 
              onClick={handleNext}
              className="p-3 rounded-full bg-white shadow-md text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
              aria-label="Next testimonial"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials