import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import ProjectCard from '../ui/ProjectCard'

const projects = [
  {
    id: 1,
    title: 'Fixal UI Library',
    category: 'web',
    image: 'https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A powerful component and section based package that tends to make building 3d websites, mobile apps, dashboards, and portfolios easier with beautiful-looking components built using CSS + React and NPM.',
    technologies: ['React', 'NodeJS', 'CSS', 'Styled Components', 'Redux'],
    link: '#'
  },
  {
    id: 2,
    title: 'Ai Solutions Dashboard',
    category: 'app',
    image: 'https://images.pexels.com/photos/7567460/pexels-photo-7567460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'An interactive dashboard for managing content on the AI solutions site.',
    technologies: ['React', 'ExpressJS', 'QuillJS', 'Tailwind CSS'],
    link: '#'
  },
  {
    id: 3,
    title: 'Immigration Site',
    category: 'web',
    image: 'https://images.pexels.com/photos/4353813/pexels-photo-4353813.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A visually stunning travel blog with dynamic content loading and image optimization.',
    technologies: ['Reactjs', 'TailwindCSS', ],
    link: '#'
  },
  {
    id: 4,
    title: 'Fitness Tracker App',
    category: 'app',
    image: 'https://images.pexels.com/photos/4482900/pexels-photo-4482900.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A mobile-first fitness tracking application with workout plans and progress visualization.',
    technologies: ['React Native', 'Redux', 'Victory Charts'],
    link: '#'
  },
  {
    id: 5,
    title: 'Social Media Dashboard',
    category: 'ui',
    image: 'https://images.pexels.com/photos/4549408/pexels-photo-4549408.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'A comprehensive social media management dashboard with analytics and scheduling features.',
    technologies: ['React', 'Chart.js', 'Material UI'],
    link: '#'
  },
  {
    id: 6,
    title: 'Recipe Finder',
    category: 'ui',
    image: 'https://images.pexels.com/photos/6802983/pexels-photo-6802983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    description: 'An interactive recipe finder with filtering options and step-by-step cooking instructions.',
    technologies: ['React', 'Spoonacular API', 'CSS Grid'],
    link: '#'
  }
]

const Portfolio = () => {
  const [filter, setFilter] = useState('all')
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)
  
  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Websites' },
    { id: 'app', name: 'Applications' },
    { id: 'ui', name: 'UI/UX Design' }
  ]
  
  return (
    <section 
      id="portfolio" 
      data-section="portfolio"
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
          <h2 className="mb-4">My <span className="text-primary-600">Portfolio</span></h2>
          <div className="w-24 h-1 bg-primary-600 mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Check out some of my recent projects that showcase my skills and expertise in web development.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                filter === category.id 
                  ? 'bg-primary-600 text-white' 
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <ProjectCard 
                key={project.id}
                project={project}
                index={index}
                inView={inView}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  )
}

export default Portfolio