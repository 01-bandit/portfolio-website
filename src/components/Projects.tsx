import { useState, memo } from 'react'
import { motion } from 'framer-motion'
import { useDebounce } from '@hooks/useAdvancedHooks'
import type { Project as ProjectType } from '../types'

// Memoized Project Card component to prevent unnecessary re-renders
const ProjectCard = memo<{ project: ProjectType; index: number }>(({ project, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`bg-white dark:bg-gray-800 p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col ${
      project.highlight ? 'border-2 border-secondary dark:border-blue-400' : ''
    }`}
  >
    <div className="flex justify-between items-start mb-3 gap-2 md:gap-4">
      <div className="flex items-center gap-2 md:gap-3 flex-1 min-w-0">
        <h3 className="text-xl md:text-2xl font-bold text-primary dark:text-white break-words">
          {project.title}
        </h3>
      </div>
      {project.github && (
        <a 
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-secondary dark:text-blue-400 hover:text-primary dark:hover:text-blue-300 transition-colors flex-shrink-0"
          aria-label={`View ${project.title} on GitHub`}
        >
          <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
          </svg>
        </a>
      )}
    </div>
    
    <p className="text-sm text-secondary dark:text-blue-400 font-semibold mb-3">
      {project.type}
    </p>
    
    <p className="text-gray-700 dark:text-gray-300 mb-4 break-words">
      {project.description}
    </p>
    
    <div className="flex flex-wrap gap-2 mt-auto">
      {project.technologies.map((tech, techIndex) => (
        <span 
          key={techIndex}
          className="px-2 md:px-3 py-1 bg-primary/10 dark:bg-secondary/20 text-primary dark:text-blue-400 text-xs md:text-sm rounded-full whitespace-nowrap"
        >
          {tech}
        </span>
      ))}
    </div>
  </motion.div>
))

ProjectCard.displayName = 'ProjectCard'

const Projects: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'academic' | 'personal'>('all')
  const [searchTerm, setSearchTerm] = useState('')
  
  // Debounce search term to avoid filtering on every keystroke
  const debouncedSearch = useDebounce(searchTerm, 300)

  const projects: ProjectType[] = [
    {
      id: 1,
      title: 'AI Voice Calling Agent',
      description: 'Outbound AI calling agent with automated lead generation pipeline. Built n8n workflow integrating Waalaxy, LinkedIn scraping, Apollo, VAPI, and Retell AI. Extracted and fine-tuned dataset from real closer recordings to replicate human-like sales conversations.',
      technologies: ['n8n', 'VAPI', 'Retell AI', 'Apollo', 'Dataset Extraction', 'Fine-tuning'],
      category: 'personal',
      type: 'Work in Progress',
      github: '',
      icon: '',
      highlight: true,
      image: ''
    },
    {
      id: 2,
      title: 'SecureChat',
      description: 'End-to-end encrypted messaging application implementing ECDH key exchange, AES-256-GCM encryption, and real-time messaging with Socket.io. Built for Information Security course.',
      technologies: ['React', 'Node.js', 'Socket.io', 'Web Crypto API', 'MongoDB'],
      category: 'personal',
      type: 'Personal Project',
      github: 'https://github.com/01-bandit/SecureChat',
      icon: '',
      image: ''
    },
    {
      id: 3,
      title: 'Portfolio Website',
      description: 'Modern, responsive portfolio with dark mode, animations, CI/CD pipeline, and automated deployment. Built with React, Vite, Tailwind CSS, and Framer Motion.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite', 'CI/CD'],
      category: 'personal',
      type: 'Personal Project',
      github: 'https://github.com/01-bandit/portfolio-website',
      icon: '',
      image: ''
    },
    {
      id: 4,
      title: '2D Chess Game',
      description: 'Complete chess implementation with game logic, move validation, and graphical UI built in C++ for Programming Fundamentals course.',
      technologies: ['C++', 'OOP', 'Game Logic'],
      category: 'academic',
      type: 'FAST University Semester Project',
      github: 'https://github.com/01-bandit/PF-Project',
      icon: '',
      image: ''
    },
  ]

  // Filter projects based on category and search term
  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === 'all' || project.category === filter
    const matchesSearch = 
      project.title.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.description.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(debouncedSearch.toLowerCase()))
    
    return matchesFilter && matchesSearch
  })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-primary dark:text-white mb-4"
        >
          My Projects
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          A collection of academic and personal projects showcasing modern development practices
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 max-w-2xl mx-auto"
        >
          <div className="relative">
            <input
              type="text"
              placeholder="Search projects by name, description, or technology..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-3 pr-10 rounded-lg border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:border-secondary dark:focus:border-blue-400 transition-colors"
              aria-label="Search projects"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                aria-label="Clear search"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center gap-4 mb-12 flex-wrap"
        >
          {['all', 'academic', 'personal'].map((category) => (
            <button
              key={category}
              onClick={() => setFilter(category as 'all' | 'academic' | 'personal')}
              className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                filter === category
                  ? 'bg-secondary dark:bg-blue-400 text-white shadow-lg'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
              aria-pressed={filter === category}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Results count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-gray-600 dark:text-gray-400 mb-8"
        >
          Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-gray-500 dark:text-gray-400 py-12"
          >
            No projects found matching your criteria.
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default memo(Projects)
