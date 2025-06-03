import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0">
            <a href="#hero" className="font-display text-2xl font-bold text-white">
              David<span className="text-accent-500">.</span>
            </a>
            <p className="mt-2 text-gray-300 max-w-md">
              Creating engaging, accessible, and high-performance web experiences that delight users.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl transition-colors"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white text-xl transition-colors"
              aria-label="Twitter"
            >
              <FiTwitter />
            </a>
            <a 
              href="mailto:hello@example.com" 
              className="text-gray-300 hover:text-white text-xl transition-colors"
              aria-label="Email"
            >
              <FiMail />
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            © {currentYear} David. All rights reserved.
          </p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex flex-wrap justify-center space-x-6">
              <li><a href="#about" className="text-sm text-gray-400 hover:text-white transition-colors">About</a></li>
              <li><a href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#portfolio" className="text-sm text-gray-400 hover:text-white transition-colors">Portfolio</a></li>
              <li><a href="#contact" className="text-sm text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer