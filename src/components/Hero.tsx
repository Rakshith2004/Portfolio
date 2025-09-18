import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const texts = ['Full Stack Developer', 'Software Engineer', 'Problem Solver', 'Tech Enthusiast'];

  useEffect(() => {
    const currentText = texts[currentIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000);
        } else {
          setDisplayText(currentText.substring(0, displayText.length + 1));
        }
      } else {
        if (displayText === '') {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length);
        } else {
          setDisplayText(currentText.substring(0, displayText.length - 1));
        }
      }
    }, isDeleting ? 100 : 150);

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts]);

  const scrollToNextSection = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-blue-900/20">
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute bg-blue-400/10 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${Math.random() * 4 + 1}px`,
                height: `${Math.random() * 4 + 1}px`,
                animationDelay: `${Math.random() * 2}s`,
                animationDuration: `${Math.random() * 3 + 2}s`,
              }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <p className="text-lg text-gray-300 animate-slide-up" style={{ animationDelay: '0.2s' }}>
              Hello, I'm
            </p>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-purple-500 to-blue-600 bg-clip-text text-transparent animate-slide-up" 
                style={{ animationDelay: '0.4s' }}>
              Rakshith V Rao
            </h1>
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-2xl md:text-3xl text-gray-300 animate-slide-up" 
                  style={{ animationDelay: '0.6s' }}>
                {displayText}
                <span className="animate-blink">|</span>
              </h2>
            </div>
          </div>

          <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed animate-slide-up" 
             style={{ animationDelay: '0.8s' }}>
            Passionate about creating innovative solutions and building exceptional digital experiences 
            with modern technologies. Always eager to learn and tackle challenging problems.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up" 
               style={{ animationDelay: '1s' }}>
            {/* Download Resume Button */}
            <a 
              href="/Rakshith_V_Rao_Resume.pdf" 
              download="Rakshith_V_Rao_Resume.pdf"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center gap-2"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
            </a>

            {/* Social Links */}
            {/* Links */}
            <div className="flex gap-4">
              <a href="https://github.com/Rakshith2004" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <Github size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/rakshith-v-rao-611633266/" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <Linkedin size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
              <a href="mailto:raorakshith163@gmail.com" className="p-3 bg-slate-800 hover:bg-slate-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg group">
                <Mail size={24} className="group-hover:rotate-12 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>

        {/* Scroll Down Button */}
        <button 
          onClick={scrollToNextSection}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-blue-400 transition-colors duration-300"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
