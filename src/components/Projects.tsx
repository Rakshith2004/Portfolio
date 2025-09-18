import React, { useState } from 'react';
import { Github, ExternalLink, X } from 'lucide-react';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with user authentication, product management, and payment integration.',
      fullDescription: 'Built with React, Node.js, and PostgreSQL, this platform features user authentication, product catalog management, shopping cart functionality, secure payment processing with Stripe, order tracking, and an admin dashboard for inventory management.',
      image: 'https://images.pexels.com/photos/34577/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'JWT'],
      github: '#',
      demo: '#',
      category: 'Full Stack'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      fullDescription: 'A comprehensive task management solution featuring real-time collaboration, drag-and-drop task organization, team management, progress tracking, deadline notifications, and detailed analytics. Built with modern web technologies for optimal performance.',
      image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Vue.js', 'Express.js', 'MongoDB', 'Socket.io'],
      github: '#',
      demo: '#',
      category: 'Frontend'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts and interactive charts.',
      fullDescription: 'An intuitive weather dashboard that provides current conditions, 7-day forecasts, interactive weather maps, historical data visualization, and location-based alerts. Features include geolocation support, multiple city tracking, and customizable themes.',
      image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React', 'TypeScript', 'Chart.js', 'OpenWeather API'],
      github: '#',
      demo: '#',
      category: 'Frontend'
    },
    {
      id: 4,
      title: 'API Gateway Service',
      description: 'A microservices API gateway with authentication, rate limiting, and monitoring.',
      fullDescription: 'A robust API gateway service designed for microservices architecture. Features include request routing, load balancing, authentication and authorization, rate limiting, request/response transformation, comprehensive logging, and real-time monitoring with health checks.',
      image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Node.js', 'Redis', 'Docker', 'Nginx', 'JWT'],
      github: '#',
      demo: '#',
      category: 'Backend'
    },
    {
      id: 5,
      title: 'Social Media Analytics',
      description: 'A data visualization platform for social media metrics and engagement analysis.',
      fullDescription: 'An advanced analytics platform that aggregates social media data from multiple platforms, provides real-time engagement metrics, sentiment analysis, competitor benchmarking, automated reporting, and predictive insights using machine learning algorithms.',
      image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['Python', 'Django', 'D3.js', 'PostgreSQL', 'Redis'],
      github: '#',
      demo: '#',
      category: 'Full Stack'
    },
    {
      id: 6,
      title: 'Mobile Fitness Tracker',
      description: 'A React Native mobile app for fitness tracking with workout plans and progress monitoring.',
      fullDescription: 'A comprehensive fitness tracking mobile application featuring personalized workout plans, exercise libraries with video demonstrations, progress tracking with detailed analytics, social challenges, nutrition logging, and integration with wearable devices.',
      image: 'https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React Native', 'Firebase', 'Node.js', 'MongoDB'],
      github: '#',
      demo: '#',
      category: 'Mobile'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            A showcase of my recent work and projects that demonstrate my skills and passion for development.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group bg-slate-900/50 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-blue-500/20 backdrop-blur-sm text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="bg-slate-800 text-gray-300 px-2 py-1 rounded-md text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-gray-500 text-xs px-2 py-1">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
                
                <div className="flex gap-4">
                  <button 
                    onClick={() => setSelectedProject(project.id)}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 text-sm"
                  >
                    View Details
                  </button>
                  <a href={project.github} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300">
                    <Github size={16} className="text-gray-400 hover:text-white" />
                  </a>
                  <a href={project.demo} className="p-2 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors duration-300">
                    <ExternalLink size={16} className="text-gray-400 hover:text-white" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;
                
                return (
                  <>
                    <div className="relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover"
                      />
                      <button 
                        onClick={() => setSelectedProject(null)}
                        className="absolute top-4 right-4 p-2 bg-slate-800/80 backdrop-blur-sm rounded-full hover:bg-slate-700 transition-colors duration-300"
                      >
                        <X size={20} className="text-white" />
                      </button>
                    </div>
                    
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                        <span className="bg-blue-500/20 backdrop-blur-sm text-blue-400 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">
                          {project.category}
                        </span>
                      </div>
                      
                      <p className="text-gray-300 leading-relaxed mb-6">
                        {project.fullDescription}
                      </p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.technologies.map((tech, index) => (
                            <span 
                              key={index}
                              className="bg-slate-800 text-gray-300 px-3 py-2 rounded-lg text-sm font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-4">
                        <a 
                          href={project.github}
                          className="flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                        >
                          <Github size={20} />
                          View Code
                        </a>
                        <a 
                          href={project.demo}
                          className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300"
                        >
                          <ExternalLink size={20} />
                          Live Demo
                        </a>
                      </div>
                    </div>
                  </>
                );
              })()}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;