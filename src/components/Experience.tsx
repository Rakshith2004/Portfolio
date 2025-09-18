import React from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      position: 'Senior Full Stack Developer',
      company: 'TechCorp Solutions',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      type: 'Full-time',
      description: 'Leading development of scalable web applications using React, Node.js, and cloud technologies. Mentoring junior developers and architecting solutions for enterprise clients.',
      achievements: [
        'Improved application performance by 40% through optimization techniques',
        'Led a team of 5 developers on a mission-critical project',
        'Implemented CI/CD pipeline reducing deployment time by 60%',
        'Architected microservices infrastructure serving 100K+ users'
      ],
      technologies: ['React', 'Node.js', 'TypeScript', 'AWS', 'Docker', 'PostgreSQL']
    },
    {
      position: 'Full Stack Developer',
      company: 'Digital Innovations Inc',
      location: 'Austin, TX',
      period: '2020 - 2022',
      type: 'Full-time',
      description: 'Developed and maintained multiple web applications, collaborated with cross-functional teams, and contributed to the company\'s digital transformation initiatives.',
      achievements: [
        'Built responsive web applications serving 50K+ monthly users',
        'Reduced page load times by 50% through code optimization',
        'Integrated payment systems increasing revenue by 25%',
        'Collaborated with UX team to improve user engagement by 35%'
      ],
      technologies: ['Vue.js', 'Python', 'Django', 'MongoDB', 'Redis', 'Docker']
    },
    {
      position: 'Frontend Developer',
      company: 'StartupXYZ',
      location: 'Remote',
      period: '2019 - 2020',
      type: 'Contract',
      description: 'Focused on creating engaging user interfaces and implementing responsive designs for various client projects.',
      achievements: [
        'Delivered 15+ client projects on time and within budget',
        'Implemented modern design systems improving consistency',
        'Optimized mobile performance increasing user retention',
        'Collaborated with designers to create pixel-perfect interfaces'
      ],
      technologies: ['React', 'JavaScript', 'SASS', 'Figma', 'Git']
    },
    {
      position: 'Junior Web Developer',
      company: 'WebFlow Agency',
      location: 'New York, NY',
      period: '2018 - 2019',
      type: 'Full-time',
      description: 'Started my professional journey building websites and learning modern web development practices under senior developer mentorship.',
      achievements: [
        'Built 10+ responsive websites from scratch',
        'Learned modern JavaScript frameworks and libraries',
        'Contributed to open-source projects',
        'Completed advanced web development certification'
      ],
      technologies: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'Bootstrap', 'PHP']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Work <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            My professional journey and the impact I've made at various organizations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-0.5 w-0.5 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                } flex-col md:items-start`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                }`}>
                  <div className="group bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105">
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span className="bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-xs font-medium border border-blue-500/30">
                        {exp.type}
                      </span>
                      <div className="flex items-center text-gray-400 text-sm">
                        <Calendar size={14} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors duration-300">
                      {exp.position}
                    </h3>
                    <div className="flex items-center gap-4 mb-4">
                      <h4 className="text-lg text-blue-400 font-semibold">{exp.company}</h4>
                      <div className="flex items-center text-gray-400 text-sm">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 leading-relaxed mb-4">
                      {exp.description}
                    </p>
                    
                    <div className="mb-4">
                      <h5 className="text-white font-semibold mb-2">Key Achievements:</h5>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-gray-400 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h5 className="text-white font-semibold mb-2">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-slate-700 text-gray-300 px-2 py-1 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-full px-6 py-3 border border-slate-700/50">
            <ExternalLink size={16} className="text-blue-400" />
            <span className="text-gray-300">Want to see my full resume?</span>
            <button className="text-blue-400 hover:text-blue-300 font-medium ml-2">
              Download PDF
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;