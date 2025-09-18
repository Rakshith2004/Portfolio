import React from 'react';
import { Code, Coffee, Lightbulb, Users } from 'lucide-react';

const About: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and efficient code following best practices.'
    },
    {
      icon: Lightbulb,
      title: 'Problem Solving',
      description: 'Analytical thinking to break down complex problems into manageable solutions.'
    },
    {
      icon: Users,
      title: 'Team Player',
      description: 'Collaborative approach with excellent communication and leadership skills.'
    },
    {
      icon: Coffee,
      title: 'Continuous Learning',
      description: 'Always staying updated with the latest technologies and industry trends.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="relative group">
              <div className="w-80 h-80 mx-auto relative overflow-hidden rounded-full bg-gradient-to-br from-blue-400/20 to-purple-600/20 p-1">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <div className="w-64 h-64 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-6xl font-bold text-white">
                    R
                  </div>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-300"></div>
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Hi there! I'm a passionate developer who loves creating amazing digital experiences.
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                With a strong foundation in both frontend and backend technologies, I enjoy the entire 
                process of bringing ideas to life. From conceptualization to deployment, I'm committed 
                to delivering high-quality solutions that make a difference.
              </p>
              <p className="text-gray-300 leading-relaxed">
                When I'm not coding, you'll find me exploring new technologies, contributing to open-source 
                projects, or sharing knowledge with the developer community. I believe in continuous learning 
                and staying at the forefront of technological innovation.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group p-6 bg-slate-900/50 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-lg group-hover:from-blue-500/30 group-hover:to-purple-600/30 transition-all duration-300">
                      <feature.icon className="w-6 h-6 text-blue-400" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">{feature.title}</h4>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;