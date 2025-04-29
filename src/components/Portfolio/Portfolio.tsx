import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Placeholder Title',
    category: 'Placeholder Category',
    image: 'https://via.placeholder.com/400x300?text=Placeholder+Image',
    description: 'Placeholder description for the project.'
  },
  {
    id: 2,
    title: 'Placeholder Title',
    category: 'Placeholder Category',
    image: 'https://via.placeholder.com/400x300?text=Placeholder+Image',
    description: 'Placeholder description for the project.'
  },
  {
    id: 3,
    title: 'Placeholder Title',
    category: 'Placeholder Category',
    image: 'https://via.placeholder.com/400x300?text=Placeholder+Image',
    description: 'Placeholder description for the project.'
  },
  {
    id: 4,
    title: 'Placeholder Title',
    category: 'Placeholder Category',
    image: 'https://via.placeholder.com/400x300?text=Placeholder+Image',
    description: 'Placeholder description for the project.'
  },
  {
    id: 5,
    title: 'Placeholder Title',
    category: 'Placeholder Category',
    image: 'https://via.placeholder.com/400x300?text=Placeholder+Image',
    description: 'Placeholder description for the project.'
  },
  {
    id: 6,
    title: 'Placeholder Title',
    category: 'Placeholder Category',
    image: 'https://via.placeholder.com/400x300?text=Placeholder+Image',
    description: 'Placeholder description for the project.'
  }
];

const categories = ['All', 'Placeholder Category'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const filteredProjects = activeCategory === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Портфолио. Пока плейсхолдеры. (думайте, что у меня просто нет проектов, так проще)
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Плейсхолдер. Гойда. Заполним такое через пол года :3
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            key={activeCategory}
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                onClick={() => setSelectedProject(project.id)}
                className="bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <span className="text-white p-4 font-medium">Просмотреть говно</span>
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold uppercase tracking-wide text-blue-600 dark:text-blue-400">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Project modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                layoutId={`project-${selectedProject}`}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-2xl max-w-3xl w-full"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative h-64 sm:h-80">
                  <img 
                    src={projects.find(p => p.id === selectedProject)?.image}
                    alt={projects.find(p => p.id === selectedProject)?.title}
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center"
                  >
                    &times;
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    {projects.find(p => p.id === selectedProject)?.title}
                  </h3>
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 mb-4">
                    {projects.find(p => p.id === selectedProject)?.category}
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {projects.find(p => p.id === selectedProject)?.description}
                  </p>
                  <a 
                    href="#" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                  >
                    Просмотреть говно
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Portfolio;
